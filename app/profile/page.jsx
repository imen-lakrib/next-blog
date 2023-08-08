"use client";
// logged in user
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  const userSession = session?.user ?? "any value"; // Use type assertion


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userSession.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
      setLoading(false)
    };

    if (userSession.id) fetchPosts();
  }, [userSession.id]);

  const handleEdit = (post) => {
    router.push(`/update-post?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    console.log("Deleting post:", post);
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);
        console.log("Filtered Posts:", filteredPosts);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userImage = session?.user?.image ?? "./assets/images/logo.svg";


  return (

    <Profile
    img={userImage}
    loading={loading}
      name="Hi!"
      desc='Welcome to your personalized profile page. Share your ideas and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
