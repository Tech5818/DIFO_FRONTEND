import { useNavigate } from 'react-router-dom';
import { Mobile, PC } from '../Responsive';
import LogoImg from '../assets/Logo.png';
import {
  M_LogoImage,
  P_LogoImage,
} from '../style/logo/logo.style';

export const Logo = () => {
  const navigate = useNavigate();
  /**
   * @todo 클릭시 HomePage로 이동
   */
  const handleClickLogo = () => {
    navigate('/');
  };

  return (
    <>
      <Mobile>
        <M_LogoImage
          src={LogoImg}
          onClick={handleClickLogo}
        />
      </Mobile>
      <PC>
        <P_LogoImage
          src={LogoImg}
          onClick={handleClickLogo}
        />
      </PC>
    </>
  );
};
