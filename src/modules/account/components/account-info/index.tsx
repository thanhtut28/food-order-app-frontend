import { FormEvent, useEffect, useRef, useState } from "react";
import ProfileEditAction from "../profile-edit-action";
import cn from "@/lib/utils/classname";

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
         className={cn("rounded-xl border bg-neutral-50 p-3", {
            "border-primary-500 caret-primary-500": editing,
         })}
      >
         <div className="flex flex-col gap-y-4">
            <h6 className="text-sm font-semibold capitalize text-slate-900">{label}</h6>
            <form onSubmit={handleUpdateInfo} className="flex justify-between">
               {editing ? (
                  <input
                     placeholder={info}
                     value={value}
                     onBlur={() => setEditing(false)}
                     onChange={e => setValue(e.target.value)}
                     className="rounded px-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border focus:border-primary-500 focus:outline-none"
                     ref={inputRef}
                  />
               ) : (
                  <p className="pt-0.5 text-sm text-gray-500">{info}</p>
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
