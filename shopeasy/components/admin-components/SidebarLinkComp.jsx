import { Flex, Icon } from "@chakra-ui/react";

function SidebarLinkComp({ changeLinkTarget, title, icon }) {
  return (
    <Flex
      onClick={() => {
        changeLinkTarget(title.toLowerCase());
      }}
      mb="2rem"
      gap="5px"
      alignItems="center"
      cursor="pointer"
      transition="0.2s ease-in-out"
      _hover={{
        backgroundColor: "rgba(0 0 0 /  0.2)",
        transform: "scale(1.1)",
        borderRadius: "10px",
        padding: "1rem",
      }}
    >
      <Icon as={icon} />
      <h2>{title}</h2>
    </Flex>
  );
}

export default SidebarLinkComp;
