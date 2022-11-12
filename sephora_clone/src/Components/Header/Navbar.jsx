import React from 'react';
import { Flex } from '@chakra-ui/react'
import { navbarList } from '../../Data/NavbarListData';
import NavbarMinList from './NavbarMinList';

const Navbar = () => {

    return (
        <Flex justify={"space-between"} align={"center"} width={"95%"} m={"0.4rem auto"} cursor={"pointer"} display={{base: "none", sm: "none", md: "none", lg: "none", xl: "flex", "2xl": "flex"}}>
            {
                navbarList.map((item) => <NavbarMinList key={item.id} {...item} />)
            }
        </Flex>
    );
}

export default Navbar;
