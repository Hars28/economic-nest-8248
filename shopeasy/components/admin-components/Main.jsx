import { Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import AllUsersBox from "./AllUsersBox";
import Dashboard from "./Dashboard";
import ProductBox from "./ProductBox";
import Sidebar from "./Sidebar";

export default function Main() {
  const [linkTarget, setLinkTarget] = useState("dashboard");

  function changeLinkTarget(val) {
    setLinkTarget(val);
  }

  let renderElement = () => {
    if (linkTarget === "dashboard") {
      return <Dashboard changeLinkTarget={changeLinkTarget} />;
    } else if (linkTarget === "products") {
      return <ProductBox />;
    } else if (linkTarget === "users") {
      return <AllUsersBox />;
    }
  };
  return (
    <>
      <Flex gap="2rem">
        <Sidebar changeLinkTarget={changeLinkTarget} />
        {renderElement()}
      </Flex>
    </>
  );
}
