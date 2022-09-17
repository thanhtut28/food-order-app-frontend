import cn from "classnames";
import { FormEvent, useEffect, useRef, useState } from "react";
import ProfileEditAction from "../profile-edit-action";

interface Props {
   label: string;
   info: string | undefined;
   updating: boolean;
   updateAction: (value: string) => Promise<void>;
}

const AccountInfo: React.FC<Props> = ({ label, info, updating, updateAction }) => {
   const [value, setValue] = useState("");
   const [editing, setEditing] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (editing) {
         inputRef.current?.focus();
      }
   }, [editing]);

   const clearState = () => {
      setEditing(false);
      setValue("");
   };

   const handleCancelAction = () => {
      clearState();
   };

   const handleUpdateInfo = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await updateAction(value);
      clearState();
   };

   return (
      <div
         className={cn("border bg-gray-50 border-gray-200 rounded-md p-3", {
            "border-primary-light-600": editing,
         })}
      >
         <div className="flex flex-col gap-y-4">
            <h6 className="text-sm text-slate-900 uppercase">{label}</h6>
            <form onSubmit={handleUpdateInfo} className="flex justify-between">
               {editing ? (
                  <input
                     placeholder={info}
                     value={value}
                     onChange={e => setValue(e.target.value)}
                     className="text-sm text-gray-900 focus:outline-none placeholder:text-gray-500"
                     ref={inputRef}
                  />
               ) : (
                  <p className="text-sm text-gray-500 pt-0.5">{info}</p>
               )}
               <ProfileEditAction
                  editing={editing}
                  setEditing={setEditing}
                  cancelAction={handleCancelAction}
                  updating={updating}
               />
            </form>
         </div>
      </div>
   );
};

export default AccountInfo;
