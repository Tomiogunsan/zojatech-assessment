// import { joinPath } from "helpers/navigation";

export const AuthPaths = {
  REGISTER: "register",
  LOGIN: "login",
  CONFIRM_EMAIL: "confirm-email",
  VERIFY_OTP: 'verify-otp',
  VERIFIED: 'verified',
};

export const BasePaths = {
  ADMIN: "/admin",
};

export const AdminPath = {
  ANALYTICS: "analytics",
  MESSAGES: "messages",
  MYGROUP: 'my-group',
  MYPORTFOLIO: 'my-portfolio',
  PACK: 'pack',
  SETTINGS: 'settings',
};

// export const AuthPagePath = {
//   signin: (appendRedirectUrl: boolean = false) =>
//     `/${AuthPaths.SIGNIN}${
//       appendRedirectUrl
//         ? `?redirect_url=${encodeURIComponent(window.location.pathname)}`
//         : ""
//     }`,
// };


