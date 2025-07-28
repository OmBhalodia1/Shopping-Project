import { Image, Text, View } from 'react-native';
import React from 'react';
import Button from '../Button';
import { styles } from './styles';

type ReviewOrdersProps = {
  id: string;
  description: string;
  date: string;
  image: any;
  onPress?: () => void;
};

const ReviewOrders: React.FC<ReviewOrdersProps> = ({
  id,
  description,
  image,
  date,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageShadow}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.infoSection}>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.bold}> Order #{id}</Text>
        <View style={styles.footer}>
          <Text style={styles.date}>{date}</Text>
          <Button
            title="Review"
            mode="outline"
            style={styles.button}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
};

export default ReviewOrders;
