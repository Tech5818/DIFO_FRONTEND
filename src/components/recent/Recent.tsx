import { Variants } from 'framer-motion';
import {
  M_RecentBox,
  M_RecentContainer,
  M_RecentMore,
  M_RecentTitle,
  M_RecentTitleBox,
} from '../../style/recent/recent.style';
import { RecentLists } from './RecentLists';
import { RecentItem } from './RecentItem';
import { Link } from 'react-router-dom';
import { Mobile } from '../../Responsive';

export const Recent = ({
  variants,
}: {
  variants: Variants;
}) => {
  return (
    <>
      <Mobile>
        <M_RecentContainer variants={variants}>
          <M_RecentBox>
            <M_RecentTitleBox justifyContent='space-between'>
              <M_RecentTitle>최근 게시물</M_RecentTitle>
              <M_RecentMore>
                <Link to='/boards'>더보기</Link>
              </M_RecentMore>
            </M_RecentTitleBox>
            <RecentLists>
              <RecentItem
                title='제목인데 어쩔건데'
                writer='신권호'
                date='5분전'
              />
            </RecentLists>
          </M_RecentBox>
        </M_RecentContainer>
      </Mobile>
    </>
  );
};
