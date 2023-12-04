import Image from "next/image";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";

export default function Home() {
  const onGradeLab = (labName) => {
    console.log(labName);
  };
  return (
    <main className="flex bg-slate-50 h-screen w-screen">
      <div className="w-1/6 h-screen ">
        <SideBar />
      </div>
      <div className="w-5/6">
        <MainPage onGradeLab={onGradeLab} />
      </div>
    </main>
  );
}
