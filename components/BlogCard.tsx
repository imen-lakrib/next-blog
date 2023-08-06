import Image from "next/image";
import React from "react";

interface BlogCardProps {
  data: {
    image: string;
    tag: string;
    title: string;
    creator: {
      image: string;
      email: string;
    };
  };
}

const BlogCard = ({ data }: BlogCardProps) => {
  return (
    <div className="p-5  bg-dark-gray border border-text rounded-lg shadow ">
      <a href="#">
        <Image
          height={100}
          width={100}
          className="rounded-t-lg w-full"
          src={data.image ? data.image : "/assets/images/img.png"}
          alt="iamge"
        />
      </a>
      <div className="flex flex-between text-text my-2">
        <span>{data.tag}</span>
        <span>{"5 mins read"}</span>
      </div>
      <a href="#">
        <h5 className="my-2 text-2xl font-bold tracking-tight text-secondary hover:text-light-sky">
          {data.title}
        </h5>
      </a>

      <div className="flex flex-between  items-center text-text my-2">
        <div className="flex items-center text-text ">
          <Image
            height={40}
            width={40}
            src={
              data.creator.image ? data.creator.image : "/assets/images/img.png"
            }
            alt="image"
            className="rounded-full object-contain mr-2"
          />
          <div>
            <h1>{data.creator.email.split("@")[0]}</h1>
            <h1>{"5 mins read"}</h1>
          </div>
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
