import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import VoucherCard from '../../components/VoucherCard';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import { voucherList } from './data';
import { styles } from './styles';
import Section from '../../components/Section';

const ProfileVoucher = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Section
        sectionContent={
          <View style={styles.headerRow}>
            <View style={styles.imageContainer}>
              <Image source={images.ProfilePhoto} style={styles.avatar} />
            </View>
            <View style={styles.headerRight}>
              <View style={styles.activityTitle}>
                <Text style={styles.activityText}>Vouchers</Text>
              </View>
              <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.headerIcons}>
                  <Image source={icons.voucherFilled} style={styles.icon} />
                </TouchableOpacity>
                <View style={{ position: 'relative' }}>
                  <TouchableOpacity style={styles.headerIcons}>
                    <Image source={icons.topMenu} style={styles.icon} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Image source={icons.settings} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
      <Section
        sectionContent={
          <View style={styles.progressWrapper}>
            <TouchableOpacity activeOpacity={0.8} style={styles.progressButton}>
              <Text style={styles.progressText}>Progress</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <Section
        sectionContent={
          <View style={styles.vouchersContainer}>
            {voucherList.map((voucher, idx) => (
              <VoucherCard
                key={idx}
                label={voucher.label}
                validUntil={voucher.validUntil}
                title={voucher.title}
                subtitle={voucher.subtitle}
                mode={voucher.mode}
                isCollected={voucher.isCollected}
                daysLeft={voucher.daysLeft}
              />
            ))}
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default ProfileVoucher;
