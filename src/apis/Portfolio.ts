import axios from 'axios';

export const getPortfoliosByRecommend = async () => {
  const res = await axios.get(
    'https://difo-server-7bc245dc68fb.herokuapp.com/api/v1/portfolio/recommend',
  );

  return res.data;
};

export const getPortfolioDetails = async (
  portfolioId: number,
) => {
  const res = await axios.get(
    `https://difo-server-7bc245dc68fb.herokuapp.com/api/v1/portfolio/view?id=${portfolioId}`,
  );

  return res.data.data;
};

export const getRecentPortfolio = async () => {
  const res = await axios.get(
    'https://difo-server-7bc245dc68fb.herokuapp.com/api/v1/portfolio/all',
  );

  return res.data.data;
};
