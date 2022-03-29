import {
  GET_GENDER_FAILURE,
  GET_GENDER_REQUEST,
  GET_GENDER_SUCCESS,
} from './actions';
import {
  GetGenderFailure,
  GetGenderSuccess,
  NamesActions,
  NamesState,
  REQUEST_STATUS,
} from './types';

const initialState: NamesState = {
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null,
  },
  name: '',
  gender: '',
  stats: {
    countFemale: 0,
    history: {},
  },
};

export const namesReducer = (
  state = initialState,
  action: NamesActions,
): NamesState => {
  switch (action.type) {
    case GET_GENDER_REQUEST:
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.PENDING,
          error: null,
        },
      };
    case GET_GENDER_FAILURE:
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.FAILURE,
          error: (action as GetGenderFailure).payload,
        },
      };
    case GET_GENDER_SUCCESS: {
      const {
        payload: {name, gender},
      } = action as GetGenderSuccess;
      const historyCount = state.stats.history[name] || 0;
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.SUCCESS,
        },
        name,
        gender,
        stats: {
          countFemale:
            gender === 'female'
              ? state.stats.countFemale + 1
              : state.stats.countFemale,
          history: {
            ...state.stats.history,
            [name]: historyCount + 1,
          },
        },
      };
    }
    default:
      return state;
  }
};
