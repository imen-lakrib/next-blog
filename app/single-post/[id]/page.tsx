"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Loader from "@components/Loader";
import { PostProps } from "@types";
import SingleBlogPost from "@components/SingleBlogPost";

const SingleBlog = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [blogPost, setBlogPost] = useState<PostProps | null>(null); // Specify the type here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await fetch(`/api/post/${id}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setBlogPost(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    if (id) {
      fetchSinglePost();
    }
  }, [id]);

  return (
    <div className="relative">
      {blogPost && <SingleBlogPost blogPost={blogPost} />}
      {loading && <Loader />}
    </div>
  );
};

export default SingleBlog;
