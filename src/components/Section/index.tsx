import React, { ReactNode } from 'react';

type SectionProps = {
  title?: ReactNode;
  sectionContent: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, sectionContent }) => {
  return (
    <>
      {title}
      {sectionContent}
    </>
  );
};

export default Section;
