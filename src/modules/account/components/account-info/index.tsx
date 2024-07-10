import { FormEvent, useEffect, useRef, useState } from "react";
import ProfileEditAction from "../profile-edit-action";
import cn from "@/lib/utils/classname";

interface Props {
   label: string;
   info: string | null | undefined;
   updating: boolean;
   inputType?: "text" | "textarea";
   updateAction: (value: string) => Promise<void>;
}

const AccountInfo: React.FC<Props> = ({
   label,
   info,
   updating,
   inputType = "text",
   updateAction,
}) => {
   const [value, setValue] = useState("");
   const [editing, setEditing] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);
   const textareaRef = useRef<HTMLTextAreaElement>(null);

   useEffect(() => {
      if (editing) {
         inputType === "text" ? inputRef.current?.focus() : textareaRef.current?.focus();
         setValue(info ?? "");
      }
   }, [editing, inputType, info]);

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

   const inputField = {
      text: (
         <input
            placeholder={info ?? ""}
            value={value}
            onChange={e => setValue(e.target.value)}
            className="rounded-md px-2 py-1 text-sm text-gray-900 placeholder:text-gray-400 focus:border focus:border-primary-500 focus:outline-none sm:w-auto sm:flex-1"
            ref={inputRef}
         />
      ),
      textarea: (
         <textarea
            placeholder={info ?? ""}
            value={value}
            onChange={e => setValue(e.target.value)}
            className="h-32 resize-none rounded-md px-2 py-1 text-sm text-gray-900 placeholder:text-gray-400 focus:border focus:border-primary-500 focus:outline-none sm:flex-1"
            ref={textareaRef}
         />
      ),
   }[inputType];

   return (
      <div
         className={cn("rounded-lg border bg-neutral-50 p-3", {
            "border-primary-500 caret-primary-500": editing,
         })}
      >
         <div className="flex flex-col gap-y-4">
            <h6 className="text-sm font-semibold capitalize text-slate-900">{label}</h6>
            <form
               onSubmit={handleUpdateInfo}
               className={cn("flex items-start justify-between gap-4", {
                  "flex-col items-stretch sm:flex-row sm:items-start": editing,
               })}
            >
               {editing ? inputField : <p className="pt-0.5 text-sm text-gray-500">{info}</p>}
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
