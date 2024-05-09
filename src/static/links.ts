import { SERVERIP } from "@/../secrets";

//**************** SERVER *******************/
export const SERVER = `${SERVERIP}/api/v1`;

//**************** AISERVER *******************/
export const AISERVER = `https://ai.naqiconcepts.com`;
export const PREDECT = `${AISERVER}/predict?category=`;

//**************** WatchList *******************/
export const WATCHLIST = `${SERVERIP}/api/v1/watch-list`;

//**************** AUTHENTICATION *******************/
export const AUTH = `${SERVER}/authentication`;
export const LOGIN = `${AUTH}/login`;
export const SIGNUP = `${AUTH}/init`;
export const VERIFY = `${AUTH}/verify-email`;
export const VERIFY_FORGOT_PASSWORD = `${AUTH}/verify-forgot-password`;
export const RESEND = `${AUTH}/verify-email/resend-otp`;
export const PERSONAL = `${AUTH}/personal-info`;
export const ID_verify = `${AUTH}/id-info`;
export const ID_verify_WithoutImg = `${AUTH}/id-info-withoutImg`;
export const FORGET = `${AUTH}/forgot-password`;
export const RESET = `${AUTH}/reset-password`;
export const LOGOOUT = `${AUTH}/logout`;

export const PIN = `${AUTH}/set-pin`;
//**************** USER *******************/
export const USER = `${SERVER}/user`;
export const PROFILE = `${USER}/profile`;
//**************** MEDIA *******************/
export const MEDIA = `${SERVER}/media?media=`;
//*****************STOCKS********************** */
export const historicalUrl5Days = `https://financialmodelingprep.com/api/v3/historical-chart/5min`;
export const historicalUrl1Month = `https://financialmodelingprep.com/api/v3/historical-price-full`;
export const historicalUrl1Year = `https://financialmodelingprep.com/api/v3/historical-price-full`;
export const historicalUrl3Year = `https://financialmodelingprep.com/api/v3/historical-price-full`;
export const historicalUrl5Year = `https://financialmodelingprep.com/api/v3/historical-price-full`;

export const profileUrl = `https://financialmodelingprep.com/api/v3/profile`;
export const priceUrl = `https://financialmodelingprep.com/api/v3/quote`;
export const stockImage = "https://s3-symbol-logo.tradingview.com";

//*****************WALLET********************** */
export const WALLET = `${SERVER}/my-wallet`;

//*****************Markets********************** */
export const MARKET = `${SERVER}/market`;
export const MARKET_STOCKS = `${MARKET}/stocks`;

//*****************NEWS********************** */
export const NEWS =
  "https://financialmodelingprep.com/api/v3/stock_news?page=0";
