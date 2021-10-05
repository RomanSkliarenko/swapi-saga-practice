import { useEffect, useState } from "react";
import IHero from "../types/hero.interface";
import Layout from "./layout";
import Spinner from "./spinner";

export default function Heroes():JSX.Element {
  const [heroes, setHeroes] = useState<IHero[]|null>(null);
  useEffect(() => {
    async function getHeroes() {
      const req = await fetch(`https://swapi.dev/api/people/`);
      const data = await req.json();
      setHeroes(data.results);
    }
    getHeroes();
  }, []);
  return (
    <Layout>
      <ul>
        {heroes ? heroes.map((hero) => (<li key={hero.name}>{hero.name}</li>)) : <Spinner />}
      </ul>
    </Layout>
  );
}
