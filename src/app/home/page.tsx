import { NextPage } from "next";
import dynamic from "next/dynamic";
import Apex from "../../components/apex.component";
const AllPageLayout = dynamic(
  () => import("@/components/layouts/allPage.layout")
);
const Navigator = dynamic(
  () => import("@/components/home/navigator/navigator.component")
);
const DefHome = dynamic(() => import("@/components/home/main/index.component"));
// const AllPageLayout = dynamic(() => import('@/components/layouts/allPage.layout'))

const Page: NextPage = (req, res) => {
  return (
    <AllPageLayout>
      <Navigator current={1} />
      <DefHome />
    </AllPageLayout>
  );
};

export default Page;
