import {
  Box,
  Button,
  Flex,
  Image,
  Td,
  Tr,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import axios from "axios";
import EditItem from "./EditItem";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const scrollBarStyles = {
  /* width */
  "::-webkit-scrollbar": {
    width: "1px",
    height: "10px",
  },

  /* Track */
  "::-webkit-scrollbar-track": {
    // boxShadow: "inset 0 0 2px grey",
    borderRadius: "10px",
  },

  /* Handle */
  "::-webkit-scrollbar-thumb": {
    background: "lightblue",
    borderRadius: "10px",
    width: "1px",
  },
};

export default function TableBody({ item, sr, setA }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [delLoading, setDelLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const session = useSession();

  const deleteData = async (id) => {
    const oId = session.data.user.objId;
    setDelLoading(true);
    await axios({
      method: "delete",
      url: `http://localhost:3000/api/products/category?id=${id}`,
      headers: {
        id: oId,
      },
    }).then((res) => {
      setA((b) => b + 1);
      setDelLoading(false);
    });
    // console.log(session);
  };

  // useEffect(() => {}, [b]);

  return (
    <>
      {isOpen && (
        <EditItem
          item={item}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          setA={setA}
          setEditLoading={setEditLoading}
        />
      )}
      <Tr fontSize="1.1rem">
        <Td>{sr}</Td>
        <Td>
          <Box
            maxWidth="16rem"
            overflowX="scroll"
            sx={scrollBarStyles}
            height="auto"
            // paddingBottom="1rem"
          >
            {item.name}
          </Box>
        </Td>
        <Td>
          <Image width="50px" src={item.image} />
        </Td>
        <Td>{item.price}</Td>
        <Td>{item.type}</Td>
        <Td>
          <Button isLoading={editLoading} colorScheme="blue" onClick={onOpen}>
            Edit
          </Button>
        </Td>
        <Td>
          <Button
            isLoading={delLoading}
            onClick={() => {
              deleteData(item._id);
            }}
            colorScheme="red"
          >
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
}
