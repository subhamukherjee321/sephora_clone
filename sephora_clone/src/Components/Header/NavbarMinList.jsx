import React, { useState } from "react";
import { Box, Heading, UnorderedList } from "@chakra-ui/react";
import NavbarItemHeadingList from "./NavbarItemHeadingList";

const NavbarMinList = ({ name, id, submenu, sublinks }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      w={"13%"}
      overflow={"hidden"}
      _hover={submenu && { boxShadow: "5px 0px 18px #888888" }}
      p={"1rem 0"}
      textAlign="center"
      verticalAlign={"center"}
    >
      <Heading
        fontSize={"1.05rem"}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        _hover={{ color: "#EC008C" }}
      >
        {name}
      </Heading>

      {isHover && submenu && (
        <UnorderedList
          bg={"white"}
          zIndex={"100"}
          listStyleType={"none"}
          display={"grid"}
          gridTemplateColumns={"repeat(5, 1fr)"}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          pos={"absolute"}
          w={"100%"}
          p={"1rem"}
          pt={"2rem"}
          pb={"4rem"}
          pl={"2rem"}
          fontSize={"0.85rem"}
          left={"0"}
          templateColumns={"repeat(5, 1fr)"}
          gap={"6"}
          align={"center"}
        >
          {sublinks.map((item) => {
            return (
              <NavbarItemHeadingList
                {...item}
                isHover={isHover}
                setIsHover={setIsHover}
              />
            );
          })}
        </UnorderedList>
      )}
    </Box>
  );
};

export default NavbarMinList;
