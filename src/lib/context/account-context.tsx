import { ApolloQueryResult } from "@apollo/client";
import { useRouter } from "next/router";
import { createContext, useContext, useState, useCallback } from "react";
import { Exact, MeQuery, useMeQuery } from "../generated/graphql";

export enum LOGIN_VIEW {
   SIGN_IN = "sign-in",
   REGISTER = "register",
}

interface AccountContextInterface {
   me: MeQuery["me"];
   loginView: [LOGIN_VIEW, React.Dispatch<React.SetStateAction<LOGIN_VIEW>>];
   retrievingUser: boolean;
   checkAuth: () => void;
   refetchUser: (
      variables?:
         | Partial<
              Exact<{
                 [key: string]: never;
              }>
           >
         | undefined
   ) => Promise<ApolloQueryResult<MeQuery>>;
}

const AccountContext = createContext<AccountContextInterface | null>(null);

export const AccountProvider = ({ children }: { children?: React.ReactNode }) => {
   const {
      data,
      loading: retrievingUser,
      refetch,
   } = useMeQuery({ fetchPolicy: "network-only", onError: () => {} });
   const loginView = useState<LOGIN_VIEW>(LOGIN_VIEW.SIGN_IN);

   const { replace } = useRouter();

   const checkAuth = useCallback(() => {
      if (!data?.me && !retrievingUser) {
         replace(`/account/login`);
      }
   }, [data?.me, replace, retrievingUser]);

   const accountContext = {
      me: data?.me,
      loginView,
      retrievingUser,
      checkAuth,

      refetchUser: refetch,
   };

   return <AccountContext.Provider value={accountContext}>{children}</AccountContext.Provider>;
};

export const useAccount = () => {
   const context = useContext(AccountContext);
   if (context === null) {
      throw new Error("useAcccount must be used within a AccountProvider");
   }
   return context;
};
