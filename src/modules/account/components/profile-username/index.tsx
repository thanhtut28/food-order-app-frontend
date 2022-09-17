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
      onCompleted: () => toast.success(SuccessMessage.USERNAME_UPDATED),
      onError: () => {},
   });

   const handleUpdateUsername = async (username: string) => {
      await updateUsername({ variables: { username } });
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
