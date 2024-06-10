import config from "../config/config";

export const API_URL = config.API_URL_SECRET;
// export const API_URL = "https://project-eli.cyclic.app/";
//? LOCAL STORAGE KEY
// FOR TOKEN
export const TOKEN_KEY = config.TOKEN_KEY_SECRET;
export const MDX_PROFILEID = config.MDX_PROFILEID_SECRET;
export const CART_KEY = config.CART_KEY_SECRET;
export const GEST_ADDRES = config.GEST_ADDRES_SECRET;
export const LANGUAGE_NETFLIX = config.LANGUAGE_NETFLIX_SECRET;

// PayPal Id
export const CLIENT_ID = config.CLIENT_ID_SECRET;

// for TMBD key
export const API_KEY = config.API_KEY_SECRET;
// console.log("API_KEY_SECRET", process.API_KEY_SECRET);

// for TMBD language from BD
export const LANGUAGE = localStorage.getItem(LANGUAGE_NETFLIX) || "en";
// console.log(config.LOGIN_ROUTE_SECRET);
//? AUTH
export const LOGIN_ROUTE = API_URL + "users/login";
export const REGISTER_ROUTE = API_URL + "users";
// AUTH --> USER
export const CHECK_TOKEN = API_URL + "users/checkToken";
// AUTH --> MANAGER
export const CHECK_MANAGER = API_URL + "users/checkManager";
// AUTH --> ADMIN
export const CHECK_ADMIN = API_URL + "users/checkAdmin";

//?USER (NEED A TOKEN TO THIS ENDPOINT)
export const USER_INFO_ROUTE = API_URL + "users/userInfo";
export const USER_SCREENS_ROUTE = API_URL + "users/";

//?USER (NEED A TOKEN TO THIS ENDPOINT)
export const USER_ROUTE = API_URL + "users";

//?ADMIN (NEED A TOKEN TO THIS ENDPOINT && NEED TO BE ADMIN ROLE)
export const USER_LIST_ROUTE = API_URL + "users/usersList";
export const DELETE_USER_ROUTE = API_URL + "users/";
export const CHANGE_ROLE_ROUTE = API_URL + "users/changeRole";

// === SHOP === //

// (ONLY GET PRODUCT NEED A TOKEN TO THIS ENDPOINT) --> USER
// ANI ANOTHER REQUEST NEED TO BE ADMIN && SEND TOKEN (POST,PUT,DELETE,PATCH)

// CATEGORIES
export const CATEGORIES_ROUT = API_URL + "categories";

// PRODUCRTS
export const PRODUCT_ROUT = API_URL + "products";
