export enum REQUEST_STATUS {
  'IDLE',
  'PENDING',
  'SUCCESS',
  'FAILURE',
}

export type Gender = 'male' | 'female' | '';

export type NamesState = {
  request: {
    status: REQUEST_STATUS;
    error: string | null;
  };
  name: string;
  gender: Gender;
  stats: {
    countFemale: number;
    history: {
      [name: string]: number;
    };
  };
};

export type GenderData = {
  name: string;
  gender: Gender;
  probability: number;
  count: number;
};

export interface BaseAction {
  type: string;
}

export interface GetGenderSuccess extends BaseAction {
  payload: GenderData;
}
export interface GetGenderFailure extends BaseAction {
  payload: string;
}

export type NamesActions = BaseAction | GetGenderFailure | GetGenderSuccess;
