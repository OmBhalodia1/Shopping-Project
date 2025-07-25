import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../Button';
import { icons } from '../../utils/icons';
import { styles } from './styles';

type StatusMode = 'packed' | 'shipped' | 'delivered';

export type ProfileOrderProps = {
  images: any[];
  orderId: string;
  itemsCount: number;
  deliveryType?: string;
  mode: StatusMode;
  onReviewButtonPress?: () => void;
  onTrackButtonPress?: () => void;
  buttonText: string;
};

const ProfileOrder: React.FC<ProfileOrderProps> = ({
  images,
  orderId,
  itemsCount,
  deliveryType = 'Standard Delivery',
  mode,
  onReviewButtonPress,
  onTrackButtonPress,
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
        <Text style={[styles.statusText]}>{text}</Text>
        {mode === 'delivered' && (
          <Image
            source={icons.check}
            style={styles.checkIcon}
            resizeMode="contain"
          />
        )}
      </View>
    );
  };

  const renderGrid = () => {
    if (images.length === 1) {
      return (
        <View style={styles.singleRow}>
          <Image
            source={images[0]}
            style={styles.singleImage}
            resizeMode="cover"
          />
        </View>
      );
    }
    if (images.length === 2) {
      return (
        <View style={styles.twoRow}>
          <Image
            source={images[0]}
            style={styles.twoImage}
            resizeMode="cover"
          />
          <Image
            source={images[1]}
            style={styles.twoImage}
            resizeMode="cover"
          />
        </View>
      );
    }
    if (images.length === 3) {
      return (
        <View style={styles.threeGrid}>
          <View style={styles.threeRow}>
            <Image
              source={images[0]}
              style={styles.threeImage}
              resizeMode="cover"
            />
            <Image
              source={images[1]}
              style={styles.threeImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.threeRow}>
            <Image
              source={images[2]}
              style={styles.threeImage1}
              resizeMode="stretch"
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.fourGrid}>
        <View style={styles.fourRow}>
          <Image
            source={images[0]}
            style={styles.fourImage}
            resizeMode="cover"
          />
          <Image
            source={images[1]}
            style={styles.fourImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.fourRow}>
          <Image
            source={images[2]}
            style={styles.fourImage}
            resizeMode="cover"
          />
          <Image
            source={images[3]}
            style={styles.fourImage}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageGrid}>{renderGrid()}</View>
      <View style={styles.middle}>
        <Text style={styles.orderText}>
          Order <Text style={styles.bold}>#{orderId}</Text>
        </Text>
        <Text style={styles.deliveryText}>{deliveryType}</Text>
        {renderStatus()}
      </View>
      <View style={styles.right}>
        <View style={styles.itemBadge}>
          <Text style={styles.itemText}>
            {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
          </Text>
        </View>
        {mode === 'delivered' ? (
          <Button
            title={buttonText}
            mode="outline"
            onPress={onReviewButtonPress}
            style={styles.actionButton}
          />
        ) : (
          <Button
            title={buttonText}
            mode="contained"
            onPress={onTrackButtonPress}
            style={styles.actionButton1}
          />
        )}
      </View>
    </View>
  );
};

export default ProfileOrder;
