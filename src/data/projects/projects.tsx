import {
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import {
  SiExpress,
  SiJquery,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const projects = [
  [
    {
      nome: "Crypto Dashboard",
      descricao:
        "Aplicação para exibição de preços e histórico informativo de criptomoedas.",
      techs: [<SiTailwindcss color="#35b3eb" />, <FaVuejs color="#3fb17f" />],
      icon: "https://coin-price-app.vercel.app/assets/logo.5d00c9f2.png",
      links: {
        web: "https://coin-price-app.vercel.app/",
        github: "https://github.com/C836/Crypto-Dashboard",
      },
    },
    {
      nome: "Livraria API",
      descricao:
        "Sistema de registro de dados para uma livraria seguindo o padrão de interface API Rest",
      techs: [
        <SiSqlite color="#258bcc" />,
        <SiExpress color="gray" />,
        <FaNodeJs color="#7ab503" />,
      ],
      icon: "https://i.ibb.co/MPJJNVd/opened-book-3169.png",
      links: {
        web: "https://livraria-apirest.herokuapp.com/",
        github: "https://github.com/C836/Livraria-API",
      },
    },
    {
      nome: "Jogo da Forca",
      descricao:
        "Recriação do jogo da forca utilizando JavaScript, Com 12 níveis disponíveis separados em fácil, médio, difícil, e insano!",
      techs: [
        <FaCss3 color="#254bdd" />,
        <SiJquery color="#1066a9" />,
        <FaJs color="#efd81d" />,
      ],

      icon: "https://c836.github.io/Jogo-da-forca/imagens/iconMorte.png",
      links: {
        web: "https://c836.github.io/Jogo-da-forca/",
        github: "https://github.com/C836/Jogo-da-forca",
      },
    },
  ],
  [
    {
      nome: "Livraria Bluefish",
      descricao:
        "Protótipo de um website de e-commerce de livros, incluindo um sistema de rotas e operações CRUD.",
      techs: [<SiVite color="#f1bc1c" />, <FaReact color="#5dd2f3" />],

      icon: "https://livraria-bluefish.vercel.app/assets/logo.6494d55d.png",
      links: {
        web: "https://livraria-bluefish.vercel.app/",
        github: "https://github.com/C836/Livraria-Bluefish",
      },
    },
    {
      nome: "Calculadora",
      descricao: "Pequeno experimênto com Typescript. Uma calculadora científica com opção de dark mode!",
      techs: [
        <SiTypescript color="#2c74c4" />,
        <FaReact color="#5dd2f3" />,
      ],

      icon: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Circle-icons-calculator.svg",
      links: {
        web: "https://www.google.com",
        github: "https://www.github.com",
      },
    },
    {
      nome: "Solar System",
      descricao: "Um sistema solar animado e interativo utilizando SASS.",
      techs: [
        <FaSass color="#c66394" />,
        <SiTypescript color="#2c74c4" />,
        <FaReact color="#5dd2f3" />,
      ],

      icon: "https://raw.githubusercontent.com/C836/Solar-System/main/src/assets/images/earth.png",
      links: {
        web: "https://solar-system-rust.vercel.app/",
        github: "https://github.com/C836/Solar-System",
      },
    },
  ],
];
