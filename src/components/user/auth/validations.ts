const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

export function validations(formData:any,captcha:any,setErrors:any) {
    let nuevosErrores: any = {};
    const { email, password, repeatPassword } = formData;
    if (!email.length) {
      nuevosErrores["emailIsRequired"] = true;
    } else {
      nuevosErrores["emailIsRequired"] = false;
    }
    if (!validEmail.test(email) && email.length) {
      nuevosErrores["emailNotValid"] = true;
    } else {
      nuevosErrores["emailNotValid"] = false;
    }
    if(!password.length){
      nuevosErrores["passwordIsRequired"] = true;
    }else{
      nuevosErrores["passwordIsRequired"] = false;
    }
    if(!validPassword.test(password) && password.length){
      nuevosErrores["passwordNotValid"] = true;
    }else{
      nuevosErrores["passwordNotValid"] = false;
    }
    if (password !== repeatPassword) {
      nuevosErrores["repeatPasswordNotValid"] = true;
    }else{
      nuevosErrores["repeatPasswordNotValid"] = false;
    }
    if (!captcha) {
      nuevosErrores["captchaInvalid"] = true;
    }else{
      nuevosErrores["captchaInvalid"] = false;
    }
    setErrors(nuevosErrores);
    if(!nuevosErrores.emailIsRequired && !nuevosErrores.emailNotValid && !nuevosErrores.passwordIsRequired && !nuevosErrores.passwordNotValid && !nuevosErrores.repeatPasswordNotValid && !nuevosErrores.captchaInvalid){
      return false
    }else{
      return true
    }
  }

  export function registerValidations(formData:any,captcha:any,setErrors:any) {
    let nuevosErrores: any = {};
    const {name ,email, password, organizador } = formData;
    if (!name.length) {
      nuevosErrores["nameIsRequired"] = true;
    } else {
      nuevosErrores["nameIsRequired"] = false;
    }
    if (!email.length) {
      nuevosErrores["emailIsRequired"] = true;
    } else {
      nuevosErrores["emailIsRequired"] = false;
    }
    if (!validEmail.test(email) && email.length) {
      nuevosErrores["emailNotValid"] = true;
    } else {
      nuevosErrores["emailNotValid"] = false;
    }
    if(!password.length){
      nuevosErrores["passwordIsRequired"] = true;
    }else{
      nuevosErrores["passwordIsRequired"] = false;
    }
    if(!validPassword.test(password) && password.length){
      nuevosErrores["passwordNotValid"] = true;
    }else{
      nuevosErrores["passwordNotValid"] = false;
    }
    if (!captcha) {
      nuevosErrores["captchaInvalid"] = true;
    }else{
      nuevosErrores["captchaInvalid"] = false;
    }
    setErrors(nuevosErrores);
    if(!nuevosErrores.nameIsRequired && !nuevosErrores.emailIsRequired && !nuevosErrores.emailNotValid && !nuevosErrores.passwordIsRequired && !nuevosErrores.passwordNotValid && !nuevosErrores.captchaInvalid){
      return false
    }else{
      return true
    }
  }