import bcrypt from "bcrypt";

/*This block of code exports a function called hashPassword. This function takes in a password as an argument and returns a 
hashed version of the password using the bcrypt library. The async keyword means that the function returns a promise that 
resolves to the hashed password.
saltRounds is a variable that determines how many times the password is hashed. This value is set to 10 in this case, 
which is a reasonable default value.
The try and catch blocks are used to handle any errors that may occur during the hashing process. If an error occurs, 
it is logged to the console.*/

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
/*
This block of code exports a function called comparePassword. This function takes in a plain-text password and a hashed password, 
and it returns a boolean value indicating whether the plain-text password matches the hashed password.
The async keyword means that the function returns a promise that resolves to a boolean value.

The bcrypt.compare() function is used to compare the plain-text password with the hashed password.
It returns true if the passwords match, and false if they do not.
*/
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
