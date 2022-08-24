import { createContext, useState, useContext } from 'react';

type MODALS = 'NONE' | 'WALLET' | 'ACCOUNT' | 'LOGIN';

type useContextType = {
  currentModal: MODALS;
  setCurrentModal: (currentModal: MODALS) => void;
  closeModal: () => void;
};

const ModalContext = createContext<useContextType>({
  currentModal: 'NONE',
  setCurrentModal: (_data: MODALS) => {
    throw Error('Application not ready');
  },
  closeModal: () => {
    throw Error('Application not ready');
  },
});

export const ModalProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<MODALS>('NONE');

  const closeModal = () => {
    setCurrentModal('NONE');
  };

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        setCurrentModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext<useContextType>(ModalContext);
