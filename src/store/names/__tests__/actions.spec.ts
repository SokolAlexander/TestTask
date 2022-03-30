import {
  getGender,
  getGenderFailure,
  getGenderRequest,
  getGenderSuccess,
  GET_GENDER_REQUEST,
} from '../actions';
import {GenderData} from '../types';

describe('getGenderRequest', () => {
  it('returns object', () => {
    const expected = {
      type: GET_GENDER_REQUEST,
    };

    const received = getGenderRequest();

    expect(expected).toEqual(received);
  });
});

const mockResponse: GenderData = {
  gender: 'male',
  name: '012',
  probability: 0,
  count: 1,
};

describe('getGender', () => {
  beforeEach(() => {
    fetchMock.mockOnce(JSON.stringify(mockResponse));
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('dispatches getGenderRequest', () => {
    const mockDispatch = jest.fn();

    getGender('name')(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getGenderRequest());
  });

  it('dispatches getGenderSuccess if fetch succeeded', async () => {
    const mockDispatch = jest.fn();

    await getGender('name')(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith(
      getGenderSuccess(mockResponse),
    );
  });

  it('dispatches getGenderFailure if fetch failed', async () => {
    const mockDispatch = jest.fn();
    fetchMock.resetMocks();

    const errorMsg = 'Test error';
    fetchMock.mockReject(new Error(errorMsg));

    await getGender('name')(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith(getGenderFailure(errorMsg));
  });

  it('dispatches getGenderFailure if fetch suceeded but no gender received', async () => {
    const mockDispatch = jest.fn();
    fetchMock.resetMocks();

    const errorMsg = 'Nothing found';
    fetchMock.mockResponseOnce(JSON.stringify({...mockResponse, gender: null}));

    await getGender('name')(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith(getGenderFailure(errorMsg));
  });
});
