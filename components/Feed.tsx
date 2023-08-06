"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/post");
      const data = await response.json();

      setAllPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allPosts);

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
            return <BlogCard key={index} data={post} />;
          })
        ) : (
          <div>there is no blog to display</div>
        )}
      </div>
    </section>
  );
};

export default Feed;
