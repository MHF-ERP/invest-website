import React from "react";

export default function CategoriesIcon(props: { color: string }) {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.45833 8.125H4.16667C3.24583 8.125 2.5 7.37917 2.5 6.45833V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H6.45833C7.37917 2.5 8.125 3.24583 8.125 4.16667V6.45833C8.125 7.37917 7.37917 8.125 6.45833 8.125Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transView"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.8333 8.125H13.5417C12.6208 8.125 11.875 7.37917 11.875 6.45833V4.16667C11.875 3.24583 12.6208 2.5 13.5417 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V6.45833C17.5 7.37917 16.7542 8.125 15.8333 8.125Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transView"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.45833 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V13.5417C2.5 12.6208 3.24583 11.875 4.16667 11.875H6.45833C7.37917 11.875 8.125 12.6208 8.125 13.5417V15.8333C8.125 16.7542 7.37917 17.5 6.45833 17.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transView"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.8333 17.5H13.5417C12.6208 17.5 11.875 16.7542 11.875 15.8333V13.5417C11.875 12.6208 12.6208 11.875 13.5417 11.875H15.8333C16.7542 11.875 17.5 12.6208 17.5 13.5417V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transView"
      />
    </svg>
  );
}
