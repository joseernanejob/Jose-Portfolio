// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutArea,
  AboutAreaMessage,
} from "./style";

export const Home = (): JSX.Element => {
  const githubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/joseernanejob/Jose-Portfolio`;

  return (
    <main id='home'>
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color='grey4'>Olá, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as='h1' type='heading1' color='grey5'>
              Eu{" "}
              <Text as='span' type='heading1' color='brand1'>
                adoro
              </Text>{" "}
              criar e{" "}
              <Text as='span' type='heading1' color='brand1'>
                desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type='body1' color='grey2'>
              Conheça aqui neste ambiente, criado especialmente para você, um
              pouco dos meus projetos e tecnologias
            </Text>
            <HeaderButtonsArea>
              <Button as='a' type='primary' href='#projects'>
                Ver Projetos
              </Button>
              <Button as='a' type='outline' target='_blank' href={portfolioUrl}>
                Ver o código fonte do meu portfólio
              </Button>
              <Button
                color='grey5'
                as='a'
                css={{ "&:hover": { color: "$grey1" } }}
                type='circle'
                target='_blank'
                href={githubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutArea id='about'>
        <Container>
          <AboutAreaMessage>
            <Text as='h2' type='heading4' color='grey4'>
              Sobre mim
            </Text>
            <Text as='p' type='body1' color='grey2'>
              Oi! Tenho uma ampla experiência no desenvolvimento de projetos
              utilizando JavaScript ES6, TypeScript, Node.js, Python e Java.
            </Text>
            <Text as='p' type='body1' color='grey2'>
              Além disso, destaco minha habilidade na construção de projetos
              front-end com React e Next.js. Possuo vivência em metodologias
              ágeis, como SCRUM, utilizando ferramentas como Trello para a
              gestão de tarefas. Sou proficientes em controle de versionamento
              com GIT e tenho experiência na construção de APIs, utilizando
              frameworks como Express.js, NestJS, Django e Spring-Boot, com
              sólidos conhecimentos em SQL, especialmente PostgreSQL.
            </Text>
            <Text as='p' type='body1' color='grey2'>
              Sou formado em Análise e Desenvolvimento de Sistemas pela
              Faculdade Estácio e, além disso, completei minha formação como
              Desenvolvedor Web Full-Stack pela Kenzie Academy Brasil.
              Atualmente, exerço a função de monitor na Kenzie Academy Brasil,
              auxiliando outros desenvolvedores em projetos utilizando Html,
              Css, Javascript, Typescript, React e Sass.
            </Text>
          </AboutAreaMessage>
        </Container>
      </AboutArea>
      <ProjectsArea id='projects'>
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as='h2' type='heading4' color='grey4'>
                Meus Projetos
              </Text>
              <Text as='p' type='body1' color='grey2'>
                Alguns dos meus{" "}
                <Text as='span' color='brand5'>
                  projetos paralelos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
