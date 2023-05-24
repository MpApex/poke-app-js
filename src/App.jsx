import { useState } from 'react'
import './App.css'
import {
  Box,
  Button,
  HStack,
  Input,
  Stack,
  Image,
  Text,
  Badge,
  Center,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Center h='100vh'>
      <Box w='full' maxWidth='600px'>
        <Stack direction='row' spacing={0}>
          <Stack
            borderWidth={6}
            rounded='xl'
            borderColor='red.800'
            p={4}
            bg='#CE302A'
          >
            <HStack>
              <Input
                borderWidth={4}
                borderColor='red.800'
                bg='white'
                placeholder='name/id'
              />
              <Button borderWidth={4} borderColor='red.800'>
                Search
              </Button>
            </HStack>
            <Stack direction='row' spacing={4}>
              <Box>
                <Box bg='gray.100' rounded='lg'>
                  <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' />
                </Box>
              </Box>
              <Stack>
                <Text color='white' fontSize='xl' fontWeight={600}>
                  Bulbasaur
                </Text>
                <Text color='white' fontSize='md' fontWeight={600}>
                  #1
                </Text>
                <Text color='white'>Type</Text>
                <Box>
                  <Wrap>
                    <WrapItem>
                      <Badge borderWidth={3} rounded='md' borderColor='red.800'>
                        Grass
                      </Badge>
                    </WrapItem>
                  </Wrap>
                </Box>
                <HStack color='white'>
                  <Stack>
                    <Text>HP</Text>
                    <Text>20</Text>
                  </Stack>
                  <Stack>
                    <Text>Attack</Text>
                    <Text>35</Text>
                  </Stack>
                  <Stack>
                    <Text>Defense</Text>
                    <Text>35</Text>
                  </Stack>
                  <Stack>
                    <Text>Speed</Text>
                    <Text>35</Text>
                  </Stack>
                </HStack>
                <Box>
                  <Button w='full' borderWidth={4} borderColor='red.800'>
                    Capture
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            borderWidth={6}
            rounded='xl'
            borderColor='red.800'
            p={4}
            bg='#CE302A'
            spacing={2}
            pos='relative'
            left='-4px'
          >
            <Box bg='gray.100' rounded='lg'>
              <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default App;
