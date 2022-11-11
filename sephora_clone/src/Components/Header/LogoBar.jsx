import React, { useState } from "react";
import { Flex, Input, Box, Image, Text } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const LogoBar = () => {
  const [close, setClose] = useState(false);

  return (
    <Flex display={{base: "none", sm: "none", md:"none", lg: "none", xl:"flex", "2xl": "flex"}} p={"0 1rem"} pr={"1rem"} m="auto" w="100%" justify={"space-between"} align="center" cursor={"pointer"}>
      <Flex
        borderBottom={"0.5px solid #D7D7D7"}
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
      <Box width="18.5%">
        <Image
          w={"100%"}
          h="100%"
          alt="logo"
          src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png"
          cursor={"pointer"}
        />
      </Box>
      <Flex w="15%" align={"center"} justify={"space-between"}>
        <Box>
        <FiHeart color="#EC008C" fontSize={"1.2rem"}/>
        </Box>
        <Text color={"#D7D7D7"} fontSize="1.3rem">|</Text>
        <Box>
          <BsHandbag color="#EC008C" fontSize={"1.2rem"} />
        </Box>
        <Text color={"#D7D7D7"} fontSize="1.3rem">|</Text>
        <Flex align={"center"} justify={"space-between"} width="33%">
          <FaRegUser color="#EC008C" fontSize={"1.2rem"} />
          <Text>Login</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LogoBar;
