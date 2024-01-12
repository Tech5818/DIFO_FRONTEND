import { Mobile, PC } from '../../Responsive';
import {
  M_CLOSE_BTN,
  M_Header,
  M_HeaderSide,
  M_Layer,
  M_MENU_NAV,
  M_Menu,
  P_HeaderContainer,
  P_HeaderGNB,
  P_HeaderMenu,
} from '../../style/header/header.style';
import { Logo } from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMessage,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Provider';
import { MenuItem } from './MenuItem';
import { Link, useLocation } from 'react-router-dom';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const Header = () => {
  const { onMenu, setOnMenu } = useContext(Context);
  const [menu, setMenu] = useState('');

  const location = useLocation();

  const handleMenu = () => {
    setOnMenu(!onMenu);
  };

  useEffect(() => {
    setMenu(location.pathname);
  }, [location]);

  return (
    <>
      <Mobile>
        <M_Header>
          <Logo />
          <M_HeaderSide>
            <Link to='/messageList'>
              <FontAwesomeIcon
                icon={faMessage}
                fontSize='20px'
              />
            </Link>
            <FontAwesomeIcon
              icon={faBars}
              fontSize='24px'
              onClick={handleMenu}
            />
          </M_HeaderSide>
        </M_Header>
        <M_Layer display={onMenu ? 'block' : 'none'}>
          <M_Menu
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                duration: 0.5,
              },
            }}
          >
            <M_MENU_NAV
              variants={variants}
              initial={false}
              animate={onMenu ? 'open' : 'closed'}
            >
              <MenuItem i={0} title='작업물' />
              <MenuItem i={1} title='게시판' />
              <MenuItem i={2} title='급식표' />
              <MenuItem i={3} title='용산03' />
            </M_MENU_NAV>
            <M_CLOSE_BTN
              icon={faXmark}
              fontSize='30px'
              onClick={handleMenu}
            />
          </M_Menu>
        </M_Layer>
      </Mobile>
      <PC>
        <P_HeaderContainer>
          <Logo />
          <P_HeaderGNB>
            <P_HeaderMenu
              to='/works/portfolio/write'
              color={
                menu === '/works/portfolio/write'
                  ? '#4285EB'
                  : ''
              }
              fontFamily={
                menu === '/works/portfolio/write'
                  ? 'medium'
                  : ''
              }
            >
              포트폴리오
            </P_HeaderMenu>
            <P_HeaderMenu
              to='/works/project/write'
              color={
                menu === '/works/project/write'
                  ? '#4285EB'
                  : ''
              }
              fontFamily={
                menu === '/works/project/write'
                  ? 'medium'
                  : ''
              }
            >
              프로젝트
            </P_HeaderMenu>
          </P_HeaderGNB>
        </P_HeaderContainer>
      </PC>
    </>
  );
};
