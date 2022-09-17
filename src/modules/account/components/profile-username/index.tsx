import { SuccessMessage } from "@/lib/constants/message";
import { MeDocument, MeQuery, useUpdateUsernameMutation } from "@/lib/generated/graphql";
import { toast } from "react-toastify";
import AccountInfo from "../account-info";

interface Props {
   me: MeQuery["me"];
}

const ProfileUsername: React.FC<Props> = ({ me }) => {
   const [updateUsername, { loading: updatingUsername }] = useUpdateUsernameMutation({
      refetchQueries: [MeDocument],
   });

   const handleUpdateUsername = async (username: string) => {
      updateUsername({ variables: { username } })
         .then(() => toast.success(SuccessMessage.USERNAME_UPDATED))
         .catch(() => {});
   };

   return (
      <AccountInfo
         label="username"
         info={me?.username}
         updating={updatingUsername}
         updateAction={handleUpdateUsername}
      />
   );
};

export default ProfileUsername;
