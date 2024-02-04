import ContentLoader from "react-content-loader";

export default function DeleteStockLoader() {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={60}
      className=" w-full flex justify-between border-[#EAECF0]  border rounded-[12px]"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="20" y="10" rx="5" ry="5" width="100" height="10" />
      <rect x="20" y="30" rx="5" ry="5" width="80" height="10" />
      <rect x="85%" y="15" rx="4" ry="4" width="25" height="25" />
    </ContentLoader>
  );
}
