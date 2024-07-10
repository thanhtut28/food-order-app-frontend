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
            <div className="mx-auto flex w-full max-w-sm flex-1 justify-end gap-2 sm:w-fit sm:max-w-none sm:flex-none">
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
