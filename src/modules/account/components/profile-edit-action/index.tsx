import Button from "@/modules/common/components/button";
import Edit from "@/modules/common/icons/edit";
import React from "react";

interface Props {
   editing: boolean;
   setEditing: React.Dispatch<React.SetStateAction<boolean>>;
   cancelAction: () => void;
   updating: boolean;
}

const ProfileEditAction: React.FC<Props> = ({ editing, setEditing, cancelAction, updating }) => {
   return (
      <>
         {editing ? (
            <div className="flex gap-2">
               {!updating && (
                  <Button variant="secondary-action" onClick={cancelAction}>
                     cancel
                  </Button>
               )}
               <Button variant="primary-action" type="submit" isLoading={updating}>
                  save
               </Button>
            </div>
         ) : (
            <Button variant="icon" className="pb-1 text-gray-700" onClick={() => setEditing(true)}>
               <Edit />
            </Button>
         )}
      </>
   );
};

export default ProfileEditAction;
