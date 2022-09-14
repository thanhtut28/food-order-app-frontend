interface Props {
   children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         <main className="relative max-w-screen-2xl w-full mx-auto">{children}</main>
      </div>
   );
};

export default Layout;
