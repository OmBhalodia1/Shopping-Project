import React, { ReactNode } from 'react';
import { View } from 'react-native';

type SectionProps = {
  title?: ReactNode;
  sectionContent: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, sectionContent }) => {
  return (
    <View style={{ gap: 10 }}>
      {title}
      {sectionContent}
    </View>
  );
};

export default Section;
