"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import noisypng from "../../../../../public/Imagotipo_Noisy.png";

import {validations} from "../validations";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { errorsForm, formData } from "./login_interface";
const LoginComponent = () => {
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [captcha, setCaptcha] = useState<string | null>();
  const [errorsForm, setErrors] = useState<errorsForm>({
    emailIsRequired: false,
    emailNotValid: false,
    passwordIsRequired: false,
    passwordNotValid: false,
    repeatPasswordNotValid: false,
    captchaInvalid: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    if (name !== "repeatPassword") {
      errorsForm[name + "NotValid"] = false;
      errorsForm[name + "IsRequired"] = false;
    } else {
      errorsForm[name + "NotValid"] = false;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = validations(formData, captcha, setErrors);
    if (errors) {
      return;
    } else {
      window.alert("User logged");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container
        display="flex"
        flexDir="column"
        justifyItems="center"
        textAlign="center"
        padding={{ base: 10, sm: 20, md: 20, lg: 20 }}
        boxShadow="lg"
        fontSize={{base:"sm",sm:"md",md:"base",lg:"base"}}
      >
        <Box display="flex" flexDir="column" alignItems="center">
          <Image src={noisypng} alt="iconoNoicy" width={200}></Image>
          <Text fontWeight="bold">¡Bienvenid@ de nuevo!</Text>
        </Box>
        <Box display="flex" flexDir="column" gap={6} paddingY={10}>
          <FormControl
            isInvalid={errorsForm.emailIsRequired || errorsForm.emailNotValid}
          >
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {!errorsForm.emailIsRequired ? (
              <></>
            ) : (
              <FormErrorMessage textAlign="left">
                El email es requerido
              </FormErrorMessage>
            )}
            {!errorsForm.emailNotValid ? (
              <></>
            ) : (
              <FormErrorMessage textAlign="left">
                El email no es valido
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={
              errorsForm.passwordIsRequired || errorsForm.passwordNotValid
            }
          >
            <Input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              placeholder="Contraseña"
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
          <FormControl isInvalid={errorsForm.repeatPasswordNotValid}>
            <Input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              placeholder="Repite la contraseña"
            />
            {!errorsForm.repeatPasswordNotValid ? (
              <></>
            ) : (
              <FormErrorMessage textAlign="left">
                Las contraseñas no coinciden
              </FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box>
          <Box display="flex" flexDir="column" justifyItems="center" gap={6}>
            <FormControl          
            data-size="compact"
              display="flex"
              flexDir="column"
              alignItems={{base:"center",sm:"center",md:"start",lg:"start"}}
              isInvalid={errorsForm.captchaInvalid}
            >
              <HCaptcha
                size={"normal"}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onVerify={setCaptcha}
              />
              {!errorsForm.captchaInvalid ? (
                <></>
              ) : (
                <FormErrorMessage textAlign="left">
                  Debe clikear en el captcha para verficar
                </FormErrorMessage>
              )}
            </FormControl>
            <Button type="submit" bg="#6B46C1" textColor="white">
              Iniciar session
            </Button>
          </Box>
          <Box
            display="flex"
            gap={1}
            mt={4}
            justifyContent="center"
            fontSize="15px"
          >
            <Text>Aún no tienes una cuenta?</Text>
            <Link href={"/register"} cursor="pointer" textColor="#6B46C1"> 
              Regístrate
            </Link>
          </Box>
        </Box>
      </Container>
    </form>
  );
};

export default LoginComponent;
