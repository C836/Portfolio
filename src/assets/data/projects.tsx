import { FaJs, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

export const projects = [
  {
    nome: "Calculadora Geográfica",
    descricao:
      "Uma aplicação para calcular a distância entre dois ou mais pontos do mundo apenas pelo seu endereço! O sistema irá resolver a geolocalização e exibir a distância de qualquer lugar do planeta. ",
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
      "Uma pokédex interativa utilizando PokeAPI para a requisição de todos os dados dos pokémons. Cada entrada da pokédex contém seu sprite animado e informações de combate, como stats e seus tipos. Atualmente exibindo todos os 913 pokémons!",
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
      "Uma sala de bate papo simples e dinâmica para conversar com seus amigos! A aplicação conta com um histórico de mensagens, uma lista de usuários ativos e um sistema de mensagens privada.",
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
  {
    nome: "Filmes API",
    descricao:
      "Sistema de registro de filmes seguindo o padrão de interface API Restful. O Projeto conta com uma documentação com todas as rotas, modelos e exemplos das requisições. ",
    tech: { icon: <SiNestjs />, color: "#d8244c" },
    techs: ["Typescript", "SQLite", "Jest", "Swagger"],
    cover:
      "https://gcdnb.pbrd.co/images/lzjVFG67GwAm.png?o=1",
    gif: "https://c.tenor.com/qMZe3e1Er7EAAAAC/example.gif",
    links: {
      web: "https://filmes-apirest.herokuapp.com/api",
      github: "https://github.com/C836/Nest-Filmes-API",
    },
  },
];
