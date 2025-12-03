import { ImageRequireSource } from "react-native";

export interface Movie {
  id: number;
  title: string;
  poster: ImageRequireSource;
  background: ImageRequireSource;
  year: number;
  timeInMin: number;
  directedBy: string;
  genre: string;
  sinopse: string;
  trailerUrl: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Eternal Sunshine of the Spotless Mind",
    poster: require("../../assets/images/poster_01.jpg"),
    background: require("../../assets/images/eternal_sunshine.jpg"),
    year: 2004,
    timeInMin: 108,
    directedBy: "Michel Gondry",
    genre: "Drama",
    sinopse:
      "Joel Barish, com o coração partido por sua namorada ter se submetido a um procedimento para apagá-lo de sua memória, decide fazer o mesmo. No entanto, enquanto observa suas lembranças dela desaparecerem, ele percebe que ainda a ama e que talvez seja tarde demais para corrigir seu erro.",
    trailerUrl: "https://www.youtube.com/watch?v=07-QBnEkgXU",
  },
  {
    id: 2,
    title: "Spider-Man: Into the Spider-Verse",
    poster: require("../../assets/images/poster_02.jpg"),
    background: require("../../assets/images/spider-man.jpg"),
    year: 2018,
    timeInMin: 117,
    directedBy: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    genre: "Action",
    sinopse:
      'Lutando para encontrar seu lugar no mundo enquanto concilia escola e família, o adolescente do Brooklyn, Miles Morales, é inesperadamente picado por uma aranha radioativa e desenvolve poderes inimagináveis, assim como o único e inigualável Homem-Aranha. Enquanto lida com as implicações de suas novas habilidades, Miles descobre um super colisor criado pelo lunático Wilson "Rei do Crime " Fisk, fazendo com que outros seres de todo o Aranhaverso sejam transportados inadvertidamente para sua dimensão.',
    trailerUrl: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
  },
  {
    id: 3,
    title: "Spirited Away",
    poster: require("../../assets/images/poster_03.jpg"),
    background: require("../../assets/images/spirited_away.jpg"),
    year: 2001,
    timeInMin: 125,
    directedBy: "Hayao Miyazaki",
    genre: "Fantasy",
    sinopse:
      "Uma jovem garota, Chihiro, fica presa em um estranho mundo de espíritos. Quando seus pais sofrem uma misteriosa transformação, ela precisa encontrar uma coragem que nunca soube que possuía para libertar sua família.",
    trailerUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
  },
  {
    id: 4,
    title: "Se7en",
    poster: require("../../assets/images/poster_04.jpg"),
    background: require("../../assets/images/se7en.jpg"),
    year: 1995,
    timeInMin: 127,
    directedBy: "David Fincher",
    genre: "Thriller",
    sinopse:
      'Neste filme sombrio e perturbador, dois detetives de homicídios embarcam numa busca desesperada por um assassino em série cujos crimes são baseados nos "sete pecados capitais", levando o espectador dos restos mortais torturados de uma vítima à seguinte. O experiente Detetive Somerset pesquisa cada pecado na tentativa de compreender a mente do assassino, enquanto seu parceiro novato, Mills, zomba de seus esforços para desvendar o caso. ',
    trailerUrl: "https://www.youtube.com/watch?v=znmZoVkCjpI",
  },
  {
    id: 5,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    poster: require("../../assets/images/poster_05.jpg"),
    background: require("../../assets/images/pirates_of_the_caribbean.jpg"),
    year: 2003,
    timeInMin: 143,
    directedBy: "Gore Verbinski",
    genre: "Adventure",
    sinopse:
      "Após Port Royal ser atacada e saqueada por uma misteriosa tripulação de piratas, que capturam Elizabeth Swann, a filha do governador, William Turner pede ao pirata Jack Sparrow, que o ajude a localizar o navio da tripulação — o Pérola Negra — para que ele possa resgatar a mulher que ama.",
    trailerUrl: "https://www.youtube.com/watch?v=naQr0uTrH_s",
  },
  {
    id: 6,
    title: "Dead Talents Society",
    poster: require("../../assets/images/poster_06.jpg"),
    background: require("../../assets/images/dead_talents_society.jpg"),
    year: 2024,
    timeInMin: 110,
    directedBy: "John Hsu",
    genre: "Comedy",
    sinopse:
      "Quando os fantasmas precisam competir para sobreviver no submundo assombrando os vivos, uma jovem despretensiosa precisa de ajuda para criar uma performance memorável sob a tutela de um agente apaixonado e uma diva decadente.",
    trailerUrl: "https://www.youtube.com/watch?v=PgmWdokIDsE",
  },
];
