import { Mobile, PC } from '../../Responsive';
import { BestWorks } from '../../components/bestWorks/BestWorks';
import { WorkList } from '../../components/workList/WorkList';
import {
  M_WorksContainer,
  P_WorksContainer,
} from '../../style/works/works.style';
import { Editor } from '@toast-ui/react-editor';

const WorksPage = () => {
  return (
    <>
      <Mobile>
        <M_WorksContainer>
          <BestWorks
            type='portfolio'
            title='최고의 포트폴리오'
          />
          <BestWorks
            type='project'
            title='최고의 프로젝트'
          />
          <WorkList />
        </M_WorksContainer>
      </Mobile>
    </>
  );
};

export default WorksPage;
