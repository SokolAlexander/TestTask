import {NamesState} from './types';

export const selectName = (state: NamesState) => state.name;
export const selectGender = (state: NamesState) => state.gender;

export const selectRequestStatus = (state: NamesState) => state.request.status;
export const selectRequestError = (state: NamesState) => state.request.error;

export const selectHistory = (state: NamesState) => state.stats.history;
export const selectCountFemale = (state: NamesState) => state.stats.countFemale;
