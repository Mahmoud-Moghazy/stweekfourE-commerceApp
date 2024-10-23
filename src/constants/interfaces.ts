import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode, RefObject } from "react";

export interface Link {
  name: string;
  href: string;
  isActive: boolean;
}
export interface Service {
  title: string;
  description: string;
  icon: IconProp;
}
export interface CarouselItem extends Service {
  id: number;
  imageUrl: string;
}
export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CategoryCardProps extends Category {}
export interface GeneralCarouselProps {
  scrollRef?: RefObject<HTMLDivElement>;
  children: ReactNode;
}
export interface NavigationArrowsProps {
  scrollRefs?: Array<RefObject<HTMLDivElement | null>>;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Brand extends Category {}
export interface Product {
  product: any;
  id: string;
  title: string;
  price: number;
  sold: number;
  images: Array<string>;
  ratingsQuantity: number;
  ratingsAverage: number;
  imageCover: string;
  description?: string;
  slug?: string;
  quantity?: number;
  priceAfterDiscount?: number;
  subcategory?: Array<string>;
  category?: Category;
  brand?: Brand;
  reviews?: unknown[];
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ProductCardProps extends Product {}
export interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}
export interface authInputField {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}
export interface SignInField {
  email: string;
  password: string;
}
export interface SignUpField extends SignInField {
  name: string;
  rePassword: string;
  phone: string;
}
export interface Content {
  title: string;
  className?: string;
}
export interface ToggleButtonProps {
  icon: IconProp;
  className?: string;
  onClick?: () => void;
  role?: string;
  ariaLabel?: string;
}
export interface ErrorResponse {
  statusMsg: string;
  message: string;
}
export interface UserBtnProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
export interface AddToProps {
  id: string;
  className?: string;
  icon?: boolean;
}
export interface Person {
  image: string;
  name: string;
  title: string;
  icons: Array<IconProp>;
}
