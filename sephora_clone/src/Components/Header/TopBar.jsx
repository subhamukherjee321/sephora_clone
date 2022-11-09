import React from "react";
import { Flex, Box, Image, Text} from "@chakra-ui/react";
import { StarIcon} from '@chakra-ui/icons';

const TopBar = () => {
  return (
    <Flex justify="space-between" w="90%" m="auto">
      <Box>
        <Image
          src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
          alt="LOGO"
          w="110px"
        />
      </Box>
      <Box>
         <Text>
            Store Loaction
         </Text>
      </Box>
      <Box>
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Box>
      <Box>
        Get 10% OFF on your first purchase. Use Code: BEAUTY10
      </Box>
      <Box>
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Box>
      <Box>GEt APP</Box>
      <Box>Track Order</Box>
      <Box>Loyalty</Box>
    </Flex>
  );
};

export default TopBar;
