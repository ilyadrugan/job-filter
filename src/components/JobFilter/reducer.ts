import { Job } from "../../types/jobs";

type FilterState = {
  experience: Job['experience'];
};

type FilterAction = {
  type: 'SET_EXPERIENCE';
  payload: Job['experience'];
};

export const initialState: FilterState = {
  experience: 'Любой',
};

export const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_EXPERIENCE':
      return { ...state, experience: action.payload };
    default:
      return state;
  }
};

export const experienceOptions: Job['experience'][] = [
  'Любой',
  '1–3 года',
  '3–5 лет',
  '5+ лет'
];
