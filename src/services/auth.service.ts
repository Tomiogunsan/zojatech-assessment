import { REGISTER } from "config/apiUrl"
import api from "../config/http-common";
import { IRegisterQuery } from "./interface/DTO/auth";

export const register = (data: IRegisterQuery) => {
  return api.post<unknown>(REGISTER, data);
};