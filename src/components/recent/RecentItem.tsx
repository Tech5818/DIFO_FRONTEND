import {
  M_RecentPostTime,
  M_RecentPostTitle,
  M_RecentPostWriter,
  M_RecentPostWriterTime,
} from '../../style/recent/recent.style';

interface RecentItemProps {
  title: string;
  writer: string;
  date: string;
}

export const RecentItem = ({
  title,
  writer,
  date,
}: RecentItemProps) => {
  return (
    <>
      <M_RecentPostTitle>{title}</M_RecentPostTitle>
      <M_RecentPostWriterTime>
        <M_RecentPostWriter>{writer}</M_RecentPostWriter>
        <M_RecentPostTime>{date}</M_RecentPostTime>
      </M_RecentPostWriterTime>
    </>
  );
};
