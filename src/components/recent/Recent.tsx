import {
  M_RecentBox,
  M_RecentContainer,
  M_RecentMore,
  M_RecentTitle,
  M_RecentTitleBox,
} from '../../style/recent/recent.style';

export const Recent = () => {
  return (
    <>
      <M_RecentContainer>
        <M_RecentBox>
          <M_RecentTitleBox justifyContent='space-between'>
            <M_RecentTitle>최근 게시물</M_RecentTitle>
            <M_RecentMore>더보기</M_RecentMore>
          </M_RecentTitleBox>
        </M_RecentBox>
      </M_RecentContainer>
    </>
  );
};
