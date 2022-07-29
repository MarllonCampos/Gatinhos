const catArray = [
  '+1 gatinho com homofobia.jpg',
  'dentinho de gatinho olha ti fofo.jpg',
  'gatineo com a lingua p fora.jpg',
  'gatineo com nariz picado por abelha.jpg',
  'gatineo de perto.jpg',
  'gatineo gordinho com barriga p cima.jpg',
  'gatineo triste chorando no cantinho.jpg',
  'gatinho bochechudo.jpg',
  'gatinho espirrando.jpg',
  'gatinho furry.jpg',
  'gatinho no colo.jpg',
  'gatinho pistola com orelha de coelhinho.jpg',
  'gatinho protegido contra covid-19.jpg',
  'gatinho rebaixado.jpg',
  'gatinho tomando cafe da manha.jpg',
  'gatinho vacilao.jpg',
  'gatinho vampirinho.jpg',
  'gatito com moletom recebendo carinho.jpg',
  'gatito pequeno.jpg',
  'gatito pescotapa.jpg',
  'gatito puto enrolado no cobertor.jpg',
  'gatito tristinho.jpg',
  'gato com homofobia.jpg',
  'meu gatinho pirata.jpg',
  'meu gatito dormindo.jpg',
  'olha ti fofo mimindo.jpg',
  'patinha de gatineo 2.jpg',
  'patinha de gatineo 3.jpg',
  'patinha de gatineo.jpg',
  'sdds de voce pirata.jpg'
]

const imgElement = document.querySelector("main img")
const paragraphElement = document.querySelector("main p")
const TEN_SECONDS_TO_MILLI = 10000
const ONE_SECONDS_IN_MILLI = 1000

setInterval(() => {
  const randomPosition = Math.floor(Math.random() * (catArray.length));
  const catImgName = catArray[randomPosition]
  const catImgPath = `./photos/${catImgName}`
  imgElement.src = catImgPath
  imgElement.alt = catImgName


}, TEN_SECONDS_TO_MILLI)
let time = ONE_SECONDS_IN_MILLI / 100;
const setTimeOut = setInterval(() => {
  time--;
  console.log(time)
  paragraphElement.innerText = `A imagem do gatinho vai trocar em: ${time}s`;
  if (time == 0) time = ONE_SECONDS_IN_MILLI / 100;
}, ONE_SECONDS_IN_MILLI)
