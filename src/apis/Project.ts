import axios from 'axios';

export const getProjectByRecommend = async () => {
  const res = await axios.get(
    'https://difo-server-7bc245dc68fb.herokuapp.com/api/v1/project/recommend',
  );

  return res.data;
};

export const getProjectDetails = async (
  projectId: number,
) => {
  const res = await axios.get(
    `https://difo-server-7bc245dc68fb.herokuapp.com/api/v1/project/details?id=${projectId}`,
  );

  return res.data.data;
};

export const postProjectLike = async (
  projectId: number,
) => {
  const res = await axios.patch(
    `https://difo-server-7bc245dc68fb.herokuapp.com/api/v1/project/likes?id=${projectId}`,
  );

  return res.data.data;
};
