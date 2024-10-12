
import SideNav from "@components/AppNav/SideNav";
import Header from "@components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <section className="grid grid-cols-[260px_1fr] h-screen overflow-auto">
      <aside className="h-screen sticky  top-0">
        <SideNav />
      </aside>
      <main className="bg-white h-screen grid grid-rows-[80px_1fr] auto-rows-max-auto overflow-auto ">
        <Header />
        {children}
      </main>
    </section>
  );
};

export default RootLayout;
