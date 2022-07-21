import { AddToRefConfig } from "../../App";

export interface Config {
  data: {
    nome: string;
    descricao: string;
    tech: {
      icon: JSX.Element;
      color: string;
    };
    techs: string[];
    cover: string;
    gif: string;
    links: {
      web: string;
      github: string;
    };
  };
  addToRef: any;
  right?: boolean;
}
