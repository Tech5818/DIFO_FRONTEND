import { Variants } from 'framer-motion';
import {
  M_RecentBox,
  M_RecentContainer,
  M_RecentMore,
  M_RecentPostBox,
  M_RecentPostTime,
  M_RecentPostTitle,
  M_RecentTitle,
  M_RecentTitleBox,
} from '../../style/recent/recent.style';

export const Recent = ({
  variants,
}: {
  variants: Variants;
}) => {
  return (
    <>
      <M_RecentContainer variants={variants}>
        <M_RecentBox>
          <M_RecentTitleBox justifyContent='space-between'>
            <M_RecentTitle>최근 게시물</M_RecentTitle>
            <M_RecentMore>더보기</M_RecentMore>
          </M_RecentTitleBox>
          <M_RecentPostBox>
            <M_RecentPostTitle>
              하핫 제목이다 asdfsdssfsdfsd fsfdsfsd
            </M_RecentPostTitle>
            <M_RecentPostTime>5분전</M_RecentPostTime>
          </M_RecentPostBox>
        </M_RecentBox>
      </M_RecentContainer>
    </>
  );
};
