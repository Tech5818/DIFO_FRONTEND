import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/free-solid-svg-icons';
import {
  IconBox,
  IconContainer,
  IconText,
} from '../../style/quick/Icon/icon.style';

interface IconComponentProps {
  icon: IconLookup;
  text: string;
  background: string;
}

export const Icon = ({ icon, text, background }: IconComponentProps) => {
  return (
    <>
      <IconContainer>
        <IconBox background={background}>
          <FontAwesomeIcon
            icon={icon}
            style={{ color: '#fff' }}
            fontSize='32px'
          />
        </IconBox>
        <IconText>{text}</IconText>
      </IconContainer>
    </>
  );
};
