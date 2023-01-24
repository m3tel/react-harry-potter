import s from "./Cards.module.css";

export function Cards({name,actor,gender,house,alive,wand, image}) {
  return (
    <div className={s.heroCard}>
      <img
        className="heroPhoto"
        src={image}
        alt=""
        height="192"
        width="332"
      />
      <p className={s.heroTitle}> {name} </p>
      <p className={s.aboutHero}>Actor: {actor} </p>
      <p className={s.aboutHero}>Gender: { gender } </p>
      <p className={s.aboutHero}>House: { house }</p>
      <p className={s.aboutHero}>Wand core: { wand.core } </p>
      <p className={s.aboutHero}>Alive: { alive === true ? "yes": "no"} </p>
     
    </div>
  );
}
