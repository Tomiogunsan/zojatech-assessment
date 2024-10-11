import { LOGIN, REGISTER, VERIFY_OTP } from "config/apiUrl"
import api from "../config/http-common";
import { ILoginQuery, IRegisterQuery } from "./interface/DTO/auth";
import { ILoginResponse, IRegisterResponse } from "./interface/response/auth";

export const register = (data: IRegisterQuery) => {
  return api.post<IRegisterResponse>(REGISTER, data);
};

export const verifyOtp = (otp: string) => {
    return api.post<unknown>(VERIFY_OTP, otp)
}

export const login = (data: ILoginQuery) => {
  return api.post<ILoginResponse>(LOGIN, data);
};