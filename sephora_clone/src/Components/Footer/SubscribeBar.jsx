import React from 'react';
import { Box, Heading, Input, Button, Flex } from '@chakra-ui/react'

const SubscribeBar = () => {
    return (
        <Box bg={"#F2F2F2"} p={"3.5rem 0 1.5rem 0"}>
            <Heading as="h1" fontSize={"1.9rem"}>
                GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION
            </Heading>
            <Flex w={"45%"} m={"0.7rem auto"}>
                <Input bg={"white"} borderRadius={"none"} placeholder={"Enter your email address"} size={"lg"} border={"none"} outline={"none"} />
                <Button p={"0 3rem"} borderRadius={"none"} fontWeight={"bold"} _hover={{bg: "BlackAlpha 600"}} color={"white"} bg={"black"} size='lg'>SUBSCRIBE</Button>
            </Flex>
        </Box>
    );
}

export default SubscribeBar;
