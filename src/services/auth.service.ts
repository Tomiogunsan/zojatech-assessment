import { LOGIN, REGISTER, RESEND_OTP, VERIFY_OTP } from "config/apiUrl";
import api from "../config/http-common";
import { ILoginQuery, IRegisterQuery } from "./interface/DTO/auth";
import { ILoginResponse, IRegisterResponse, IResendTokenResponse, IVerifyTokenResponse } from "./interface/response/auth";

export const register = (data: IRegisterQuery) => {
  return api.post<IRegisterResponse, IRegisterResponse>(REGISTER, data);
};

export const verifyOtp = (data: {otp: string}) => {
  return api.post<IVerifyTokenResponse>(VERIFY_OTP, data);
};

export const login = (data: ILoginQuery) => {
  return api.post<ILoginResponse>(LOGIN, data);
};


export const resendOtp = (data: {email: string}) => {
  return api.post<IResendTokenResponse>(RESEND_OTP, data);
}