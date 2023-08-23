import { useState } from 'react'
import './App.css'
import axios from 'axios';
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
  const [pokemon, setPokemon] = useState(null)
  const [input, setInput] = useState('')
  const [captured, setCaptured] = useState([])

  const handleCapture = () => {
    if (captured.length < 6) {
      setCaptured(prev => [...prev, pokemon]);
    }
  };

  const removeCapturedPokemon = (index) => {
    setCaptured(prev => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  const searchPokemon = async () => {
    if (input) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      setPokemon(response.data)
    }
  };

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
                onChange={(e) => setInput(e.target.value)}
              />
              <Button onClick={searchPokemon} borderWidth={4} borderColor='red.800'>
                Search
              </Button>
            </HStack>
            <Stack direction='row' spacing={4}>
              <Box>
                <Box bg='gray.100' rounded='lg'>
                  <Image src={pokemon && pokemon.sprites.front_default ? pokemon.sprites.front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} />
                </Box>
              </Box>
              <Stack>
                <Text color='white' fontSize='xl' fontWeight={600}>
                  {pokemon && pokemon.name ? pokemon.name : 'Bulbasaur'}
                </Text>
                <Text color='white' fontSize='md' fontWeight={600}>
                  {pokemon && pokemon.id ? '#'+pokemon.id : '#1'}
                </Text>
                <Text color='white'>Type</Text>
                <Wrap>
                  {(pokemon && pokemon.types ? pokemon.types.map((t, index) => (
                    <WrapItem key={index}>
                      <Badge>{t.type.name}</Badge>
                    </WrapItem>
                  )) : 
                    <Badge borderWidth={3} rounded='md' borderColor='red.800'>
                      Grass
                    </Badge>
                  )}
                  </Wrap>
                <Box>
                  <Wrap>
                    <WrapItem>
                     
                    </WrapItem>
                  </Wrap>
                </Box>
                <HStack color='white'>
                  <Stack>
                    <Text>HP</Text>
                    <Text>{pokemon && pokemon.stats ? pokemon.stats[0].base_stat : 'None'}</Text>
                  </Stack>
                  <Stack>
                    <Text>Attack</Text>
                    <Text>{pokemon && pokemon.stats ? pokemon.stats[1].base_stat : 'None'}</Text>
                  </Stack>
                  <Stack>
                    <Text>Defense</Text>
                    <Text>{pokemon && pokemon.stats ? pokemon.stats[2].base_stat : 'None'}</Text>
                  </Stack>
                  <Stack>
                    <Text>Speed</Text>
                    <Text>{pokemon && pokemon.stats ? pokemon.stats[4].base_stat : 'None'}</Text>
                  </Stack>
                </HStack>
                <Box>
                  <Button w='full' borderWidth={4} borderColor='red.800'
                  onClick={handleCapture}>
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
            {captured.map((poke, index) => (
              <Box key={index} onClick={() => removeCapturedPokemon(index)}>
                <Image src={poke.sprites.front_default} boxSize="100px" />
              </Box>))}
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default App;
