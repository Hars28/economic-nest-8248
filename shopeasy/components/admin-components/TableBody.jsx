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
import EditItem from "./EditItem";

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

export default function TableBody({ item, sr }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteData = async (id) => {
    console.log(`data of this id ${id} will be deleted you sure?`);
  };

  return (
    <>
      {isOpen && (
        <EditItem
          item={item}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
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
          <Button colorScheme="blue" onClick={onOpen}>
            Edit
          </Button>
        </Td>
        <Td>
          <Button
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
