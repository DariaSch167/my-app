import Card from "./card";
import cardData from "./card-data";

function CardList() {
  let cardHeroes = cardData.map(function (hero) {
    return (
      <Card
        name={hero.name}
        imgLink={hero.url}
        universe={hero.universe}
        alterego={hero.alterego}
        occupation={hero.occupation}
        superpowers={hero.superpowers}
      />
    );
  });
  return <div classname="cards-wrapper">{cardHeroes}</div>;
}

export default CardList;
