import { AddToRefConfig } from "../../App";

export interface Config {
  data: {
    nome: string;
    descricao: string;
    extra: string;
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
  addToRef: AddToRefConfig;
  right?: boolean;
}
