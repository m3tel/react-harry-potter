import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main"
import { useState } from "react";
import { data } from "../../components/Cards/hp";

export function Home() {
  const [hero, setHero] = useState(data);
  const [house, setHouse] = useState("");

  function searchHero(event) {
    const hero = data.filter((el) =>
      el.name.toLowerCase().includes(event.target.value.trim().toLowerCase())
    );

    setHero(hero);
  }
  
  return (
    <>
      <Header />
      <Main
        hero={hero}
        house={house}
        searchHero={searchHero}
        setHouse={setHouse}
      />
    </>
  );
}
