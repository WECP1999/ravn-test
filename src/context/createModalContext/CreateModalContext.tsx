import { createContext, useCallback, useState } from 'react';
import CreateTaskModal from './components/createTaskModal';

type TaskProviderProps = {
  children: React.ReactNode;
};

type CreateModalContextType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  onClose: () => void;
};

const CreateModalContext = createContext<CreateModalContextType | null>(null);

export default CreateModalContext;

export const CreateModalProvider = ({ children }: TaskProviderProps) => {
  const [showModal, setShowModal] = useState(false);

  const onClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <CreateModalContext.Provider value={{ showModal, onClose, setShowModal }}>
      {children}
      <CreateTaskModal
        show={showModal}
        onClose={onClose}
      />
    </CreateModalContext.Provider>
  );
};
