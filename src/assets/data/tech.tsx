import {
  SiAngular,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVuedotjs,
} from "react-icons/si";

export const icons = {
  frontEnd: [
    { name: "Typescript", icon: <SiTypescript />, color: "#3074c4" },
    { name: "React", icon: <SiReact />, color: "#63dafb" },
    { name: "Vue", icon: <SiVuedotjs />, color: "#41b883" },
    { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
    { name: "Sass", icon: <SiSass />, color: "#c66393" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#523b73" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#15b3c7" },
  ],
  backEndEtc: [
    { name: "Git", icon: <SiGit />, color: "#e44c30" },
    { name: "Node", icon: <SiNodedotjs />, color: "#83cd29" },
    { name: "Express", icon: <SiExpress />, color: "#888484" },
    { name: "Socket.IO", icon: <SiSocketdotio />, color: "#414141" },
    { name: "MySQL", icon: <SiMysql />, color: "#00678c" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#6cac48" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#30628a" },
    { name: "Linux", icon: <SiLinux />, color: "#ffcc01" },
    { name: "VSCode", icon: <SiVisualstudiocode />, color: "#22a0e7" },
  ],
};
