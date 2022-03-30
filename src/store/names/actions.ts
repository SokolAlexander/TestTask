import {Dispatch} from 'redux';
import {API_URL} from '../../utils/constants';
import {
  GenderData,
  GetGenderFailure,
  BaseAction,
  GetGenderSuccess,
} from './types';

export const GET_GENDER_REQUEST = 'NAMES::GET_GENDER_REQUEST';
export const GET_GENDER_SUCCESS = 'NAMES::GET_GENDER_SUCCESS';
export const GET_GENDER_FAILURE = 'NAMES::GET_GENDER_FAILURE';

export const getGenderRequest = (): BaseAction => ({
  type: GET_GENDER_REQUEST,
});

export const getGenderSuccess = (genderData: GenderData): GetGenderSuccess => ({
  type: GET_GENDER_SUCCESS,
  payload: genderData,
});

export const getGenderFailure = (errorMsg: string): GetGenderFailure => ({
  type: GET_GENDER_FAILURE,
  payload: errorMsg,
});

export const getGender = (name: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(getGenderRequest());

    const response = await fetch(`${API_URL}${name}`);
    const result = await response.json();

    if (!result.gender) {
      throw new Error(result.error || 'Nothing found');
    }

    dispatch(getGenderSuccess(result));
  } catch (e: any) {
    dispatch(getGenderFailure(e.message));
  }
};
