import * as S from "./Form.styled";
import { Config } from "./Form.config";

import apiKey from "../../data/emailAPI";
import emailjs, { init } from "@emailjs/browser";
import { useRef } from "react";
import Button from "../Button/Button";

export default function Form() {
  init(apiKey.USER_ID);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      apiKey.SERVICE_ID,
      apiKey.TEMPLATE_ID,
      formRef.current || "",
      apiKey.PUBLIC_KEY
    );
    e.target.reset();
    alert("Mensagem enviada!");
  };

  return (
    <section>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <input type="text" name="nome" placeholder="Nome" required={true} />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
            />
          </div>
          <div>
            <input
              type="text"
              name="assunto"
              placeholder="Assunto"
              required={true}
            />
          </div>
          <div>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Sua mensagem"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div>
            <Button text="Enviar" />
          </div>
          <div>
            <Button text="Limpar" />
          </div>
        </div>
      </form>
    </section>
  );
}
