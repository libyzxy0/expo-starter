import { Text, View, Modal, ModalContent, Button } from '../../'
import { useColors } from '@/hooks/useColors'
import Ionicons from '@expo/vector-icons/Ionicons';

type ModalConfirmProps = {
  onConfirm?: () => void;
  onClose?: () => void;
  visible: boolean;
  title?: string | null;
  description: string;
  closeAfterConfirm?: boolean;
  buttonLabel?: string;
}

export function ModalDestructive({ onConfirm, onClose, visible, title, description, closeAfterConfirm, buttonLabel }: ModalConfirmProps) {
  const colors = useColors();
  const handleConfirmation = () => {
    if(closeAfterConfirm) {
      onConfirm?.();
      onClose?.();
    } else {
      onConfirm?.();
    }
  }
  return (
    <Modal onRequestClose={onClose} visible={visible}>
      <ModalContent>
        <View>
          <View style={{
            alignItems: 'center',
          }}>
            <View style={{
              backgroundColor: colors.danger,
              padding: 14,
              borderRadius: 100,
              marginBottom: 4
            }}>
              <Ionicons name="warning-outline" size={28} color={"white"} />
            </View>
            <Text type={"bold"} style={{
              color: colors.danger,
              fontSize: 22
            }}>{title ? title : 'Are you sure?'}</Text>
            <Text type={"secondary"} style={{
              textAlign: 'center'
            }}>{description}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
            marginTop: 12
          }}>
            <Button 
            variant={"outline"} 
            onPress={onClose}
            style={{
              paddingHorizontal: 38
            }}
            >Cancel</Button>
            <Button
            variant={'danger'}
            onPress={handleConfirmation}
            style={{
              paddingHorizontal: 38
            }}>{buttonLabel ? buttonLabel : 'Delete'}</Button>
          </View>
        </View>
      </ModalContent>
    </Modal>
  )
}