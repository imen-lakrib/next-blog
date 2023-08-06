"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const ProfileBlogCard = ({ post, handleEdit,handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="p-5  bg-dark-gray border border-text rounded-lg shadow ">
      <a href="#">
        <Image
          height={100}
          width={100}
          className="rounded-t-lg w-full"
          src={post.image ? post.image : "/assets/images/img.png"}
          alt="iamge"
        />
      </a>
      <div className="flex flex-between text-text my-2">
        <span>{post.tag}</span>
        <span>{"5 mins read"}</span>
      </div>
      <a href="#">
        <h5 className="my-2 text-2xl font-bold tracking-tight text-secondary hover:text-light-sky">
          {post.title}
        </h5>
      </a>

      <div className="flex flex-between  items-center text-text my-2">
        <div className="flex items-center text-text ">
          <Image
            height={40}
            width={40}
            src={
              post.creator.image ? post.creator.image : "/assets/images/img.png"
            }
            alt="image"
            className="rounded-full object-contain mr-2"
          />
          <div>
            <h1>{post.creator.email.split("@")[0]}</h1>
            <h1>{"5 mins read"}</h1>
          </div>
        </div>
        <button>Read More</button>
      </div>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileBlogCard;
