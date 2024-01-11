import { PropsWithChildren } from 'react';
import { M_RecentPostBox } from '../../style/recent/recent.style';

export const RecentLists = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <M_RecentPostBox>{children}</M_RecentPostBox>
    </>
  );
};
