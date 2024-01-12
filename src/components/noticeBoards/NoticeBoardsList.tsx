import { useEffect, useState } from 'react';
import { Mobile } from '../../Responsive';
import {
  M_NoticeBoardsListContainer,
  M_NoticeBoardsListTab,
  M_NoticeBoardsListTabList,
  M_NoticeBoardsListTabPanel,
  M_NoticeBoardsListTabPanels,
  M_NoticeBoardsListTabs,
} from '../../style/noticeBoards/noticeBoardsList.style';
import { NoticeBoardItem } from './NoticeBoardsItem';
import { NoticeBoardLists } from './NoticeBoardsLists';
import { getBoards } from '../../apis/Board';

type boardProps = {
  boardId: number;
  title: string;
  contents: string;
  author: string;
  time: Date;
  likes: number;
};

export const NoticeBoardsList = () => {
  const [boards, setBoards] = useState<boardProps[]>();

  useEffect(() => {
    const getBoardsData = async () => {
      const response = await getBoards();
      setBoards(response.data);
    };

    getBoardsData();
  });

  return (
    <>
      <Mobile>
        <M_NoticeBoardsListContainer>
          <M_NoticeBoardsListTabs
            variant='soft-rounded'
            colorScheme='blue'
          >
            <M_NoticeBoardsListTabList>
              <M_NoticeBoardsListTab>
                최근
              </M_NoticeBoardsListTab>
              <M_NoticeBoardsListTab>
                인기
              </M_NoticeBoardsListTab>
            </M_NoticeBoardsListTabList>
            <M_NoticeBoardsListTabPanels>
              <M_NoticeBoardsListTabPanel>
                <NoticeBoardLists>
                  {!!boards && boards?.length === 0 && (
                    <h3>아직 게시글이 없네요ㅠㅠ</h3>
                  )}
                  {!!boards &&
                    boards.length !== 0 &&
                    boards.map((board, idx) => {
                      return (
                        <NoticeBoardItem
                          key={idx}
                          id={board.boardId}
                          title={board.title}
                          writer={board.author}
                          date={board.time.toDateString()}
                        />
                      );
                    })}
                </NoticeBoardLists>
              </M_NoticeBoardsListTabPanel>
            </M_NoticeBoardsListTabPanels>
          </M_NoticeBoardsListTabs>
        </M_NoticeBoardsListContainer>
      </Mobile>
    </>
  );
};
