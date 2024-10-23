import * as Yup from "yup";
import {
  Link,
  CarouselItem,
  Service,
  SignInField,
  authInputField,
  SignUpField,
  Person,
} from "./interfaces";
import images from "../assets/images";

import {
  faApple,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faMicrosoft,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faDollarSign,
  faHandHoldingDollar,
  faHeadset,
  faSackDollar,
  faStore,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks: Array<Link> = [
  { name: "Home", href: "/home", isActive: false },
  { name: "Contact", href: "/contact", isActive: false },
  { name: "About", href: "/about", isActive: false },
  { name: "SignUp", href: "/signup", isActive: false },
];
export const carouselItems: Array<CarouselItem> = [
  {
    id: 1,
    imageUrl: images.iphone,
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    icon: faApple,
  },
  {
    id: 2,
    imageUrl: images.pixel,
    title: "Pixel 9 Pro & Pixel 9 Pro XL",
    description: "Up to 15% off Voucher",
    icon: faGoogle,
  },
  {
    id: 3,
    imageUrl: images.surface,
    title: "Surface Pro 10",
    description: "Up to 25% off Voucher",
    icon: faMicrosoft,
  },
];
export const newArrival = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: images.ps5,
    buttonText: "Shop Now",
  },
  {
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
    image: images.women,
    buttonText: "Shop Now",
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers.",
    image: images.speaker,
    buttonText: "Shop Now",
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: images.gucci,
    buttonText: "Shop Now",
  },
];
export const services: Array<Service> = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: faTruckFast,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: faHeadset,
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: faHandHoldingDollar,
  },
];
export const genServices: Array<Service> = [
  {
    title: "10.5K",
    description: "Sallers active our site",
    icon: faStore,
  },
  {
    title: "33K",
    description: "Mopnthly Produduct Sale",
    icon: faDollarSign,
  },
  {
    title: "45.5K",
    description: "Customer active in our site",
    icon: faBagShopping,
  },
  {
    title: "25K",
    description: "Anual gross sale in our site",
    icon: faSackDollar,
  },
];
export const signInFields: Array<authInputField> = [
  { label: "Email", placeholder: "Email", type: "email", name: "email" },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
  },
];
export const signUpFields: Array<authInputField> = [
  ...signInFields,
  { label: "Name", placeholder: "Name", type: "text", name: "name" },
  {
    label: "Confirm Password",
    placeholder: "Confirm Password",
    type: "password",
    name: "rePassword",
  },
  { label: "Phone", placeholder: "Phone", type: "tel", name: "phone" },
];
export const signInInitialValues: SignInField = {
  email: "",
  password: "",
};
export const signUpInitialValues: SignUpField = {
  ...signInInitialValues,
  name: "",
  rePassword: "",
  phone: "",
};
export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^[a-z0-9]{5,10}$/i,
      "Password must include characters with length from 5 to 10 chars"
    ),
});
export const signUpValidationSchema = Yup.object().shape({
  email: signInValidationSchema.fields.email,
  password: signInValidationSchema.fields.password,
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum length is 3 chars")
    .max(15, " Maximum length is 15 chars"),
  rePassword: Yup.string()
    .required("rePassword is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^01[0125][0-9]{8}$/, "Your phone number must be Egyptian"),
});
export const people: Array<Person> = [
  {
    image: images.TomCruise,
    name: "Tom Cruise",
    title: "Founder & Chairman",
    icons:[
      faTwitter,
      faInstagram,
      faLinkedinIn
    ]
  },
  {
    image: images.EmmaWatson,
    name: "Emma Watson",
    title: "Managing Director",
    icons:[
      faTwitter,
      faInstagram,
      faLinkedinIn
    ]
  },
  {
    image: images.WillSmith,
    name: "Will Smith",
    title: "Product Designer",
    icons:[
      faTwitter,
      faInstagram,
      faLinkedinIn
    ]
  },
]