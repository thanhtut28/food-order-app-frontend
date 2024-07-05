import { SuccessMessage } from "@/lib/constants/message";
import {
   MeDocument,
   MeQuery,
   useUpdateAddressMutation,
   useUpdateUsernameMutation,
} from "@/lib/generated/graphql";
import { toast } from "react-toastify";
import AccountInfo from "../account-info";

interface Props {
   me: MeQuery["me"];
}

const ProfileAddress: React.FC<Props> = ({ me }) => {
   const [updateAddress, { loading: updatingAddress }] = useUpdateAddressMutation({
      refetchQueries: [MeDocument],
      onCompleted: () => toast.success(SuccessMessage.ADDRESS_UPDATED),
      onError: () => {},
   });

   console.log(me?.address);

   const handleUpdateAddress = async (address: string) => {
      await updateAddress({ variables: { address } });
   };

   return (
      <AccountInfo
         label="address"
         info={me?.address}
         updating={updatingAddress}
         inputType="textarea"
         updateAction={handleUpdateAddress}
      />
   );
};

export default ProfileAddress;
