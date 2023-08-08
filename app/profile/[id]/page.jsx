"use client";
// any user
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const [userPosts, setUserPosts] = useState([]);

  const userName = userPosts.creator?.email


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        if (!response.ok) {
          setLoading(false)
          throw new Error("Failed to fetch user posts");
        }
        const data = await response.json();

        setUserPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error); // Set the error state if an error occurs
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchPosts();
    }
  }, [params.id]);

  return (

    <Profile
      loading={loading}
      img={userPosts[0]?.creator?.image}
      name={userPosts[0]?.creator?.email.split('@')[0]}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;