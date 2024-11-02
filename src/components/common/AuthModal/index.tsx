import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import AuthTabs from "./AuthTabs";

export default function AuthModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Login
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent className="py-8">
          <ModalBody>
            <AuthTabs />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
