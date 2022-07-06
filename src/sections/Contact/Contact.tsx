import * as S from "./Contact.styled";
import { Config } from "./Contact.config";
import Form from "../../components/Form/Form";
import { Text, Title } from "../../components/Text/Text.styled";

export default function Contact(props: Config) {
  return (
    <S.Contact>
      <section>
        <Title>Contact.me</Title>

        <Text>
          Caso tenha algum interesse profissional ou queira trocar uma idéia
          comigo, me envie um email atráves do formulário abaixo ou pelas ícones
          ao lado. Tentarei responder o mais rápido possível!
        </Text>

        <Form />
      </section>
    </S.Contact>
  );
}