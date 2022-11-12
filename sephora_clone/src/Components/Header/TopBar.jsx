import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaMobileAlt, FaBoxOpen, FaGlassMartiniAlt } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

const TopBar = () => {
  return (
    // Container Of Topbar

    <Flex
      fontSize={{
        base: "1rem",
        sm: "1rem",
        md: "0.8rem",
        lg: "0.8rem",
        xl: "1rem",
        "2xl": "1rem",
      }}
      boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"
      justify={{
        base: "space-around",
        sm: "space-around",
        md: "space-evenly",
        lg: "space-between",
        xl: "space-between",
        "2xl": "space-between",
      }}
      color={"BlackAlpha 400"}
      align="center"
      p={"0.2rem 0.5rem"}
      m="auto"
      cursor="pointer"
      bg={{
        base: "white",
        sm: "white",
        md: "white",
        lg: "white",
        xl: "#F2F2F2",
        "2xl": "#F2F2F2",
      }}
      w="100%"
      overflow={"hidden"}
    >
      <Flex
        w={{ md: "22%", lg: "25%", xl: "22.3%", "2xl": "22.3%" }}
        justify={"space-between"}
        align="center"
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "Flex",
          "2xl": "Flex",
        }}
      >
        <Box w={"40%"}>
          <Image
            src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
            alt="LOGO"
            w={"100%"}
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
          w={{ xl: "41%", md: "50%" }}
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
            <BiLocationPlus color="#FE47A2" fontSize={"1.1rem"} />
          </Box>
          <Text>Store Locator</Text>
        </Flex>
      </Flex>

      <Flex
        align={"center"}
        justify="space-between"
        width={{
          base: "15%",
          sm: "10%",
          md: "6.45%",
          lg: "5%",
          xl: "4%",
          "2xl": "4%",
        }}
      >
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "1rem",
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
            md: "1rem",
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
            md: "1rem",
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
          sm: "55%",
          md: "45%",
          lg: "40%",
          xl: "26%",
          "2xl": "26%",
        }}
        color={"BlackAlpha 400"}
        fontSize={{
          base: "0.72rem",
          sm: "0.72rem",
          md: "0.9rem",
          xl: "0.95rem",
          "2xl": "0.95rem",
        }}
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
          md: "6.45%",
          lg: "5%",
          xl: "4%",
          "2xl": "4%",
        }}
      >
        <Box
          fontSize={{
            base: "1rem",
            sm: "1.1rem",
            md: "1rem",
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
            md: "1rem",
            lg: "1rem",
            xl: "0.8rem",
            "2xl": "0.8rem",
          }}
        >
          <StarIcon
            color="#FFC001"
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
            md: "1rem",
            lg: "1rem",
            xl: "0.8rem",
            "2xl": "0.8rem",
          }}
        >
          <StarIcon
            color="#704280"
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
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
        w="28%"
        justify={"space-between"}
        align={"center"}
      >
        <Flex
          align={"center"}
          justify="space-between"
          w={{ xl: "23%", md: "28%" }}
        >
          <FaMobileAlt size="1.1rem" color="#FE47A2" />
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
          w={"1%"}
        >
          |
        </Text>
        <Flex
          align={"center"}
          justify="space-between"
          w={{ xl: "28%", md: "34%" }}
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
            <FaBoxOpen color="#FE47A2" fontSize={"1.1rem"} />
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
          w={"1%"}
        >
          |
        </Text>
        <Flex
          align={"center"}
          justify="space-between"
          w={{ xl: "21%", lg: "23%", md: "23%" }}
          pr={"0.5rem"}
          display={{
            base: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          <FaGlassMartiniAlt color="#FE47A2" />
          <Text>Loyalty</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopBar;
