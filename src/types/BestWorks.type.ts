type portfolio = {
  githubUrl: string;
  memberId: number;
  portfolioTitle: string;
  portfolioContent: string;
  createdDate: Date;
  portfolioId: number;
  likes: number;
};

type project = {
  projectId: number;
  projectName: string;
  thumbnail: string;
};

export type bestWorks = portfolio | project;
