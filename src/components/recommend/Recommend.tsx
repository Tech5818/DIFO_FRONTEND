import {
  M_RecommendBox,
  M_RecommendButton,
  M_RecommendContainer,
  M_RecommendWord,
} from '../../style/recommend/recommend.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const Recommend = () => {
  return (
    <>
      <M_RecommendContainer>
        <M_RecommendBox>
          <M_RecommendButton>
            <FontAwesomeIcon
              icon={faThumbsUp}
              fontSize='32px'
              style={{ color: '#aaa' }}
            />
          </M_RecommendButton>
          <M_RecommendWord>10개</M_RecommendWord>
        </M_RecommendBox>
      </M_RecommendContainer>
    </>
  );
};
