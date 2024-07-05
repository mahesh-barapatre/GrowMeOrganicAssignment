export interface FormData {
  name: string;
  phone: string;
  email: string;
}

export interface FormErrors {
  //   [key: string]: string;
  name?: string;
  phone?: string;
  email?: string;
}
