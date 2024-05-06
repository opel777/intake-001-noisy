'use client'
import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { shows } from "@/app/api/shows/data";
import CarouselLanding from '@/components/landing/carousel/carousel';

const Landing : React.FC = () => {
  return (
    <Box textAlign="center" w='428px' h='540px'>
      <Box display="inline-block" textAlign="left" ml='46px' mt={8}>
        <Stack spacing={2}>
          <Text fontSize='22px'>Todo lo que necesitas para vivir tu festival, en un solo lugar.</Text>
          <Text fontSize='24px' color='#FF1086' as='b'>Are you ready?</Text>
        </Stack>
      </Box>

      <Box ml='24px' mt='40px'>
        <CarouselLanding cards={shows} />
      </Box>
    </Box>
  );
};

export default Landing;
