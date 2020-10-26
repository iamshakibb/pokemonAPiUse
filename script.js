function fetchPokemon() {
  for (let i = 1; i < 24; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => res.json())
      .then((data) => {
        pokemonDiv(data, i);
        console.log(typeof data.abilities);
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
        <img src="https://pokeres.bastionbot.org/images/pokemon/${i}.png">
        <h6 class="my-4">${data.name}</h6>
        <p>Ability : ${data.abilities[0].ability.name}</p>
        <p>Weight : ${data.weight}</p>
      </div>
  
  `;
  root.append(div);
}

fetchPokemon();
