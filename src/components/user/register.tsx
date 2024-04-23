"use client"
import {Box, Text, VStack, Input, Checkbox, Button, Link, useBreakpointValue, useBreakpoint, extendTheme} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const Register = () => {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <Box marginTop={63}>
        <Image width={157} height={157} src={"/images/Noisy_Assets/noisy_isotipo1000.png"} alt="noisy_isotipo1000"/>
        <Box style={{ overflow: 'hidden', width: '129px', height:"58px", position: 'relative', margin: "auto" }}>
          <Image 
            width={180} 
            height={58} 
            src={"/images/Noisy_Assets/noisy_imago1024.png"} 
            alt="noisy_imago1024.png" 
            style={{ 
              position: 'absolute', 
              top: 0, 
              right: 0,
              bottom: 0,
              maxWidth:"none" }}
            />
        </Box>
      </Box>

      <Text style={{
        fontFamily: "Lato",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "24px",
        marginTop: "69px",
      }}>Regístrate y descubre tu próximo festival!</Text>

      <Box>
        <VStack marginTop={50} width={282} display={"flex"} alignItems={""}>
          <Input size="md"
            placeholder="Nombre*"
            type="text"
            required 
          />

          <Input size="md"
            placeholder="Email*"
            type="email"
            marginTop={25}
            required 
          />

          <Input size="md"
            placeholder="Contraseña*"
            type="password"
            marginTop={25}
            required 
          />

          <Checkbox marginTop={41} required size="lg" colorScheme="purple">
            Organizador *
          </Checkbox>

          <Checkbox marginTop={25} required size="lg" colorScheme="purple">
            No soy un robot *
          </Checkbox>

          <Button 
            size="md"
            variant="solid"
            colorScheme="#6B46C1"
            type="submit" 
            marginTop={30}
            backgroundColor={"#6B46C1"}
            onClick={(e)=>{e.preventDefault}}>Registrarme</Button>
        </VStack>

        <Text marginTop={9} marginBottom={142} style={{
          fontFamily: "Lato",
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "24px",
          textAlign: "left",
          
        }}>Ya tienes una cuenta?  
          <Link href={"/login"} style={{fontWeight: "500", color: "rgba(107, 70, 193, 1)"}}
           > Inicia sesión</Link>
        </Text>
      </Box>
      
    </Box>
  );
};

export default Register;
