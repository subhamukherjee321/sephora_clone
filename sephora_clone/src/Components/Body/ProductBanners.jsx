import React from 'react';
import { Grid, Box, Image } from '@chakra-ui/react'
import { ProductBannerData } from '../../Data/ProductBannerData';

const ProductBanners = () => {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={"6"}>
            {ProductBannerData.map((item) => <Box>
                <Image alt='Product Banner' src={item.image} />
            </Box>)}
        </Grid>
    );
}

export default ProductBanners;
