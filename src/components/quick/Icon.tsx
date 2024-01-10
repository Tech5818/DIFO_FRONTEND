import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/free-solid-svg-icons';
import {
  IconBox,
  IconContainer,
  IconText,
} from '../../style/quick/Icon/icon.style';
import { useNavigate } from 'react-router-dom';

interface IconComponentProps {
  icon: IconLookup;
  text: string;
  background: string;
  to: string;
}

export const Icon = ({ icon, text, background, to }: IconComponentProps) => {
  const navigate = useNavigate();

  const handleClickIcon = () => {
    navigate(`/${to}`);
  };

  return (
    <>
      <IconContainer onClick={handleClickIcon}>
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
