import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiEslint,
  SiPrettier,
  SiJest,
  SiRedux,
  SiStyledcomponents,
  SiVercel,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import imgAPI from "../imgs/logo-small.png";
import {
  AboutContainer,
  Title,
  Paragraph,
  IconText,
  LinkStyled,
  Image,
  StyledIcon,
  IconWithText,
} from "../styles/styles";

function About() {
  return (
    <AboutContainer>
      <div>
        <Title>Meals</Title>
        <Paragraph>
          Meals é uma aplicação desenvolvida para facilitar a pesquisa e
          exploração de receitas culinárias. Utilizando a API TheMealDB, a
          aplicação permite que os utilizadores descubram pratos organizados por
          categorias, áreas de origem e ingredientes, oferecendo descrições
          detalhadas, imagens atrativas e um vídeo exemplificativo de cada
          refeição. Com recursos a filtragem dinâmica, paginação e integração de
          tecnologias como React, RTKQuery, Styled-Components, entre outros.
          Meals transforma a experiência de cozinhar em algo prático e
          inspirador para todos.
        </Paragraph>
      </div>

      <div>
        <Title>Tech Stacks</Title>
        <IconText>
          <StyledIcon>
            <IconWithText>
              <IoLogoJavascript />
              <LinkStyled href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                JavaScript
              </LinkStyled>
            </IconWithText>
          </StyledIcon>
        </IconText>

        <IconText>
          <StyledIcon>
            <IconWithText>
              <FaReact />
              <LinkStyled href="https://react.dev">React</LinkStyled>
            </IconWithText>
          </StyledIcon>
        </IconText>

        <IconText>
          <StyledIcon>
            <IconWithText>
              <SiEslint />
              <LinkStyled href="https://eslint.org">EsLint</LinkStyled>
            </IconWithText>
          </StyledIcon>
        </IconText>

        <IconText>
          <StyledIcon>
            <SiPrettier />
          </StyledIcon>
          <LinkStyled href="https://prettier.io">Prettier</LinkStyled>
        </IconText>

        <IconText>
          <StyledIcon>
            <SiJest />
          </StyledIcon>
          <LinkStyled href="https://jestjs.io">Jest</LinkStyled>
        </IconText>
        <IconText>
          <StyledIcon>
            <SiRedux />
          </StyledIcon>
          <LinkStyled href="https://redux.js.org">Redux</LinkStyled>
        </IconText>
        <IconText>
          <StyledIcon>
            <SiRedux />
          </StyledIcon>
          <LinkStyled href="https://redux-toolkit.js.org/rtk-query/overview">
            RTKQuery
          </LinkStyled>
        </IconText>
        <IconText>
          <StyledIcon>
            <SiStyledcomponents />
          </StyledIcon>
          <LinkStyled href="https://styled-components.com">
            Styled-Components
          </LinkStyled>
        </IconText>
      </div>

      <div>
        <Title>API</Title>
        <IconText>
          <LinkStyled href="https://www.themealdb.com/api.php">
            <Image src={imgAPI} alt="API" />
          </LinkStyled>
        </IconText>
      </div>

      <div>
        <Title>Links</Title>
        <Paragraph>
          <IconText>
            <StyledIcon>
              <FaGithub />
            </StyledIcon>
            <LinkStyled href="https://github.com/Rteixeira22/tdw-mp2-Rodrigo-Teixeira">
              GitHub
            </LinkStyled>
          </IconText>
        </Paragraph>
        <Paragraph>
          <IconText>
            <StyledIcon>
              <SiVercel />
            </StyledIcon>
            <LinkStyled href="https://mp2-five.vercel.app">Vercel</LinkStyled>
          </IconText>
        </Paragraph>
      </div>
    </AboutContainer>
  );
}

export default About;
