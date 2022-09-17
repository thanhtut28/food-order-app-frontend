interface Props {
   children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         <main className="relative">{children}</main>
      </div>
   );
};

export default Layout;
