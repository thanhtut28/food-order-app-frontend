const Title = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         <div className="py-4">
            <h6 className="text-2xl font-bold text-gray-700 inline-block relative py-2 b">
               {children}
            </h6>
         </div>
         <hr className="py-4" />
      </div>
   );
};

export default Title;
