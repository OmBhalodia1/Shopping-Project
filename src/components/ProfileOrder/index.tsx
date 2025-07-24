import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../Button';
import { icons } from '../../utils/icons';

type StatusMode = 'packed' | 'shipped' | 'delivered';

type ProfileOrderProps = {
  images: string[];
  orderId: string;
  itemsCount: number;
  deliveryType?: string;
  mode: StatusMode;
  onButtonPress?: () => void;
  buttonText: string;
};

const ProfileOrder: React.FC<ProfileOrderProps> = ({
  images,
  orderId,
  itemsCount,
  deliveryType = 'Standard Delivery',
  mode,
  onButtonPress,
  buttonText,
}) => {
  const renderStatus = () => {
    const text =
      mode === 'packed'
        ? 'Packed'
        : mode === 'shipped'
        ? 'Shipped'
        : 'Delivered';

    return (
      <View style={styles.statusRow}>
        <Text
          style={[
            styles.statusText,
            mode === 'delivered' ? styles.delivered : styles.shipped,
          ]}
        >
          {text}
        </Text>
        {mode === 'delivered' && (
          <Image source={icons.check} style={styles.checkIcon} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.card}>
      {/* Image grid */}
      <View style={styles.imageGrid}>
        {images.slice(0, 4).map((img, i) => (
          <Image
            key={img + i}
            source={{ uri: img }}
            style={styles.gridImage}
            resizeMode="cover"
          />
        ))}
      </View>

      {/* Middle Info */}
      <View style={styles.middle}>
        <Text style={styles.orderText}>
          Order <Text style={styles.bold}>#{orderId}</Text>
        </Text>
        <Text style={styles.deliveryText}>{deliveryType}</Text>
        {renderStatus()}
      </View>

      {/* Right Side */}
      <View style={styles.right}>
        <View style={styles.itemBadge}>
          <Text style={styles.itemText}>
            {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
          </Text>
        </View>
        <Button
          title={buttonText}
          mode={mode === 'delivered' ? 'outline' : 'contained'}
          onPress={onButtonPress}
          style={styles.actionButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'flex-start',
  },
  imageGrid: {
    width: 64,
    height: 64,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 14,
  },
  gridImage: {
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
  },
  orderText: {
    fontSize: 14,
    color: '#111',
    marginBottom: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  deliveryText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 6,
  },
  shipped: {
    color: '#155CFF',
  },
  delivered: {
    color: '#155CFF',
  },
  checkIcon: {
    width: 18,
    height: 18,
    tintColor: '#155CFF',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 64,
  },
  itemBadge: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 6,
  },
  itemText: {
    fontSize: 13,
    color: '#111',
  },
  actionButton: {
    height: 36,
    paddingHorizontal: 18,
  },
});

export default ProfileOrder;
