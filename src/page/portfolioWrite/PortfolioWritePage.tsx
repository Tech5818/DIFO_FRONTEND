import React from 'react';
import {
  M_PortfolioWriteButton,
  PortfolioWriteBox,
  PortfolioWriteButton,
  PortfolioWriteContainer,
  PortfolioWriteMain,
  PortfolioWriteTitle,
  PortfolioWriteTitleInput,
} from '../../style/portfolio/portfolio.style';
import { Editor } from '@toast-ui/react-editor';
import { Mobile, PC } from '../../Responsive';

const PortfolioWritePage = () => {
  const handleSubmitEvnet = (
    e: React.FormEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <PortfolioWriteContainer>
        <PortfolioWriteBox
          as='form'
          display='flex'
          onSubmit={handleSubmitEvnet}
        >
          <PortfolioWriteTitle>
            포트폴리오 작성
          </PortfolioWriteTitle>
          <PortfolioWriteMain>
            <PortfolioWriteTitleInput placeholder='포트폴리오의 제목을 입력해주세요' />
            <Editor
              initialValue='포트폴리오를 자유롭게 작성하세요!'
              height='500px'
              previewStyle='vertical'
            />
          </PortfolioWriteMain>
          <PC>
            <PortfolioWriteButton colorScheme='messenger'>
              게시하기
            </PortfolioWriteButton>
          </PC>
          <Mobile>
            <M_PortfolioWriteButton colorScheme='messenger'>
              게시하기
            </M_PortfolioWriteButton>
          </Mobile>
        </PortfolioWriteBox>
      </PortfolioWriteContainer>
    </>
  );
};

export default PortfolioWritePage;
