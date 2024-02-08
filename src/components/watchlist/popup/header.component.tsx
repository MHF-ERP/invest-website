import { cn } from "@/lib/cn";

export default function Header(props: {
  title: string;
  brief: string;
  briefClassName?: string;
  headerClassName?: string;
}) {
  const { title, brief, headerClassName, briefClassName } = props;
  return (
    <div className=" flex flex-col gap-[12px]">
      <h1
        className={cn("text-[16px] font-[600] text-[#101828]", headerClassName)}
      >
        {title}
      </h1>
      <p
        className={cn("text-[14px] font-[400] text-[#475467]", briefClassName)}
      >
        {brief}
      </p>
    </div>
  );
}
