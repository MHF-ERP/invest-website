export default function XIcon(props: {
  duplicate?: boolean;
  color: string;
  setOverlay?: any;
}) {
  const { color, setOverlay, duplicate } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className=" cursor-pointer"
      onClick={() => {
        if (setOverlay) duplicate ? setOverlay(1) : setOverlay(0);
      }}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
