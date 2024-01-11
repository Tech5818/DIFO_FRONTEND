import {
  M_RecommendBox,
  M_RecommendButton,
  M_RecommendContainer,
  M_RecommendWord,
} from '../../style/recommend/recommend.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const Recommend = ({
  likes,
  likeButtonClickHandler,
}: {
  likes: number;
  likeButtonClickHandler: () => void;
}) => {
  return (
    <>
      <M_RecommendContainer>
        <M_RecommendBox>
          <M_RecommendButton
            onClick={likeButtonClickHandler}
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              fontSize='32px'
              style={{ color: '#aaa' }}
            />
          </M_RecommendButton>
          <M_RecommendWord>{`${likes}개`}</M_RecommendWord>
        </M_RecommendBox>
      </M_RecommendContainer>
    </>
  );
};
