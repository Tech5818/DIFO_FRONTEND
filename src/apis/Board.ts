import axios from 'axios';

export const getBoards = async () => {
  const res = await axios.get(
    'https://difo-server-7bc245dc68fb.herokuapp.com/api/v1/board/10',
  );

  return res.data;
};
