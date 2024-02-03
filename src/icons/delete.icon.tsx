import React from "react";

export default function Delete(props: { color: string }) {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9523 18.0031H7.04748C6.06732 18.0031 5.2524 17.2485 5.17723 16.2712L4.37256 5.81055H15.6272L14.8226 16.2712C14.7474 17.2485 13.9325 18.0031 12.9523 18.0031V18.0031Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6695 5.81052H3.33057"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.65518 2.99695H12.3446C12.8626 2.99695 13.2825 3.41686 13.2825 3.93484V5.81062H6.71729V3.93484C6.71729 3.41686 7.13719 2.99695 7.65518 2.99695Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.641 9.56213V14.2516"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.35825 9.56213V14.2516"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
