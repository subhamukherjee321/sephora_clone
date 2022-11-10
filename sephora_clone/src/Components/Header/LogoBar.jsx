import React, { useState } from "react";
import { Flex, Input, Box, Image, Text } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { FaShoppingBag, FaUserAlt, FaHeart } from "react-icons/fa";

const LogoBar = () => {
  const [close, setClose] = useState(false);

  return (
    <Flex m="auto" w="90%" justify={"space-between"} align="center" display={{base: "none" ,sm: "none", lg: "flex", xl: "flex", "2xl": "flex"}}>
      <Flex
        borderBottom={"0.5px solid grey"}
        w="18%"
        align={"center"}
        justify={"space-between"}
        pb="0.1rem"
      >
        <Box>
            <SearchIcon color="#FF3D9E" fontSize={"1.21rem"} />
        </Box>
        <Box>
            <Input
                type={"text"}
                placeholder="Search SEPHORA"
                size={"10"}
                border={"none"}
                outline="none"
                onClick={() => setClose(true)}
                inset="none"
                p={"0"}
            />
        </Box>
        {close && (
          <Box onClick={() => setClose(false)}>
            <CloseIcon color="#EC008C" fontSize={"0.6rem"} />
          </Box>
        )}
      </Flex>
      <Box width="19%" height={"16vh"}>
        <Image
          w={"100%"}
          h="100%"
          alt="logo"
          src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png"
        />
      </Box>
      <Flex w="20%" align={"center"} justify={"space-between"}>
        <Box>
        <FaHeart color="#EC008C"/>
        </Box>
        <Text>|</Text>
        <Box>
          <FaShoppingBag color="#EC008C" />
        </Box>
        <Text>|</Text>
        <Flex align={"center"} justify={"space-between"} width="27.5%">
          <FaUserAlt color="#EC008C" />
          <Text>Login</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LogoBar;
