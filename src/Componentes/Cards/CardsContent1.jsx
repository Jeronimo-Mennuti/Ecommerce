import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Link as ChakraLink } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CardContent1() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const [refLeft, inViewLeft] = useInView();
  const [refRight, inViewRight] = useInView();

  React.useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({ x: 0, opacity: 1 });
    }
    if (inViewRight) {
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);

  return (
    <Stack direction='column' spacing={2} align='center'>
      <Text fontSize='4xl' textAlign='center' marginTop='50px' fontFamily='Sora'>
      Featured Products
      </Text>

      <motion.div ref={refRight} initial={{ x: 1000, opacity: 0 }} animate={controlsRight} transition={{ duration: 1.2 }}>
        <Card overflow='hidden' boxShadow='none' mt={20} mb={4}>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />
          <Stack>
            <CardHeader>
              <Heading size='md' fontFamily='Sora'>The perfect latte</Heading>
            </CardHeader>
            <CardBody>
              <Text py='2' fontFamily='Assistant'>
                Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
              </Text>
            </CardBody>
            <CardFooter>
              <Button as={ChakraLink} variant='solid' colorScheme='pink' href='#' fontFamily='Sora'>
                Buy Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </motion.div>
      
    <motion.div ref={refLeft} initial={{ x: -1000, opacity: 0 }} animate={controlsLeft} transition={{ duration: 2.2 }}>
        <Card overflow='hidden' boxShadow='none' mt={20} mb={4}>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />
          <Stack>
            <CardHeader>
              <Heading size='md' fontFamily='Sora'>The perfect latte</Heading>
            </CardHeader>
            <CardBody>
              <Text py='2' fontFamily='Assistant'>
                Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
              </Text>
            </CardBody>
            <CardFooter>
              <Button as={ChakraLink} variant='solid' colorScheme='pink' href='#' fontFamily='Sora'>
                Buy Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </motion.div>
    </Stack>
  );
}