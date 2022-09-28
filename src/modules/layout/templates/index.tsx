import Nav from "./nav";

interface Props {
   children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         <Nav />
         <main className="py-24">{children}</main>
      </div>
   );
};

export default Layout;
