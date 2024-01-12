export type portfolio = {
  githubUrl: string;
  memberId: number;
  portfolioTitle: string;
  portfolioContent: string;
  createdDate: Date;
  portfolioId: number;
  likes: number;
};

export type project = {
  projectId: number;
  projectName: string;
  thumbnail: string;
  startDate: Date;
  endDate: Date;
  githubUrl: string;
  deployUrl: string;
  mainContents: string;
  userData: Member[];
  stacks: Stack[];
  likes: number;
};

export type Member = {
  memberId: number;
  name: string;
  email: string;
  githubUrl: string;
  projectsId: number[];
  portfolioId: number;
};

export type Stack = {
  stackId: number;
  stackName: string;
};

export type bestWorks = portfolio & project;
