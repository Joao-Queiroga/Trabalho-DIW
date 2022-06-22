async function Populares() {
  const url = "https://api.themoviedb.org/3/movie/popular"
  const busca = await Busca(url).then(data => dados = data.results);
  let populares = document.querySelector("#populares>.filmes");
  busca.map((filme) => {
    let card = document.createElement("div")
    card.classList.add('card', 'col-lg-3', 'mx-3')
    let img = document.createElement("img");
    img.src  = "https://image.tmdb.org/t/p/w500" + filme.backdrop_path;
    img.alt = "Poster"
    img.classList.add('img-thumbnail', 'card-img-top')
    card.appendChild(img);
    const cardBody = () => {
      let body = document.createElement("div");
      body.classList.add('card-body');
      let titulo = document.createElement("h5");
      titulo.classList.add('card-title');
      titulo.innerHTML = filme.title;
      body.appendChild(titulo);
      let texto = document.createElement("p");
      texto.classList.add('card-text', 'overflow-auto');
      texto.innerHTML = filme.overview;
      body.appendChild(texto);
      let detalhes = document.createElement("a");
      detalhes.classList.add('btn', 'btn-primary');
      detalhes.innerHTML = "Detalhes"
      detalhes.href = `detalhes.html?id=${filme.id}`
      body.appendChild(detalhes);
      return body;
    }
    card.appendChild(cardBody());
    populares.appendChild(card);
  })
}

/*async function Ultimos() {
  const url = "https://api.themoviedb.org/3/movie/latest"
  const busca = await Busca(url);
  console.log("Hello World")
  console.log(busca)
  let ultimos = document.querySelector("#ultimos>.filmes");
  const card = () => {
    let card = document.createElement("div")
    card.classList.add('card', 'col-lg-3', 'mx-3')
    let img = document.createElement("img");
    img.src  = "https://image.tmdb.org/t/p/w500" + busca.backdrop_path;
    img.alt = "Poster"
    img.classList.add('img-thumbnail', 'card-img-top')
    card.appendChild(img);
    const cardBody = () => {
      let body = document.createElement("div");
      body.classList.add('card-body');
      let titulo = document.createElement("h5");
      titulo.classList.add('card-title');
      titulo.innerHTML = busca.title;
      body.appendChild(titulo);
      let texto = document.createElement("p");
      texto.classList.add('card-text', 'overflow-auto');
      texto.innerHTML = busca.overview;
      body.appendChild(texto);
      let detalhes = document.createElement("a");
      detalhes.classList.add('btn', 'btn-primary');
      detalhes.innerHTML = "Detalhes"
      body.appendChild(detalhes);
      return body;
    }
    card.appendChild(cardBody());
    ultimos.appendChild(card);
  }
  card();
}*/

async function Cinema() {
  const url = "https://api.themoviedb.org/3/movie/now_playing"
  const busca = await Busca(url).then(data => dados = data.results);
  let cinema = document.querySelector("#cinema>.filmes");
  busca.map((filme) => {
    let card = document.createElement("div")
    card.classList.add('card', 'col-lg-3', 'mx-3')
    let img = document.createElement("img");
    img.src  = "https://image.tmdb.org/t/p/w500" + filme.backdrop_path;
    img.alt = "Poster"
    img.classList.add('img-thumbnail', 'card-img-top')
    card.appendChild(img);
    const cardBody = () => {
      let body = document.createElement("div");
      body.classList.add('card-body');
      let titulo = document.createElement("h5");
      titulo.classList.add('card-title');
      titulo.innerHTML = filme.title;
      body.appendChild(titulo);
      let texto = document.createElement("p");
      texto.classList.add('card-text', 'overflow-auto');
      texto.innerHTML = filme.overview;
      body.appendChild(texto);
      let detalhes = document.createElement("a");
      detalhes.classList.add('btn', 'btn-primary');
      detalhes.innerHTML = "Detalhes"
      detalhes.href = `detalhes.html?id=${filme.id}`
      body.appendChild(detalhes);
      return body;
    }
    card.appendChild(cardBody());
    cinema.appendChild(card);
  })
}

Populares()
//Ultimos()
Cinema()
