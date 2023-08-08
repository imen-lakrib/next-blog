"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ProfileBlogCardProps } from "@types";
import Link from "next/link";

const ProfileBlogCard = ({
  post,
  handleEdit,
  handleDelete,
}: ProfileBlogCardProps) => {
  const { data: session } = useSession();
  const pathName = usePathname();

  const userSession = (session as any)?.user?.id ?? "any value"; // Use type assertion

  return (
    <div className="p-5 relative bg-dark-gray border border-text rounded-lg shadow ">
      {userSession === post.creator._id && pathName === "/profile" && (
        <div className=" gap-4 absolute top-2 right-2  z-999999">
          <div className="cursor-pointer m-2 z-999999" onClick={handleEdit}>
            <Image
              src="/assets/images/pen.png"
              height={30}
              width={30}
              alt="edit img"
            />
          </div>
          <div className="fcursor-pointer m-2 z-999999" onClick={handleDelete}>
            <Image
              src="/assets/images/bin.png"
              height={30}
              width={30}
              alt="edit img"
            />
          </div>
        </div>
      )}

      <Link href={`/single-post/${post._id}`}>
        <Image
          height={100}
          width={100}
          className="rounded-t-lg w-full"
          src={post.image ? post.image : "/assets/images/img.png"}
          alt="iamge"
        />{" "}
        <div className="flex flex-between text-text my-2">
          <span>{post.tag}</span>
          <span>{"5 mins read"}</span>
        </div>
        <a href="#">
          <h5 className="my-2 text-2xl font-bold tracking-tight text-secondary hover:text-light-sky">
            {post.title}
          </h5>
        </a>
      </Link>
      <div className="flex flex-between  items-center text-text my-2">
        <Link href={`/profile/${post.creator._id}`}>
          <div className="flex items-center text-text ">
            <Image
              height={40}
              width={40}
              src={
                post.creator.image
                  ? post.creator.image
                  : "/assets/images/img.png"
              }
              alt="image"
              className="rounded-full object-contain mr-2"
            />
            <div>
              <h1>{post.creator.email.split("@")[0]}</h1>
              <h1>{"5 mins read"}</h1>
            </div>
          </div>
        </Link>
        <Link href={`/single-post/${post._id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileBlogCard;
