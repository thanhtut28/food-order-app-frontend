import { SuccessMessage } from "@/lib/constants/message";
import { MeDocument, MeQuery, useUpdateEmailMutation } from "@/lib/generated/graphql";
import { toast } from "react-toastify";
import AccountInfo from "../account-info";

interface Props {
   me: MeQuery["me"];
}

const ProfileEmail: React.FC<Props> = ({ me }) => {
   const [updateEmail, { loading: updatingEmail }] = useUpdateEmailMutation({
      refetchQueries: [MeDocument],
      onCompleted: () => toast.success(SuccessMessage.EMAIL_UPDATED),
      onError: () => {},
   });

   const handleUpdateEmail = async (email: string) => {
      await updateEmail({ variables: { email } });
   };

   return (
      <AccountInfo
         label="email"
         info={me?.email}
         updating={updatingEmail}
         updateAction={handleUpdateEmail}
      />
   );
};

export default ProfileEmail;
