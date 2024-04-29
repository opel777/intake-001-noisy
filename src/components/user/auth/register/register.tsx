"use client"
import {
  Box, 
  Text, 
  Input, 
  Checkbox, 
  Button, 
  Link,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Imagotipo_Noisy from "../../../../../public/Imagotipo_Noisy.png"
import Image from "next/image";
import {errorsForm, formData} from "./register_interface"

import {registerValidations} from "../validations";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Register = () => {
  const[formData, setData]= useState<formData>({
    name: "",
    email: "",
    password: "",
    organizador: false,
  });
  const[errorsForm, setErrors] = useState<errorsForm>({
    nameIsRequired: false,
    emailIsRequired: false,
    emailNotValid: false,
    passwordIsRequired: false,
    passwordNotValid: false,
    captchaInvalid: false,
  })
  const [captcha, setCaptcha] = useState<string | null>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = registerValidations(formData, captcha, setErrors);
    if (errors) {
      return;
    } else {
      console.log("User registered");
      console.log(formData);
    }
  }

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
      <Text fontWeight={"bold"}>Regístrate y descubre tu próximo festival!</Text>

      <form onSubmit={handleSubmit} style={{
        marginTop: 50,
        width: 282,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <FormControl
          isInvalid ={ errorsForm.nameIsRequired }
          >
          <Input 
            size="md"
            placeholder="Nombre*"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          {!errorsForm.nameIsRequired ? (
            <></>
          ) : (
            <FormErrorMessage textAlign="left">
              El nombre es requerido.
            </FormErrorMessage>
          )}

        </FormControl>
        
        <FormControl 
          isInvalid ={ errorsForm.emailIsRequired || errorsForm.emailNotValid}
          >
           <Input size="md"
            placeholder="Email*"
            type="email"
            name="email"
            marginTop={25}
            value={formData.email}
            onChange={handleInputChange}
          />

          {!errorsForm.emailIsRequired ? (
            <></>
          ) : (
            <FormErrorMessage textAlign="left">
              El email es requerido.
            </FormErrorMessage>
          )}

          {!errorsForm.emailNotValid ? (
            <></>
          ) : (
            <FormErrorMessage textAlign="left">
              El email no es valido.
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid ={ errorsForm.passwordIsRequired || errorsForm.passwordNotValid}
          >
          <Input size="md"
            placeholder="Contraseña*"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            marginTop={25}
          />

          {!errorsForm.passwordIsRequired ? (
            <></>
          ) : (
            <FormErrorMessage textAlign="left">
              La contraseña es requerida.
            </FormErrorMessage>
          )}

          {!errorsForm.passwordNotValid ? (
            <></>
          ) : (
            <FormErrorMessage textAlign="left">
              La contraseña debe tener minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al
              menos una letra minuscula, Al menos un dígito, No espacios en
              blanco, Al menos 1 caracter especial
            </FormErrorMessage>
          )}
        </FormControl>

        <Checkbox 
          marginTop={41} 
          size="lg" 
          colorScheme="purple" 
          name="organizador"
          isChecked={formData.organizador} 
          onChange={handleInputChange}>
          Organizador
        </Checkbox>
        
        <FormControl
          mt={25}
          isInvalid={errorsForm.captchaInvalid}
          >
          <HCaptcha
            size={"normal"}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onVerify={setCaptcha}
          />
          {!errorsForm.captchaInvalid? (
            <></>
          ) : (
            <FormErrorMessage textAlign="left">
              Debe pasar el captcha para continuar.
            </FormErrorMessage>
          )}
        </FormControl>

        <Button mt={30} type="submit" bg="#6B46C1" textColor="white">
            Registrarme
        </Button>
      </form>

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
