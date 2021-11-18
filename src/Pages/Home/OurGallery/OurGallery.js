import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';





const pictures =[
    {
      image:'https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3SfsBEw1UT_pVrZ3UX3r32AwbibDuA_OB922O9AMHiC2d1DH2KXcs4MOQzQV80SYjHk&usqp=CAU'
    },
    {
      image:'https://www.deccanherald.com/sites/dh/files/article_images/2020/05/24/gold-1369453_1920-1276466824-1590314275.jpg'
    },
    {
      image:'https://5.imimg.com/data5/OD/RB/LQ/GLADMIN-22879851/2018-01-17-500x500.jpg'
    },
    {
      image:'https://cdn.w600.comps.canstockphoto.com/large-collection-of-gold-jewellery-stock-image_csp11750366.jpg'
    },
    {
      image:'https://cdn.shopify.com/s/files/1/0533/3847/2640/collections/Category-Jewellery-Gemstone-Morganite_2c3d3ed9-c085-4220-a0b2-f4b84d448ab8.jpg?v=1619650949'
    },
  ];

const OurGallery = () => {
    return (
        <>
        <h2>Our Product GAllary</h2>
        <Box style={{margin:"40px" ,marginLeft:"50px"}}>
            
        <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={164}>
      {pictures.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </>
    );
};

export default OurGallery;