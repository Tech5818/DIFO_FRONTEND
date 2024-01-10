import { Mobile } from '../../Responsive';
import {
  M_Header,
  M_HeaderSide,
  M_Layer,
  M_Menu,
} from '../../style/header/header.style';
import { Logo } from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../../Provider';

export const Header = () => {
  const { onMenu, setOnMenu } = useContext(Context);

  const handleMenu = () => {
    setOnMenu(!onMenu);
  };

  return (
    <>
      <Mobile>
        <M_Header>
          <Logo />
          <M_HeaderSide>
            <FontAwesomeIcon icon={faMessage} fontSize='20px' />
            <FontAwesomeIcon
              icon={faBars}
              fontSize='24px'
              onClick={handleMenu}
            />
          </M_HeaderSide>
        </M_Header>
        <M_Layer display={onMenu ? 'block' : 'none'}>
          <M_Menu>
            <FontAwesomeIcon
              icon={faXmark}
              fontSize='30px'
              onClick={handleMenu}
            />
          </M_Menu>
        </M_Layer>
      </Mobile>
    </>
  );
};
