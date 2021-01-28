import Head from "next/head";
import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizLogo from "../src/components/QuizLogo";
import Input from "../src/components/Input";
import Button from "../src/components/Button";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Valorant QUIZ</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta
          property="og:image"
          content="https://scontent.fcgh34-1.fna.fbcdn.net/v/t1.0-9/139369975_490873948979309_3292305700757819868_o.png?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeF3T5ep79hP3a0-5EzjJX4SALLrN95i45oAsus33mLjmtg8bgGBzQ9EoXq6S5PeMAKdPHZTJYMmlRzOkTq5aMu8&_nc_ohc=HwUccTgFm3kAX9Bq2oz&_nc_ht=scontent.fcgh34-1.fna&oh=654b780757590a3e84043b6b141f23db&oe=60332A80"
          key="image"
        />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Valorant</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/caioharuo" />
    </QuizBackground>
  );
}
