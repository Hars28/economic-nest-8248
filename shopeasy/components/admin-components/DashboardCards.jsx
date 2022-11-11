import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";

function DashboardCards({
  title,
  titleBrief,
  icon = TfiLayoutWidthDefaultAlt,
}) {
  return (
    <Box bg="rgb(0 0 0 / 0.2)" padding="2rem" borderRadius="3rem">
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
          fontSize="2.2rem"
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
