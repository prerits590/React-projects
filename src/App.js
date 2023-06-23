
import { ArrowForwardIcon } from '@chakra-ui/icons';
import './App.css';
import { Box, Heading, FormControl, FormLabel, Button, ChakraProvider, Alert } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import { useState } from 'react';
import { color } from 'framer-motion';

function App() {
  const[isLoading, setIsLoading]= useState(false);

  function clickEvent(){
    setIsLoading(true);

    setTimeout(()=>{
      setIsLoading(false);
      alert('Log-in Successful!');
    }, 2000);

    
  }



  return (
  <ChakraProvider>
    <Box bg="red.600" w="100%" h='100vh' p={4} display='flex' justifyContent='center' border='solid white'>
      <Container my="auto" border='solid white' centerContent>
        <Box color="white" pt='0.7rem'>
          <Heading as="h1">Log In / Sign Up</Heading>
        </Box>
        
        <Box py='1rem'>
          <FormControl>
            <FormLabel color='white'> Email Address </FormLabel>
            <input type='email'/>

          </FormControl>
        </Box>

        <Box>
          <FormControl color='white'>
            <FormLabel> Password </FormLabel>
            <input style={{color:'black'}} type='password'/>

          </FormControl>
        </Box>

        <Box py='1rem'>
        <Button rightIcon={<ArrowForwardIcon/>} colorScheme='blue' onClick={clickEvent} isLoading={isLoading}>Submit</Button>
        </Box>

      </Container>
    </Box>
    </ChakraProvider>
  
  );
}

export default App;
