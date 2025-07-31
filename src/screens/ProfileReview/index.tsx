import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { styles } from './styles';
import ModalReviewSuccess from '../../components/ModalReviewSuccess';

type ProfileReviewProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProfileReview: React.FC<ProfileReviewProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleStarPress = (index: number) => setRating(index + 1);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Review</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={images.ProfilePhoto} style={styles.avatar} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Text style={styles.bold}>Order #92287157</Text>
          </View>
        </View>

        <View style={styles.star}>
          {[0, 1, 2, 3, 4].map(idx => (
            <TouchableOpacity key={idx} onPress={() => handleStarPress(idx)}>
              <Image
                source={idx < rating ? icons.starFilled : icons.starNotFilled}
                resizeMode="contain"
                style={[styles.imageStar]}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Your comment</Text>
          <TextInput
            style={styles.input}
            value={comment}
            onChangeText={setComment}
            multiline
            placeholder="Write something..."
          />
        </View>

        <Button title="Say it!" onPress={handleSubmit} style={styles.button} />

        <Modal
          modalContent={
            <ModalReviewSuccess
              visible={isModalVisible}
              onRequestClose={handleModalClose}
              rating={rating}
            />
          }
        />
      </View>
    </BottomSheet>
  );
};

export default ProfileReview;
