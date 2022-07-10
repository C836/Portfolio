import { FaJs, FaAngular, FaVuejs, FaNodeJs } from "react-icons/fa";

export const highlights = [
  {
    nome: "Calculadora Geográfica",
    descricao:
      "Uma aplicação para calcular a distância entre dois ou mais pontos do mundo apenas pelo seu endereço! O sistema irá resolver a geolocalização e exibir a distância de qualquer lugar do planeta. Além disso, também conta com um painel que exibe o clima e o fuso horário do local selecionado, tudo isso em uma interface simples e intuitiva",
    tech: { icon: <FaJs />, color: "#efd81d" },
    techs: ["Leaflet", "OpenStreetMap", "Nominatim API", "Weather API"],
    cover:
      "https://portfolio-gnfumy51z-c836.vercel.app/assets/images/Projects/mapa.png",
    gif: "https://c.tenor.com/qMZe3e1Er7EAAAAC/example.gif",
    links: {
      web: "https://c836-calculadora-geografica.netlify.app/",
      github: "https://github.com/C836/Calculadora-Geografica",
    },
  },
  {
    nome: "GreatDex",
    descricao:
      "Meu primeiro projeto utilizando o framework Angular. A aplicação consiste em uma pokédex interativa utilizando PokeAPI para a requisição de todos os dados dos pokémons. Cada entrada da pokédex contém seu sprite animado e informações de combate, como stats e seus tipos. Atualmente exibindo todos os 913 pokémons!",
    tech: { icon: <FaAngular />, color: "#d6002f" },
    techs: ["Typescript", "SCSS", "PokeAPI", "Karma", "Jasmine"],
    cover:
      "https://i.ibb.co/W3StBKC/Captura-de-tela-de-2022-07-09-23-23-27.png",
    gif: "https://c.tenor.com/qMZe3e1Er7EAAAAC/example.gif",
    links: {
      web: "https://greatdex.vercel.app/",
      github: "https://github.com/C836/Greatdex",
    },
  },
  {
    nome: "Online Chat",
    descricao:
      "Uma sala de bate papo simples e dinâmica para conversar com seus amigos! A interface principal conta com um histórico de mensagens, uma lista com os usuários ativos e o campo de envio da mensagem, tendo a possibilidade de enviar mensagens para a sala ou para um usuário específico. A página contém um sistema de customização, permitindo alternar entre modo escuro ou claro as cores principais do layout.",
    tech: { icon: <FaNodeJs />, color: "#7fc728" },
    techs: ["HTML", "CSS", "Javascript", "Socket.IO"],
    cover:
      "https://raw.githubusercontent.com/C836/Online-chat/main/assets/components/images/chat.png",
    gif: "https://c.tenor.com/qMZe3e1Er7EAAAAC/example.gif",
    links: {
      web: "https://c836-online-chat.herokuapp.com/",
      github: "https://github.com/C836/Online-chat",
    },
  },
];
