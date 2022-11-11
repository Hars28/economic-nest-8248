import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Dashboard from "../../components/admin-components/Dashboard";
import ProductBox from "../../components/admin-components/ProductBox";
import Sidebar from "../../components/admin-components/Sidebar";

export default function Admin() {
  const [linkTarget, setLinkTarget] = useState("dashboard");

  function changeLinkTarget(val) {
    setLinkTarget(val);
  }

  let renderElement = () => {
    if (linkTarget === "dashboard") {
      return <Dashboard />;
    } else if (linkTarget === "product") {
      return <ProductBox />;
    }
  };
  return (
    <>
      <Flex gap="2rem">
        <Sidebar props={setLinkTarget} />
        {renderElement()}
      </Flex>
    </>
  );
}
