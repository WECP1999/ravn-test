import { useCallback, useEffect } from 'react';
import { ModalContainer } from './styles/style';
import 'twin.macro';

interface ModalProps {
  children: React.ReactNode;
  isClosable?: boolean;
  show: boolean;
  onClose: () => void;
}

const ESCAPE_KEY = 'Escape';

const Modal = ({ children, isClosable = true, onClose, show }: ModalProps) => {
  const handleOnClose = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if ((event.target as HTMLInputElement).id === 'modal-container') {
        if (isClosable) {
          onClose();
        }
      }
    },
    [isClosable, onClose]
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === ESCAPE_KEY) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!show) return null;

  return (
    <ModalContainer
      id="modal-container"
      onClick={handleOnClose}
    >
      {children}
    </ModalContainer>
  );
};

export default Modal;
