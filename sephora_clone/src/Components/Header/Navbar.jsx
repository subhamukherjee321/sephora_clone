import React, {useState} from 'react';
import { Flex, Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import { navbarList } from '../../Data/data';
import NavbarMinList from './NavbarMinList';
import NavbarItemHeadingList from './NavbarItemHeadingList';

const Navbar = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Flex justify={"space-between"} align={"center"} width={"95%"} m={"0.4rem auto"} cursor={"pointer"} display={{base: "none", sm: "none", md: "none", lg: "none", xl: "flex", "2xl": "flex"}}>
            {/* <Box  w={"13%"}>
                <Heading fontSize={"1.05rem"} _hover={{color: "#EC008C"}}>SALE</Heading>
            </Box>
            <Box  w={"13%"}>
                <Heading fontSize={"1.05rem"} _hover={{color: "#EC008C"}}>MAKEUP</Heading>
            </Box>
            <Box  w={"13%"}>
                <Heading fontSize={"1.05rem"} _hover={{color: "#EC008C"}}>SKINCARE</Heading>
            </Box>
            <Box  w={"13%"}>
                <Heading fontSize={"1.05rem"} _hover={{color: "#EC008C"}}>FRAGRANCE</Heading>
            </Box>
            <Box  w={"13%"}>
                <Heading fontSize={"1.05rem"} _hover={{color: "#EC008C"}}>HAIRCARE</Heading>
            </Box>
            <Box  w={"13%"}>
                <Heading fontSize={"1.05rem"} _hover={{color: "#EC008C"}}>TOOLS & BRUSHES</Heading>
            </Box>
            <Box  w={"13%"}>
                <Heading fontSize={"1.05rem"} _hover={{color: "#EC008C"}}>BRANDS</Heading>
            </Box> */}

            {
                navbarList.map((item) => <NavbarMinList key={item.id} {...item} />)
            }
        </Flex>
    );
}

export default Navbar;
