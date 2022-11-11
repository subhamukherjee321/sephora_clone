import React, { useState } from "react";
import { Flex, Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const NavbarMinList = ({name, id, submenu, sublinks}) => {

  const [isHover, setIsHover] = useState(false);

  return (
    <Box w={"13%"}>
      <Heading fontSize={"1.05rem"} _hover={{ color: "#EC008C" }} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
        {name}
      </Heading>

      {
        isHover &&
        <Box onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
          {submenu && sublinks.map((item) => {
            return (
              <Flex justify={"space-between"} border={"1px solid"}>
                <Heading fontSize={"1rem"}>
                    {item.head}
                </Heading>
              </Flex>
            )
          })}
        </Box>
      }
    
    </Box>
  );
};

export default NavbarMinList;
