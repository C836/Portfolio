import * as S from "./Highlight.styled";
import { Config } from "./Highlight.config";

import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";

import { highlights } from "../../../data/projects/highlights";

export default function Highlight(props: Config) {
  return (
    <section>
      <div>
        <a target={"_blank"} href={highlights[0].links.web}>
          <figure>
            <img src={highlights[0].cover} />
          </figure>
        </a>
      </div>

      <article>
        <h3>{highlights[0].nome}</h3>
        <p>{highlights[0].descricao}</p>
        <ul>
          {highlights[0].tech.map((item: any, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          <li>
            <a target={"_blank"} href={highlights[0].links.github}>
              <SiGithub />
            </a>
          </li>
          <li>
            <a target={"_blank"} href={highlights[0].links.web}>
              <MdOpenInNew />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
