export type IRegisterQuery = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type ILoginQuery = {
  email: string;
  password: string;
};
