import Modal from '@/components/shared/Modal'
import React, {
  createContext,
  useContext,
  ComponentProps,
  useState,
  useCallback,
} from 'react'

type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, 'open'>

interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
}

const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues)
  const $portal_root = document.getElementById('root-portal')

  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true })
  }

  const close = () => {
    setModalState(defaultValues)
  }

  const values = {
    open,
    close,
  }

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root && <Modal {...modalState} />}
    </Context.Provider>
  )
}

export const useModalContext = () => {
  const values = useContext(Context)

  if (!values) {
    throw new Error('Modal Context 안에서 사용해주세요.')
  }

  return values
}

export default ModalContext
