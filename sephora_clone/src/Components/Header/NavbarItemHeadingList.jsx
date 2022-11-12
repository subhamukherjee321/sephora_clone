import React from "react";
import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const NavbarItemHeadingList = ({ head, sublink, isHover, setIsHover }) => {
  return (
    <ListItem
      justify={"space-between"}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      align={"left"}
    >
      <Heading
        fontSize={"0.9rem"}
        m={"0.7rem"}
        _hover={{ color: "#EC008C" }}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {head}
      </Heading>
      <UnorderedList
        listStyleType={"none"}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {isHover &&
          sublink.map((item) => (
            <ListItem
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
              _hover={{ color: "#EC008C" }}
            >
              {item.name}
            </ListItem>
          ))}
      </UnorderedList>
    </ListItem>
  );
};

export default NavbarItemHeadingList;
