import {
  M_WorkListSearchBarInput,
  M_WorkListSearchBarStack,
} from '../../style/workListSearchBar/workListSearchBar';

export const WorkListSearchBar = () => {
  return (
    <>
      <M_WorkListSearchBarStack as='form'>
        <M_WorkListSearchBarInput placeholder='검색어를 입력해 주세요.' />
      </M_WorkListSearchBarStack>
    </>
  );
};
