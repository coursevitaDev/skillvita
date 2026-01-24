import TopLayer from "@/app/mock-Group-Discussion/_components/TopLayer";
import Tips from "@/app/mock-Group-Discussion/_components/Tips";
import LastLayer from "@/app/mock-Group-Discussion/_components/LastLayer";
import Join from "@/app/mock-Group-Discussion/_components/join";
const page = () => {
  return (
    <div className="bg-brand-950 min-h-screen">
      <TopLayer />
      <Join />
      <Tips />
      <LastLayer />
    </div>
  );
};

export default page;
