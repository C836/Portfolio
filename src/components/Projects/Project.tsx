import * as S from "./Project.styled";
import { Config } from "./Project.config";

import { projects } from "../../data/projects/projects";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project(props: Config) {
  return (
    <section>
      <figure>{projects[0].tech}</figure>
      <img src={projects[0].cover} />
      <h3>{projects[0].nome}</h3>
      <p>{projects[0].descricao}</p>
      <p></p>
      <div>
        <li>
          <a target={"_blank"} href={projects[0].links.github}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a target={"_blank"} href={projects[0].links.web}>
            <FaExternalLinkAlt />
          </a>
        </li>
      </div>
    </section>
  );
}
