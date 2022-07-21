import * as S from "./Contact.styled";

import Form from "../../components/Form/Form";
import { Text, Title } from "../../components/Text/Text.styled";

import { socials } from "../../assets/data/socials";
import { AddToRefConfig } from "../../App";

import background_imgPath from "./../../assets/img/contact-background.jpeg"

export default function Contact(props: AddToRefConfig) {
  const { addToRef } = props;

  return (
    <S.Contact ref={addToRef} background={background_imgPath}>
      <S.ContentWrapper>
        <S.Email>
          <Title>Fale comigo</Title>

          <Text>
            Caso tenha algum interesse profissional ou só queira trocar uma
            ideia, contate-me atráves do formulário abaixo ou através das redes
            sociais ao lado. Tentarei responder o mais rápido possível!
          </Text>

          <Form />
        </S.Email>
        <S.Network>
          <S.Figure>
            <img src="https://s8.gifyu.com/images/aaf8f66c4b20995eb1.gif" />
          </S.Figure>

          <S.Links>
            {socials.map((item) => (
              <S.Icon href={item.url}>{item.icon}</S.Icon>
            ))}
          </S.Links>
        </S.Network>
      </S.ContentWrapper>
    </S.Contact>
  );
}
