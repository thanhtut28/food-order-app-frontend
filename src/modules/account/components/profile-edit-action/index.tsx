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
               <Button variant="primary-light-action" type="submit" isLoading={updating}>
                  save
               </Button>
            </div>
         ) : (
            <button className="text-gray-700 pb-1" onClick={() => setEditing(true)}>
               <Edit />
            </button>
         )}
      </>
   );
};

export default ProfileEditAction;
