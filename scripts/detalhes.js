const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id)

async function mostraDetalhes() {
  const detalhes = Busca(`https://api.themoviedb.org/3/movie/${id}`).then(dados => console.log(dados))
}

mostraDetalhes()
