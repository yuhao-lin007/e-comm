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

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["PayPal", "Credit Card", "CashOnDelivery"];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "PayPal";
  export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 2;