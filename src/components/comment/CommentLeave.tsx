import {
  M_CommentLeaveContainer,
  M_CommentLeaveInput,
} from '../../style/comment/commentLeave.style';

export const CommentLeave = () => {
  return (
    <>
      <Mobile>
        <M_CommentLeaveContainer as='form'>
          <M_CommentLeaveInput placeholder='댓글을 입력해 주세요' />
        </M_CommentLeaveContainer>
      </Mobile>
    </>
  );
};
