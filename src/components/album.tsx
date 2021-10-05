import { useAppDispatch, useAppSelector } from '../hooks';
import IHero from '../types/hero.interface';
import { SAGA_SET_HERO_ACTION } from '../redux/sagas/heroSaga';
import { useEffect, useState } from 'react';
import Layout from './layout';
import Spinner from './spinner';

export default function Album(): JSX.Element {
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(1);
  const hero:IHero = useAppSelector((state) => state.hero);
  const dispatch = useAppDispatch();
  // const [hero, setHero] = useState<IHero|null>(null);
  useEffect(() => {
    dispatch(SAGA_SET_HERO_ACTION(currentHeroIndex));
    // ============ variant without redux

    // async function getHero(index:number) {
    //   const req = await fetch(`https://swapi.dev/api/people/${index}/`);
    //   const data = await req.json();
    //   setHero(data);
    // }
    // getHero(currentHeroIndex);

    // ===================================
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      {hero ? (
        <>
          <p>{hero.name}</p>
          <p>{hero.homeworld}</p>
          <p>
            eye color:
            {' '}
            {hero.eye_color}
          </p>
          <p>
            gender:
            {' '}
            {hero.gender}
          </p>
          <p>
            height:
            {' '}
            {hero.height}
          </p>
          <button
            type="button"
            onClick={() => {
          setCurrentHeroIndex(currentHeroIndex - 1);
          dispatch(SAGA_SET_HERO_ACTION(currentHeroIndex - 1));
        }}
          >
            {' '}
            previous hero
          </button>
          <button
            type="button"
            onClick={() => {
            setCurrentHeroIndex(currentHeroIndex + 1);
          dispatch(SAGA_SET_HERO_ACTION(currentHeroIndex + 1));
        }}
          >
            {' '}
            next hero
          </button>

        </>
) : <Spinner /> }
    </Layout>
  );
}
