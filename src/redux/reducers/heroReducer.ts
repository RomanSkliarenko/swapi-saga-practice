import IHero from "../../types/hero.interface";

// --------- action type and action creator
const SET_HERO = "SET_HERO";
export const SET_HERO_ACTION = (payload:IHero) => ({ type: SET_HERO, payload });
// ----------------------------------------

export default function reducer(state = null, action:{ type:string, payload: IHero | number}) {
  switch (action.type) {
    case "SET_HERO":
      return action.payload;
    default: {
      return state;
    }
  }
}
