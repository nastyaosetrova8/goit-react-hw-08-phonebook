import { FcBusinessContact } from 'react-icons/fc';
import { PiPhoneCallFill } from 'react-icons/pi';
import { PagesStyled, HomeTitleStyled, HomeTitleWrapStyled, PnoneSvgStyled } from './Home.styled';

export default function Home() {
  return (
    <PagesStyled>
      <HomeTitleWrapStyled>
      <HomeTitleStyled>Welcome to your Phonebook app </HomeTitleStyled>
      <PnoneSvgStyled>
      <FcBusinessContact size={64} />
        <PiPhoneCallFill size={64} />
      </PnoneSvgStyled>
      </HomeTitleWrapStyled>
    </PagesStyled>
  );
}
