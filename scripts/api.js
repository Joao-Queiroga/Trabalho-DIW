//fetch("https://api.themoviedb.org/3/movie/popular?&language=pt-BR&page=1")

async function busca(url) {
  const apiKey = "c927cf03dd7b7c113b3dea11b53f9ce1";
  const language = "pt-BR"
  return fetch(`${url}?api_key=${apiKey}&language=${language}&page=1`)
    .then(response => response.json())
    .then(data => dados = data.results);
}

//console.log(busca("https://api.themoviedb.org/3/movie/popular"));
