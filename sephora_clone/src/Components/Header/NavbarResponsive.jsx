import React, { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Box, Image, Text } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const NavbarResponsive = () => {

    const [bgc, setBgc] = useState(false);

    // const backgroundColor = {
    //     bg: { bgc && "white"}
    // }

    return (
        <Flex p={"0.3rem 0.8rem"} bg={"RGBA(0, 0, 0, 0.08)"} justify={"space-between"} cursor={"pointer"} display={{base: "flex", sm: "flex", md: "flex", lg: "flex", xl: "none", "2xl": "none"}}>
            <Flex align={"center"} w={{base:"38%", sm:"38%", md:"20%", lg:"14%"}} justify={"space-between"}>
                <Box onClick={() =>setBgc(!bgc)} bg={bgc && "white"}>
                    <HamburgerIcon fontSize={"1.5rem"} fontWeight={"bold"} />
                </Box>
                <Box w={"75%"}>
                    <Image alt='Sphora Logo' src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b28001e4b0591c174e9aaf/1548053154363/se.png" h={"50px"} w={"100%"} />
                </Box>
            </Flex>

            <Flex w={{base:"40%", sm:"40%", md:"20%", lg:"15%"}} justify={"space-between"} align={"center"}>
                <Flex w={"72%"} justify={"space-between"} align={"center"}>
                    <Box>
                        <AiOutlineSearch color="#EC008C" fontSize={"1.2rem"}/>
                    </Box>
                    <Text color={"#D7D7D7"}>
                        |
                    </Text>
                     <Box>
                        <FiHeart color="#EC008C" fontSize={"1.2rem"}/> 
                     </Box>
                     <Text color={"#D7D7D7"}>
                        |
                     </Text>
                     <Box>
                        <BsHandbag color="#EC008C" fontSize={"1.2rem"}/>
                     </Box>
                </Flex>
                <Flex w={"18%"}>
                    <Image w={"100%"} alt='NNOW LOGO' src={"https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png"} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default NavbarResponsive;
