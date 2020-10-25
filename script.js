function fetchPokemon() {
  for (let i = 0; i < 24; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
      .then((res) => res.json())
      .then((data) => {
        pokemonDiv(data, i);
      });
  }
}

function pokemonDiv(data, i) {
  const root = document.querySelector(".root");
  let div = document.createElement("div");
  div.classList.add("col-md-4");
  div.classList.add("col-sm-12");

  div.innerHTML = `
      <div class="pokemonSpecies p-4 my-5 text-center">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${i + 1}.png">
        <h6 class="my-4">${data.species.name}</h6>
        <p>Ability : ${data.abilities[0].ability.name}</p>
        <p>Weight : ${data.weight}</p>
      </div>
  
  `;
  root.append(div);
}

fetchPokemon();
