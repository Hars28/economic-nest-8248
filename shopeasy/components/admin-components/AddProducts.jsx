import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function AddProducts({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={onOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Box mt="0.8rem">
                <FormLabel>Product Name</FormLabel>
                <Input type="text" placeholder="Product Name" />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Image Url</FormLabel>
                <Input type="text" placeholder="image url" />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Category</FormLabel>
                <Input type="text" placeholder="category" />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Price</FormLabel>
                <Input type="number" placeholder="price" />
              </Box>
              <Box textAlign="center" mt="1rem">
                <Button colorScheme="green">Submit</Button>
              </Box>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
