export enum Field {
   EMAIL = "email",
   PASSWORD = "password",
   USERNAME = "username",
   TOKEN = "token",
}

export const toastClass = {
   success: "bg-primary-200 text-primary-700",
   error: "bg-red-200 text-red-700",
   info: "bg-gray-600",
   warning: "bg-orange-400",
   default: "bg-indigo-600",
   dark: "bg-white-600 font-gray-300",
};

export const IS_SERVER = typeof window === undefined;
