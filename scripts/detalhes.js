const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id)

async function mostraDetalhes() {
  const detalhes = await Busca(`https://api.themoviedb.org/3/movie/${id}`);
  document.title = detalhes.title;
  console.log(detalhes);
  const poster = document.querySelector('#poster');
  poster.src = "https://image.tmdb.org/t/p/w500" + detalhes.poster_path;
  const titulo =  document.querySelector('#titulo');
  titulo.innerHTML = detalhes.title;
  const overview = document.querySelector('#overview');
  overview.innerHTML = detalhes.overview;
  let data = new Date(detalhes.release_date);
  data = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  const lancamento = document.querySelector('#lancamento');
  lancamento.innerHTML += data;
}

mostraDetalhes()
