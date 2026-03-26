import { Container } from '../../components/Container';
import { Countdown } from '../../components/Countdown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export const Home: React.FC = () => {
  return (
    <MainTemplate>
      <Container>
        <Countdown formatterdSecondsRemaining='23:56' />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};
