import { Button, Checkbox, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { IoIosMail, IoMdLock } from 'react-icons/io'


interface FormModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onOpen: () => void;
}


const FormModal = ({isOpen, onOpenChange, onOpen}: FormModalProps) => {
  return (
    <Modal 
    isOpen={isOpen} 
    onOpenChange={onOpenChange}
    placement="top-center"
  >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              endContent={
                <IoIosMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              endContent={
                <IoMdLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <div className="flex py-2 px-1 justify-between">
              <Checkbox
                classNames={{
                  label: "text-small",
                }}
              >
                Remember me
              </Checkbox>
              <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Sign in
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default FormModal