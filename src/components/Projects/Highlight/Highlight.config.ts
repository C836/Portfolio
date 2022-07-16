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
  HighlightRef?: React.RefObject<HTMLElement>;
  right?: boolean;
}
