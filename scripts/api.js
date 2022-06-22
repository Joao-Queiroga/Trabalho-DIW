async function Busca(url) {
  const apiKey = "c927cf03dd7b7c113b3dea11b53f9ce1";
  const language = "pt-BR"
  return fetch(`${url}?api_key=${apiKey}&language=${language}&page=1`)
    .then(response => response.json())
//    .then(data => dados = data.results);
}

async function buscaUnica(url) {
  const apiKey = "c927cf03dd7b7c113b3dea11b53f9ce1";
  const language = "pt-BR"
  console.log(`${url}?api_key=${apiKey}&language=${language}&page=1`)
  return fetch(`${url}?api_key=${apiKey}&language=${language}&page=1`)
    .then(response => response.json())
}
/*
https://api.themoviedb.org/3/movie/latest?api_key=c927cf03dd7b7c113b3dea11b53f9ce1&language=pt-BR&page=1
* */
