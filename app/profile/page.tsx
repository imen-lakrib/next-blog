"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  const userSession = (session as any)?.user ?? "any value"; // Use type assertion


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userSession.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (userSession.id) fetchPosts();
  }, [userSession.id]);

  const handleEdit = (post:any) => {
    router.push(`/update-post?id=${post._id}`);
  };

  const handleDelete = async (post:any) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (

    <Profile
      name={userSession.email?.split('@')[0]}
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
