import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../Button';
import { images } from '../../utils/images';

type ReviewOrdersProps = {
  id: string;
  description: string;
  date: string;
  image: any;
};

const ReviewOrders: React.FC<ReviewOrdersProps> = ({
  id,
  description,
  image,
  date,
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
        <Text style={styles.orderId}>
          Order <Text style={styles.bold}>{id}</Text>
        </Text>
        <View style={styles.footer}>
          <Text style={styles.date}>{date}</Text>
          <Button title="Review" mode="outline" style={styles.button} />
        </View>
      </View>
    </View>
  );
};

export default ReviewOrders;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  imageShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1608,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  infoSection: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  description: {
    color: '#000000',
    fontSize: 15,
    marginBottom: 5,
  },
  orderId: {
    color: '#000000',
    fontSize: 15,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    backgroundColor: '#EDEDED',
    color: '#000000',
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    fontWeight: '500',
  },
  button: {
    height: 36,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
});
