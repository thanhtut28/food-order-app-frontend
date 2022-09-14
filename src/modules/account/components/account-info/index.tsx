interface Props {
   label: string;
   info: string;
}

const AccountInfo: React.FC<Props> = ({ label, info }) => {
   return (
      <div className="border bg-gray-50 border-gray-100 rounded-md p-4">
         <div className="flex flex-col gap-y-4">
            <h6 className="text-sm text-slate-800 uppercase">{label}</h6>
            <p className="text-sm text-gray-500">{info}</p>
         </div>
      </div>
   );
};

export default AccountInfo;
