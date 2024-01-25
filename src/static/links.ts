import { SERVERIP } from "@/../secrets";

//**************** SERVER *******************/
export const SERVER = `${SERVERIP}/api/v1`;
//**************** AUTHENTICATION *******************/
export const AUTH = `${SERVER}/authentication`;
export const LOGIN = `${AUTH}/login`;
export const SIGNUP = `${AUTH}/init`;
export const VERIFY = `${AUTH}/verify-email`;
export const VERIFY_FORGOT_PASSWORD = `${AUTH}/verify-forgot-password`;
export const PERSONAL = `${AUTH}/personal-info`;
export const ID_verify = `${AUTH}/id-info`;
export const ID_verify_WithoutImg = `${AUTH}/id-info-withoutImg`;
export const FORGET = `${AUTH}/forgot-password`;
export const RESET = `${AUTH}/reset-password`;

export const PIN = `${AUTH}/set-pin`;
//**************** USER *******************/
export const USER = `${SERVER}/user`;
export const PROFILE = `${USER}/profile`;
//**************** MEDIA *******************/
export const MEDIA = `${SERVER}/media?media=`;
