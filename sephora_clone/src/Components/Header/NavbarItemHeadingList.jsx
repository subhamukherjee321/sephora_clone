import React from 'react';
import { Flex, Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react'

const NavbarItemHeadingList = ({head, sublinksublink}) => {
    return (
        <UnorderedList>
            <ListItem>{head}</ListItem>
        </UnorderedList>
    );
}

export default NavbarItemHeadingList;
