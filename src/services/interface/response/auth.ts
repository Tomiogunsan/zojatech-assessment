export type IRegisterResponse = {
  data: {
    success: boolean;
    message: string;
    data: {
      token: string;
      opt: string;
    };
  };
};

export type ILoginResponse = {
  success: boolean;
  message: string;
  data: {
    user: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      email_verified_at: null;
      created_at: string;
      updated_at: string;
    };
    token: string;
  };
};

export type IResendTokenResponse = {
  success: boolean;
  message: string;
  data: { opt: number };
};

export type IVerifyTokenResponse = {
  success: boolean;
  message: string;
  data: [];
};


