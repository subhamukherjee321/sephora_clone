import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaMobileAlt, FaBoxOpen, FaGlassMartiniAlt } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

const TopBar = () => {
  return (
    // Container Of Topbar
    <Flex
      fontSize={{base:"1rem", sm: "1rem", md: "0.8rem", lg: "0.8rem", xl: "0.9rem", "2xl": "0.9rem"}}
      justify="space-between"
      color={"#434343"}
      align="center"
      p={{
        base: "0 0.7rem 0 0",
        sm: "0 0 2rem",
        md: "0",
        lg: "0 0.1rem",
        xl: "0 4rem",
        "2xl": "0 4rem",
      }}
      m="auto"
      cursor="pointer"
      bg={"#F3F3F3"}
      w="100vw"
      overflow={"hidden"}
    >
      <Box>
        <Image
          src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
          alt="LOGO"
          w={{md: "70px", xl: "110px", "2xl": "110px"}}
          display={{
            base: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
            "2xl": "inline-block",
          }}
        />
      </Box>
      <Text
        display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
          "2xl": "block",
        }}
        color={"#D7D7D7"}
        fontSize="1.3rem"
      >
        |
      </Text>
      <Flex
        align={"center"}
        justify="space-between"
        w="8.5%"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}>
          <BiLocationPlus color="#FE47A2" fontSize={"1.1rem"} />
          <Text>
            Store Locator
          </Text>
      </Flex>
      <Flex
        align={"center"}
        justify="space-between"
        width={{base: "15%", sm: "10%", md: "5.5%", lg: "5%", xl: "4.5%", "2xl": "4.5%" }}
      >
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "0.8rem",
            lg: "1rem",
            xl: "0.9rem",
            "2xl": "0.9rem",
          }}
        >
          <StarIcon
            color="#704280"
            transform={{
              base: "rotate(0deg)",
              sm: "rotate(0deg)",
              md: "rotate(0deg)",
              lg: "rotate(-50deg)",
              xl: "rotate(-50deg)",
              "2xl": "rotate(-50deg)",
            }}
          />
        </Box>
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "0.8rem",
            lg: "1rem",
            xl: "0.9rem",
            "2xl": "0.9rem",
          }}
        >
          <StarIcon
            color="#FFC001"
            transform={{
              base: "rotate(0deg)",
              sm: "rotate(0deg)",
              md: "rotate(0deg)",
              lg: "rotate(-50deg)",
              xl: "rotate(-50deg)",
              "2xl": "rotate(-50deg)",
            }}
          />
        </Box>
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "0.8rem",
            lg: "1rem",
            xl: "0.9rem",
            "2xl": "0.9rem",
          }}
        >
          <StarIcon
            color="#EC008C"
            transform={{
              base: "rotate(0deg)",
              sm: "rotate(0deg)",
              md: "rotate(0deg)",
              lg: "rotate(-50deg)",
              xl: "rotate(-50deg)",
              "2xl": "rotate(-50deg)",
            }}
          />
        </Box>
      </Flex>
      <Text
        w={{
          base: "55%",
          sm: "35%",
          md: "30%",
          lg: "22%",
          xl: "26%",
          "2xl": "26%",
        }}
        color={"#000"}
        fontSize={{ base: "0.72rem", sm: "0.8rem", md: "0.75rem", xl: "0.95rem", "2xl": "0.95rem" }}
        align="center"
      >
        Get 10% OFF on your first purchase. Use Code: BEAUTY10
      </Text>
      <Flex
        align={"center"}
        justify="space-between"
        width={{
          base: "15%",
          sm: "10%",
          md: "5.5%",
          lg: "5%",
          xl: "4.5%",
          "2xl": "4.5%",
        }}
      >
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "0.8rem",
            lg: "1rem",
            xl: "0.8rem",
            "2xl": "0.8rem",
          }}
        >
          <StarIcon
            color="#EC008C"
            transform={{
              base: "rotate(0deg)",
              sm: "rotate(0deg)",
              md: "rotate(0deg)",
              lg: "rotate(50deg)",
              xl: "rotate(50deg)",
              "2xl": "rotate(50deg)",
            }}
          />
        </Box>
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "0.8rem",
            lg: "1rem",
            xl: "0.8rem",
            "2xl": "0.8rem",
          }}
        >
          <StarIcon color="#FFC001"
          transform={{
            base: "rotate(0deg)",
            sm: "rotate(0deg)",
            md: "rotate(0deg)",
            lg: "rotate(50deg)",
            xl: "rotate(50deg)",
            "2xl": "rotate(50deg)",
          }}
           />
        </Box>
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "0.8rem",
            lg: "1rem",
            xl: "0.8rem",
            "2xl": "0.8rem",
          }}
        >
          <StarIcon color="#704280"
          transform={{
            base: "rotate(0deg)",
            sm: "rotate(0deg)",
            md: "rotate(0deg)",
            lg: "rotate(50deg)",
            xl: "rotate(50deg)",
            "2xl": "rotate(50deg)",
          }}
           />
        </Box>
      </Flex>
      <Flex
        align={"center"}
        justify="space-between"
        w="6%"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <FaMobileAlt size="1rem" color="#FE47A2" />
        <Text>Get APP</Text>
      </Flex>
      <Text
        color={"#D7D7D7"}
        display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
          "2xl": "block",
        }}
        fontSize="1.3rem"
      >
        |
      </Text>
      <Flex
        align={"center"}
        justify="space-between"
        w="7.8%"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Box>
          <FaBoxOpen color="#FE47A2" />
        </Box>
        <Text
          display={{
            base: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
        >
          Track Order
        </Text>
      </Flex>
      <Text
        display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
          "2xl": "block",
        }}
        color={"#D7D7D7"}
        fontSize="1.3rem"
      >
        |
      </Text>
      <Flex
        align={"center"}
        justify="space-between"
        w="5.5%"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}>
        <FaGlassMartiniAlt color="#FE47A2"/>
        <Text>
          Loyalty
        </Text>
      </Flex>
    </Flex>
  );
};

export default TopBar;
