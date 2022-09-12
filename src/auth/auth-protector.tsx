import { useMeQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
   children: React.ReactNode;
}

const AuthProtector: React.FC<Props> = ({ children }) => {
   const { data, loading } = useMeQuery();
   const { replace, pathname } = useRouter();

   useEffect(() => {
      if (!data?.me && !loading) {
         replace(`/login?next=${pathname}`);
      }
   }, [data?.me, loading, pathname, replace]);

   if (loading) {
      return <h6>Loading...</h6>;
   }

   return <>{children}</>;
};

export default AuthProtector;
