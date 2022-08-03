import React from "react";

export default function Beers() {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    const fetchBeers = () => {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => {
          return response.json();
        })
        .then((arrayOfBeers) => setBeers(arrayOfBeers))
        .then(() => console.log("?", beers));
    };
    fetchBeers();
  }, []);

  return (
    <div>
      <ol>
        {beers.map((beer) => {
          return (
            <li key={beer.id}>
              <h2>{beer.name}</h2>
              <p>Tagline: {beer.tagline}</p>
              <p>ABV: {beer.abv}</p>
              <p>IBU: {beer.ibu}</p>
              <p>Food Pairing: {beer.food_pairing}</p>
              <p></p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
