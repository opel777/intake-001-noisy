"use client"
import {
  Box, 
  Text, 
  VStack, 
  Input, 
  Checkbox, 
  Button, 
  Link,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import Imagotipo_Noisy from "../../../../public/images/Imagotipo.svg"
import Image from "next/image";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Register = () => {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <Box marginTop={63}>
        <Image width={200} src={Imagotipo_Noisy} alt="Imagotipo_Noisy"/>
      </Box>
      <Text fontWeight={"blod"}>Regístrate y descubre tu próximo festival!</Text>

      <VStack marginTop={50} width={282} display={"flex"} alignItems={""}>
        <FormControl>
          <Input size="md"
            placeholder="Nombre*"
            type="text"
            required 
          />

        </FormControl>
        
        <FormControl>
           <Input size="md"
            placeholder="Email*"
            type="email"
            marginTop={25}
            required 
          />
        </FormControl>
       

        <FormControl>
          <Input size="md"
            placeholder="Contraseña*"
            type="password"
            marginTop={25}
            required 
          />
        </FormControl>
        

        <FormControl>
          <Checkbox marginTop={41} required size="lg" colorScheme="purple">
            Organizador *
          </Checkbox>
        </FormControl>
        
        <FormControl          
          data-size="compact"
            display="flex"
            flexDir="column"
            alignItems={{base:"center",sm:"center",md:"start",lg:"start"}}
            // isInvalid={errorsForm.captchaInvalid}
          >
          <HCaptcha
            size={"normal"}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          />
        </FormControl>
        

        

        <Checkbox marginTop={25} required size="lg" colorScheme="purple">
          No soy un robot *
        </Checkbox>

        <Button type="submit" bg="#6B46C1" textColor="white" onClick={(e)=>{e.preventDefault}}>
            Registrarme
        </Button>
      </VStack>

      <Text marginTop={9} marginBottom={142} fontSize="15px">
        Ya tienes una cuenta?  
        <Link href={"/login"} cursor="pointer" textColor="#6B46C1"> 
          Inicia sesión
        </Link>
      </Text>
      
    </Box>
  );
};

export default Register;
