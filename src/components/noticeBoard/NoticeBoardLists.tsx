import { PropsWithChildren } from 'react';
import { M_NoticeBoardsListsContainer } from '../../style/noticeBoards/noticeBoardsLists.style';

export const NoticeBoardLists = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <M_NoticeBoardsListsContainer>
        {children}
      </M_NoticeBoardsListsContainer>
    </>
  );
};
