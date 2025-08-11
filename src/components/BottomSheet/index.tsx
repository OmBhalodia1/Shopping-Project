import React, { ReactNode, Ref, useEffect, useRef } from 'react';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BottomSheetProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}>;

export default function BottomSheet({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (isOpen) {
      actionSheetRef.current?.show();
    } else {
      actionSheetRef.current?.hide();
    }
  }, [isOpen]);

  return (
    <ActionSheet
      ref={actionSheetRef}
      onClose={onClose}
      safeAreaInsets={{ ...insets, bottom: 0 }}
      containerStyle={{
        backgroundColor: 'white',
        paddingBottom: insets.bottom,
        overflow: 'hidden',
      }}
      useBottomSafeAreaPadding={false}
    >
      {children}
    </ActionSheet>
  );
}
