import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";
import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";

// Utilizando Class
function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string):void {
  if(emailValidator.isEmail(email)) {
    console.log('Email é válido (Class)');
  } else {
    console.log('Email é inválido (Class)');
  }
}

// Utilizando Function
function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string):void {
  if(emailValidator(email)) {
    console.log('Email é válido (Fn)');
  } else {
    console.log('Email é inválido (Fn)');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), 'isaiasmendes@email.com');
validaEmailFn(emailValidatorFnAdapter, 'isaiasmendes@email.com');