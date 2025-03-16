import Sidebar from "@/components/Sidebar/Sidebar";
import TwitterForm from "@/components/TwitterForm/TwitterForm";

export default function Home() {
  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <TwitterForm />
    </div>
  );
}
