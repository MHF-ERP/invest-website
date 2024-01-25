import { cn } from "@/lib/cn";

export default function Header(props: {
  title: string;
  brief: string;
  headerClassName?: string;
  briefClassName?: string;
}) {
  const { title, brief, headerClassName, briefClassName } = props;
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <h1 className={cn("font-bold text-xl text-main", headerClassName)}>
        {title}
      </h1>
      <p
        className={cn(
          "text-p text-sm text-wrap flex-wrap w-fit max-w-96 text-center",
          briefClassName
        )}
      >
        {brief}
      </p>
    </div>
  );
}
