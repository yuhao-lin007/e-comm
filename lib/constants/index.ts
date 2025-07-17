export const APP_NAME =process.env.NEXT_PUBLIC_APP_NAME || 'ecomm project';
export const APP_DESCRRIPTION =process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Building a e-com project using next.js';
export const SERVER_URL =process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCT_LIMIT = Number(process.env.LATEST_PRODUCT_LIMIT) || 4;
export const SIGNIN_DEFAULT_VALUE ={
    email:'',
    password:'',
}
export const SIGNUP_DEFAULT_VALUE = {
  name: "",
  email: "",
  password: "",
  confpassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  country: "",
};