import Image from "next/image";
import React from "react";

import { BlogCardProps } from "@types";
import Link from "next/link";

const BlogCard = ({ data }: BlogCardProps) => {
  return (
    <div className="p-5  bg-dark-gray border border-text rounded-lg shadow ">
      <Link href={`/single-post/${data._id}`}>
        <Image
          height={100}
          width={100}
          className="rounded-t-lg w-full"
          src={data.image ? data.image : "/assets/images/img.png"}
          alt="iamge"
        />
        <div className="flex flex-between text-text my-2">
          <span>{data.tag}</span>
          <span>{"5 mins read"}</span>
        </div>
        <a href="#">
          <h5 className="my-2 text-2xl font-bold tracking-tight text-secondary hover:text-light-sky">
            {data.title}
          </h5>
        </a>
      </Link>

      <div className="flex flex-between  items-center text-text my-2">
        <Link href={`/profile/${data.creator._id}`}>
          <div className="flex items-center text-text ">
            <Image
              height={40}
              width={40}
              src={
                data.creator.image
                  ? data.creator.image
                  : "/assets/images/img.png"
              }
              alt="image"
              className="rounded-full object-contain mr-2"
            />
            <div>
              <h1>{data.creator.email.split("@")[0]}</h1>
              <h1>{"5 mins read"}</h1>
            </div>
          </div>
        </Link>
        <Link href={`/single-post/${data._id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
