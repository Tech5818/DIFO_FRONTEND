import { PropsWithChildren } from 'react';
import {
  M_CommentContainer,
  M_CommentList,
  M_CommentTitle,
} from '../../style/comment/comment.style';
import { CommentLeave } from './CommentLeave';
import { Mobile } from '../../Responsive';

export const Comment = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <Mobile>
        <M_CommentContainer>
          <M_CommentTitle>댓글</M_CommentTitle>
          <M_CommentList>{children}</M_CommentList>
          <CommentLeave />
        </M_CommentContainer>
      </Mobile>
    </>
  );
};
