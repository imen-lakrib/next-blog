"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { PostProps,FeedProps } from "@types";




const Feed: React.FC<FeedProps> = ({ setIsLoading }) => {
  const [allPosts, setAllPosts] = useState<PostProps[]>([]);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/post");
      const data = await response.json();

      setAllPosts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="md:m-10 m-0 ">
      <h1 className="section_title">{"Editor's picked"}</h1>
      <p className="section_sub_title">Featured and highly rated articles</p>
      <div className="grid md:grid-cols-2 md:gap-8 grid-cols-1 gap-4">
        {allPosts ? (
          allPosts.map((post: any, index: number) => {
            return (
           
                  <BlogCard key={index} data={post} />
            );
          })
        ) : (
          <div>there is no blog to display</div>
        )}
      </div>
    </section>
  );
};

export default Feed;
