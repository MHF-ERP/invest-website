import Stock from "@/components/home/stock/index.component";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const AllPageLayout = dynamic(() => import("@/layouts/allPage.layout"));
const Navigator = dynamic(
  () => import("@/components/home/navigator/navigator.component")
);
const DefHome = dynamic(() => import("@/components/home/main/index.component"));
// const AllPageLayout = dynamic(() => import('@/components/layouts/allPage.layout'))

const Page: NextPage = (req, res) => {
  return (
    <AllPageLayout>
      <Navigator current={1} />
      {/* <Stock /> */}
      <DefHome />
    </AllPageLayout>
  );
};

export default Page;
