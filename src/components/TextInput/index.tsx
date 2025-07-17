import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput as ReactTextInput,
  View,
  TouchableOpacity,
  TextInputProps as RNTextInputProps,
  Text,
  Image,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';
type TextInputProps = {
  title: string;
  secureTextEntry?: boolean;
} & RNTextInputProps;

const TextInput: React.FC<TextInputProps> = ({
  title,
  secureTextEntry,
  ...rest
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry ?? false);

  const toggleSecure = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container}>
      <ReactTextInput
        style={styles.input}
        placeholder={title}
        placeholderTextColor="#D2D2D2"
        secureTextEntry={isSecure}
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.iconContainer} onPress={toggleSecure}>
          <Image
            source={isSecure ? images.EyeShow : images.EyeHide}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;
