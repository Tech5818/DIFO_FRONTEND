import {
  M_SearchBarInput,
  M_SearchBarStack,
} from '../../style/searchBar/searchBar.style';

export const SearchBar = () => {
  return (
    <>
      <M_SearchBarStack as='form'>
        <M_SearchBarInput placeholder='검색어를 입력해 주세요.' />
      </M_SearchBarStack>
    </>
  );
};
