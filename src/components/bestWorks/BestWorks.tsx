import {
  M_BestWorkContent,
  M_BestWorkContentImage,
  M_BestWorkContentTextArea,
  M_BestWorkContentTitle,
  M_BestWorkContentWriter,
  M_BestWorksContainer,
  M_BestWorksContents,
  M_BestWorksTitle,
} from '../../style/bestWorks/bestWorks.style';

interface BestWorksProps {
  title: string;
  type: 'portfolio' | 'project';
}

export const BestWorks = ({
  title,
  type,
}: BestWorksProps) => {
  return (
    <>
      <M_BestWorksContainer>
        <M_BestWorksTitle>{title}</M_BestWorksTitle>
        {type === 'portfolio' ? (
          <M_BestWorksContents>
            <M_BestWorkContent>
              <M_BestWorkContentImage />
              <M_BestWorkContentTextArea>
                <M_BestWorkContentTitle>
                  제목인데 어쩔건데 너가 뭘 할수 있지?
                </M_BestWorkContentTitle>
                <M_BestWorkContentWriter>
                  신권호
                </M_BestWorkContentWriter>
              </M_BestWorkContentTextArea>
            </M_BestWorkContent>
            <M_BestWorkContent></M_BestWorkContent>
          </M_BestWorksContents>
        ) : (
          <M_BestWorksContents>
            <M_BestWorkContent>
              <M_BestWorkContentImage />
              <M_BestWorkContentTextArea>
                <M_BestWorkContentTitle>
                  제목인데 어쩔건데 너가 뭘 할수 있지?
                </M_BestWorkContentTitle>
                <M_BestWorkContentWriter>
                  신권호
                </M_BestWorkContentWriter>
              </M_BestWorkContentTextArea>
            </M_BestWorkContent>
            <M_BestWorkContent></M_BestWorkContent>
          </M_BestWorksContents>
        )}
      </M_BestWorksContainer>
    </>
  );
};
