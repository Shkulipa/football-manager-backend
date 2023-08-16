import { maxLengthPass, minLengthPass } from '../decorators/password.decorator';

export const generatePassword = () => {
  const symbols = '!$%&()=?*+><:;.-@[]{}';
  const digits = '0123456789';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const all = symbols + digits + uppercase + lowercase;

  const randomLength = Math.floor(Math.random() * (maxLengthPass - 1) + minLengthPass);

  let password = '';
  for (let i = 0; i < randomLength; i++) {
    const symbolIndex = Math.floor(Math.random() * all.length);
    password += all[symbolIndex];
  }

  const randomSpecialSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomDigitsSymbol = digits[Math.floor(Math.random() * digits.length)];
  const randomLowercaseSymbol = lowercase[Math.floor(Math.random() * lowercase.length)];
  const randomUppercaseSymbol = uppercase[Math.floor(Math.random() * uppercase.length)];

  password += randomSpecialSymbol + randomDigitsSymbol + randomLowercaseSymbol + randomUppercaseSymbol;

  return password;
};
