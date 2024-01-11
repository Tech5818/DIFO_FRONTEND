import React from 'react';
import {
  M_NoticeBoardPostButton,
  M_NoticeBoardWriteBox,
  M_NoticeBoardWriteContainer,
  M_NoticeBoardWriteMain,
  M_NoticeBoardWriteMainText,
  M_NoticeBoardWriteMainTitleInput,
  M_NoticeBoardWriterDate,
  M_NoticeBoardWriterImage,
  M_NoticeBoardWriterInfo,
  M_NoticeBoardWriterName,
  M_NoticeBoardWriterNameDate,
} from '../../style/noticeBoardWrite/noticeBoardWrite.style';

const NoticeBoardWritePage = () => {
  const handleForm = (
    e: React.FormEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <M_NoticeBoardWriteContainer
        as='form'
        display='flex'
        onSubmit={handleForm}
      >
        <M_NoticeBoardWriteBox>
          <M_NoticeBoardWriterInfo>
            <M_NoticeBoardWriterImage />
            <M_NoticeBoardWriterNameDate>
              <M_NoticeBoardWriterName>
                신권호
              </M_NoticeBoardWriterName>
              <M_NoticeBoardWriterDate>
                5분전
              </M_NoticeBoardWriterDate>
            </M_NoticeBoardWriterNameDate>
          </M_NoticeBoardWriterInfo>
          <M_NoticeBoardWriteMain>
            <M_NoticeBoardWriteMainTitleInput placeholder='제목을 입력해 주세요' />
            <M_NoticeBoardWriteMainText
              placeholder='본문을 입력해 주세요'
              resize='none'
            />
          </M_NoticeBoardWriteMain>
        </M_NoticeBoardWriteBox>
        <M_NoticeBoardPostButton colorScheme='messenger'>
          게시하기
        </M_NoticeBoardPostButton>
      </M_NoticeBoardWriteContainer>
    </>
  );
};

export default NoticeBoardWritePage;
