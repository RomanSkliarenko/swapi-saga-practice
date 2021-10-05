import { takeLatest, put, call } from 'redux-saga/effects';
import { SET_HERO_ACTION } from '../reducers/heroReducer';
import IHero from '../../types/hero.interface';

// --------- action type and action creator
const SAGA_SET_HERO_ACTION_TYPE = "SAGA_SET_HERO_ACTION";
export const SAGA_SET_HERO_ACTION = (payload:number) => ({ type: SAGA_SET_HERO_ACTION_TYPE, payload });
// ----------------------------------------

async function getHero(current:number) {
  const req = await fetch(`https://swapi.dev/api/people/${current}/`);
  const data = await req.json();
  return data;
}

type workerHeroSagaArgumet<I> = {payload:I, type: string}
export function* workerHeroSaga(action : workerHeroSagaArgumet<number>) {
  const data:IHero = yield call(getHero, action.payload);
  yield put(SET_HERO_ACTION(data));
}

export function* watchHeroSaga() {
  yield takeLatest(SAGA_SET_HERO_ACTION_TYPE, workerHeroSaga);
}

export default function* heroSaga() {
  yield watchHeroSaga();
}
