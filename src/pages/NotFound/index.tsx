import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export const NotFound: React.FC = () => {
  return (
    <MainTemplate>
      <Container>
        <h1>404 - Not Found</h1>
      </Container>
    </MainTemplate>
  );
};
