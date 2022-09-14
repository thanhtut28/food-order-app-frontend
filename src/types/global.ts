import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ToastPosition, TypeOptions } from "react-toastify";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
   getLayout: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

export type GetToastClassNameFn = (
   context?:
      | {
           type?: TypeOptions | undefined;
           defaultClassName?: string | undefined;
           position?: ToastPosition | undefined;
           rtl?: boolean | undefined;
        }
      | undefined
) => string;
