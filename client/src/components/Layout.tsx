import SideBar from "./SideBar";

interface LayoutProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  children: React.ReactNode;
}

function Layout({ content, setContent, children }: LayoutProps) {
  return (
    <div className="flex">
      <SideBar content={content} setContent={setContent} />
      <div className="container m-5">{children}</div>
    </div>
  );
}

export default Layout;
