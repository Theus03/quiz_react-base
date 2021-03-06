import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/Widgets';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import Footer from '../src/components/Footer/Footer';
import QuizBackground from '../src/components/QuizBackground/QuizBg';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget> 
            <Widget.Header>
                <h1>MLB</h1>
            </Widget.Header>
            <Widget.Content>
                <p>Todo os seus conhecimentos sobre o universo da MLB, a maior e melhor liga de beisebol do Mundo!</p>
            </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>Dê uma chance nesses quizes incríveis que o pessoal da Imersão React Next.js fizeram:</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Theus03"/>
    </QuizBackground>
  );
}
