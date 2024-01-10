import { Mobile } from '../Responsive';
import LogoImg from '../assets/Logo.png';
import { M_LogoImage } from '../style/logo/logo.style';

export const Logo = () => {
  return (
    <>
      <Mobile>
        <M_LogoImage src={LogoImg} />
      </Mobile>
    </>
  );
};
