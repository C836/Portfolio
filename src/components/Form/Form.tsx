import * as S from "./Form.styled";
import { Config } from "./Form.config";

import emailjs, { init } from "@emailjs/browser";
import { useRef } from "react";
import Button from "../Button/Button";

export default function Form() {
  init(import.meta.env.VITE_USER_ID);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current || "",
      import.meta.env.VITE_PUBLIC_KEY
    );
    formRef.current?.reset();
    alert("Mensagem enviada!");
  };

  const reset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    formRef.current?.reset();
  }

  return (
    <S.Form ref={formRef} onSubmit={handleSubmit}>
      <fieldset>
        <S.Input type="text" name="nome" placeholder="Nome" required={true} />

        <S.Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
        />
      </fieldset>

      <S.Input
        type="text"
        name="assunto"
        placeholder="Assunto"
        required={true}
      />
      <S.Textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" />
      <S.Buttons>
        <Button colored transparent text="Enviar" />
        <Button onClick={reset} transparent text="Limpar" />
      </S.Buttons>
    </S.Form>
  );
}
