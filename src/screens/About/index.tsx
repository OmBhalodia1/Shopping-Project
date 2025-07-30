import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../../utils/images';
import Title from '../../components/Title';
import { styles } from './styles';
import Section from '../../components/Section';

const About = () => {
  return (
    <View style={styles.container}>
      <Section
        sectionContent={
          <Image
            source={images.about}
            style={styles.icon}
            resizeMode="contain"
          />
        }
      />
      <Section
        sectionContent={
          <View style={styles.titleContainer}>
            <Title label="About Shoppe" textStyle={styles.title} />
            <Text style={styles.description}>
              Shoppe - Shopping UI kit" is likely a user interface (UI) kit
              designed to facilitate the development of e-commerce or
              shopping-related applications. UI kits are collections of
              pre-designed elements, components, and templates that developers
              and designers can use to create consistent and visually appealing
              user interfaces.
            </Text>
            <Text style={styles.helpText}>
              If you need help or you have any questions, feel free to contact
              me by email.
            </Text>
            <TouchableOpacity>
              <Title label="hello@mydomain.com" textStyle={styles.email} />
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default About;
