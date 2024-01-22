"use client";
import { isPDFFile } from "@/functions/validations";
import { signUpObj } from "@/store/signUpObj";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function ImageUpload(props: { setFile: any }) {
  const { setFile } = props;
  const { img, updateImg } = signUpObj();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        updateImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="w-full px-12 rounded-lg cursor-pointer border p-2 border-input flex flex-col items-center justify-center"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {!isPDFFile(img) && img && (
        <Image
          width={100}
          height={100}
          src={img}
          alt="Selected Image"
          className="w-36 h-20 rounded-xl mb-2 border-input border"
        />
      )}
      {isPDFFile(img) && img && (
        <Image
          width={100}
          height={100}
          src={"/images/pdf.png"}
          alt="Selected Image"
          className="w-36 h-20 rounded-xl mb-2 border-input border"
        />
      )}

      {!img && (
        <div className="w-fit p-1 rounded-xl mb-2 border-input border">
          <Icon icon={"la:id-card"} className="text-gray-600 text-3xl" />
        </div>
      )}

      <p className="text-main text-xs">
        <span className="font-bold mr-1">Click to upload</span>or drag and drop
      </p>
      <p className="text-main text-xs">PNG, JPG or PDF</p>
    </div>
  );
}
