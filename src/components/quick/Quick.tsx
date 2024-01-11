import { M_Quick } from '../../style/quick/qucik.style';
import { Icon } from './Icon';
import {
  faLayerGroup,
  faTableColumns,
  faBowlFood,
  faBusSimple,
} from '@fortawesome/free-solid-svg-icons';

const IconContainerVariants = {
  close: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const IconVariants = {
  close: { opacity: 0, y: '100%' },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

export const Quick = () => {
  return (
    <>
      <M_Quick
        variants={IconContainerVariants}
        initial='close'
        animate='open'
      >
        <Icon
          variants={IconVariants}
          icon={faLayerGroup}
          text='작업물'
          background='#4285EB'
          to='works'
        />
        <Icon
          variants={IconVariants}
          icon={faTableColumns}
          text='게시판'
          background='#4285EB'
          to='boards'
        />
        <Icon
          variants={IconVariants}
          icon={faBowlFood}
          text='급식표'
          background='#4285EB'
          to=''
        />
        <Icon
          variants={IconVariants}
          icon={faBusSimple}
          text='용산 03'
          background='#4285EB'
          to=''
        />
      </M_Quick>
    </>
  );
};
