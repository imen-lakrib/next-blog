import Image from "next/image";
import React from "react";
import { PostProps } from "@types";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const SingleBlogPost = ({ blogPost }: { blogPost: PostProps }) => {
  return (
    <section>
      <div className="flex items-center text-text gap-2">
        <SocialMedia icon={`/assets/images/${"home"}.png`} link={"/"} />
        <span>Home</span> <span>{`${">"}`}</span> <span>Blog</span>{" "}
        <span>{`${">"}`}</span>{" "}
        <span className="font-bold ">
          {blogPost.title.length > 10
            ? `${blogPost.title.slice(0, 10)}...`
            : blogPost.title}
        </span>
      </div>
      <div className="border-b border-solid border-text my-4"></div>

      <div className="text-center m-0 md:m-20 my-10">
        <h1 className="section_title  ">
          <span className="blue_gradient">{blogPost.title}</span>
        </h1>
        

        <Image src={blogPost.image} alt={blogPost.tag} width={1020} height={580} />

        <Link href={`/profile/${blogPost.creator._id}`}>
          <div className="flex items-center text-text my-10">
            <Image
              height={40}
              width={40}
              src={
                blogPost.creator.image
                  ? blogPost.creator.image
                  : "/assets/images/img.png"
              }
              alt="image"
              className="rounded-full object-contain mr-2"
            />
            <div>
              <h1>{blogPost.creator.email.split("@")[0]}</h1>
              <h1>{"5 mins read"}</h1>
            </div>
          </div>
        </Link>

        <div className="text-left my-10">
          <p className="font-bold text-text text-xl ">{blogPost.description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPost;
