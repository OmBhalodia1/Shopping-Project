import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export type OrderStatusStep = {
  title: string;
  description?: string;
  dateTime?: string;
  state: 'active' | 'pending' | 'error';
  expected?: boolean;
  highlight?: boolean;
};

type OrderStatusProps = {
  steps: OrderStatusStep[];
  onPress?: () => void;
};

const OrderStatus: React.FC<OrderStatusProps> = ({ steps, onPress }) => (
  <View>
    {steps.map((step, idx) => (
      <View key={idx} style={{ marginBottom: 36, paddingHorizontal: 8 }}>
        <View style={styles.rowBetween}>
          {step.state === 'error' ? (
            <TouchableOpacity onPress={onPress}>
              <Text
                style={[
                  styles.title,
                  styles.errorTitle,
                  step.highlight && styles.highlightTitle,
                ]}
              >
                {step.title}
              </Text>
            </TouchableOpacity>
          ) : (
            <Text
              style={[
                styles.title,
                step.state === 'active' && styles.active,
                step.state === 'pending' && styles.pending,
                step.highlight && styles.highlightTitle,
              ]}
            >
              {step.title}
            </Text>
          )}

          {step.dateTime && (
            <Text
              style={[
                styles.dateTime,
                step.state === 'pending' && styles.expectedBox,
                step.state === 'active' && styles.activeDate,
                step.state === 'error' && styles.errorDateTime,
                step.highlight && styles.highlightDateTime,
              ]}
            >
              {step.expected ? `Expected on ${step.dateTime}` : step.dateTime}
            </Text>
          )}
        </View>
        {step.description && step.description.length > 0 && (
          <Text
            style={[
              styles.description,
              step.state === 'pending' && styles.pendingText,
            ]}
          >
            {step.description}
          </Text>
        )}
      </View>
    ))}
  </View>
);

export default OrderStatus;
