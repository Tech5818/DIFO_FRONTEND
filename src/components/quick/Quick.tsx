import { M_Quick } from '../../style/quick/qucik.style';
import { Icon } from './Icon';
import {
  faLayerGroup,
  faTableColumns,
  faBowlFood,
  faBusSimple,
} from '@fortawesome/free-solid-svg-icons';

export const Quick = () => {
  return (
    <>
      <M_Quick>
        <Icon
          icon={faLayerGroup}
          text='작업물'
          background='#4285EB'
          to='works'
        />
        <Icon icon={faTableColumns} text='게시판' background='#4285EB' to='' />
        <Icon icon={faBowlFood} text='급식표' background='#4285EB' to='' />
        <Icon icon={faBusSimple} text='용산 03' background='#4285EB' to='' />
      </M_Quick>
    </>
  );
};
