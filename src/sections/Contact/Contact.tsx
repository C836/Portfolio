import * as S from "./Contact.styled";
import { Config } from "./Contact.config";

import Form from "../../components/Form/Form";
import { Text, Title } from "../../components/Text/Text.styled";

import { socials } from "../../data/socials";

export default function Contact(props: Config) {
  const { ContactRef } = props;

  return (
    <S.Contact ref={ContactRef}>
      <S.ContentWrapper>
        <S.Email>
          <Title>Contact.me</Title>

          <Text>
            Caso tenha algum interesse profissional ou queira trocar uma idéia
            comigo, me envie um email atráves do formulário abaixo ou pelas
            ícones ao lado. Tentarei responder o mais rápido possível!
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
