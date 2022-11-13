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
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AddProducts({
  isOpen,
  onOpen,
  onClose,
  setA,
  setLoading,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const session = useSession();

  const addData = async () => {
    setLoading(true);
    const id = session.data.user.objId;
    let obj = {
      name,
      image,
      price: +price,
      type,
    };

    axios({
      method: "POST",
      url: `http://localhost:3000/api/products/category`,
      data: obj,
      headers: {
        id,
      },
    }).then((res) => {
      setA((a) => a + 1);
      setLoading(false);
    });

    // console.log(obj);
    onClose();
  };

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
                <Input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Product Name"
                />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Image Url</FormLabel>
                <Input
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="image url"
                />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Category</FormLabel>
                <Input
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  placeholder="category"
                />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Price</FormLabel>
                <Input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="price"
                />
              </Box>
              <Box textAlign="center" mt="1rem">
                <Button onClick={addData} colorScheme="green">
                  Submit
                </Button>
              </Box>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
