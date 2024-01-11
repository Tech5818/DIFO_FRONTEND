import { Comment } from '../../components/comment/Comment';
import { CommnetItem } from '../../components/comment/CommentItem';
import { Recommend } from '../../components/recommend/Recommend';
import {
  M_PortfolioBox,
  M_PortfolioContainer,
  M_PortfolioDate,
  M_PortfolioMain,
  M_PortfolioStack,
  M_PortfolioStacks,
  M_PortfolioTitle,
  M_PortfolioWriter,
  M_PortfolioWriterImg,
  M_PortfolioWriterName,
  M_PortfolioWriterNameDate,
} from '../../style/portfolio/portfolio.style';

export const Portfolio = () => {
  return (
    <>
      <M_PortfolioContainer>
        <M_PortfolioBox>
          <M_PortfolioWriter>
            <M_PortfolioWriterImg />
            <M_PortfolioWriterNameDate>
              <M_PortfolioWriterName>
                신권호
              </M_PortfolioWriterName>
              <M_PortfolioDate>5분전</M_PortfolioDate>
            </M_PortfolioWriterNameDate>
          </M_PortfolioWriter>
          <M_PortfolioMain>
            <M_PortfolioTitle>
              제목이다 하하
            </M_PortfolioTitle>
            <M_PortfolioStacks>
              <M_PortfolioStack>
                프론트엔드
              </M_PortfolioStack>
              <M_PortfolioStack>
                프론트엔드
              </M_PortfolioStack>
              <M_PortfolioStack>
                프론트엔드
              </M_PortfolioStack>
              <M_PortfolioStack>
                프론트엔드 및 AWS
              </M_PortfolioStack>
              <M_PortfolioStack>
                프론트엔드
              </M_PortfolioStack>
              <M_PortfolioStack>
                프론트엔드
              </M_PortfolioStack>
            </M_PortfolioStacks>
          </M_PortfolioMain>
        </M_PortfolioBox>
        <Recommend />
        <Comment>
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
        </Comment>
      </M_PortfolioContainer>
    </>
  );
};
const PortfolioPage = () => {
  return <></>;
};

export default PortfolioPage;
