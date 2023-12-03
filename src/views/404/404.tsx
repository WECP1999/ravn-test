import NotFound from '../../assets/404.svg';
import { NavLinkButton, Text } from '../../components/shared/commons';
import { PageBody, PageContainer } from './styles/style';
import 'twin.macro';

const Index = () => {
  return (
    <PageContainer>
      <img
        tw="absolute w-[651px] -top-56 left-0 right-0 bottom-0 m-auto"
        src={NotFound}
      />
      <PageBody>
        <Text tw="font-bold text-6xl tracking-tighter">
          Ooops! <br /> You weren’t <br /> supposed to see this
        </Text>
        <Text tw="max-w-[360px] m-auto">
          The page you’re looking for no longer exists. Return to the home page
          and remember:
          <br />
          you haven't seen anything.
        </Text>
        <NavLinkButton
          to="/"
          tw="w-fit m-auto"
          typeButton="primary"
        >
          Back to home
        </NavLinkButton>
      </PageBody>
    </PageContainer>
  );
};

export default Index;
