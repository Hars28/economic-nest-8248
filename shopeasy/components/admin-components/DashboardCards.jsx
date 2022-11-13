import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";

function DashboardCards({
  title,
  titleBrief,
  icon = TfiLayoutWidthDefaultAlt,
}) {
  return (
    <Box
      bg="rgb(0 0 0 / 0.8)"
      transition="0.3s all ease-in-out"
      padding="2rem"
      borderRadius="3rem"
      _hover={{ transform: "scale(0.9)" }}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="1.2rem"
        height="15rem"
      >
        <Flex
          color="green.200"
          alignItems="center"
          gap="1rem"
          fontSize="2rem"
          fontWeight="medium"
        >
          <Icon as={icon} />
          <Text>{title}</Text>
        </Flex>
        <Text color="yellow.200" fontSize="1.5rem">
          {titleBrief}
        </Text>
      </Flex>
    </Box>
  );
}

export default DashboardCards;
