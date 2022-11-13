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
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function EditItem({
  isOpen,
  onOpen,
  onClose,
  item,
  setA,
  setEditLoading,
}) {
  const [name, setName] = useState(item.name);
  const [image, setImage] = useState(item.image);
  const [price, setPrice] = useState(item.price);
  const [type, setType] = useState(item.type);

  const session = useSession();

  const editData = async () => {
    setEditLoading(true);
    const id = session.data.user.objId;
    let obj = {
      name,
      image,
      price,
      type,
    };

    axios({
      method: "put",
      url: `http://localhost:3000/api/products/category?id=${item._id}`,
      data: obj,
      headers: {
        id,
      },
    }).then((res) => {
      setA((a) => a + 1);
      setEditLoading(false);
    });

    // console.log(obj);
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={onOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Box mt="0.8rem">
                <FormLabel>Product Name</FormLabel>
                <Input
                  type="text"
                  // ref={nameRef}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Product Name"
                />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Image Url</FormLabel>
                <Input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="image url"
                />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="category"
                />
              </Box>
              <Box mt="0.8rem">
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="price"
                />
              </Box>
              <Box textAlign="center" mt="1rem">
                <Button
                  onClick={() => {
                    editData();
                    onClose();
                  }}
                  colorScheme="green"
                >
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
