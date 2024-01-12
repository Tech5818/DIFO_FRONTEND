import React from 'react';
import {
  M_ProjectWriteButton,
  ProjectWriteBox,
  ProjectWriteButton,
  ProjectWriteContainer,
  ProjectWriteMain,
  ProjectWriteTitle,
  ProjectWriteTitleInput,
} from '../../style/project/project.style';
import { Editor } from '@toast-ui/react-editor';
import { Mobile, PC } from '../../Responsive';

const ProjectWritePage = () => {
  const handleSubmitEvnet = (
    e: React.FormEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <ProjectWriteContainer>
        <ProjectWriteBox
          as='form'
          display='flex'
          onSubmit={handleSubmitEvnet}
        >
          <ProjectWriteTitle>
            프로젝트 작성
          </ProjectWriteTitle>
          <ProjectWriteMain>
            <ProjectWriteTitleInput placeholder='프로젝트의 제목을 입력해주세요' />
            <Editor
              initialValue='프로젝트를 자유롭게 작성하세요!'
              height='500px'
              previewStyle='vertical'
            />
          </ProjectWriteMain>
          <PC>
            <ProjectWriteButton colorScheme='messenger'>
              게시하기
            </ProjectWriteButton>
          </PC>
          <Mobile>
            <M_ProjectWriteButton colorScheme='messenger'>
              게시하기
            </M_ProjectWriteButton>
          </Mobile>
        </ProjectWriteBox>
      </ProjectWriteContainer>
    </>
  );
};

export default ProjectWritePage;
