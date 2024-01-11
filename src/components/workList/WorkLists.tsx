import { PropsWithChildren } from 'react';
import {
  M_WorkListsContainer,
  M_WorkListsType,
} from '../../style/workList/workLists.style';

export const WorkLists = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <M_WorkListsType>최근</M_WorkListsType>
      <M_WorkListsContainer>
        {children}
      </M_WorkListsContainer>
    </>
  );
};
