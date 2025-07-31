import React, { ReactNode, Ref, useEffect, useRef } from 'react';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';

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
      containerStyle={{ backgroundColor: 'transparent' }}
    >
      {children}
    </ActionSheet>
  );
}
