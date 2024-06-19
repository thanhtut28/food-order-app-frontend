import Nav from "./nav";

interface Props {
   children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         <Nav />
         <main className="pt-20 pb-10">{children}</main>
      </div>
   );
};

export default Layout;
