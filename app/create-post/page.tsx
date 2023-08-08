"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePost = () => {
  const [image, setImage] = useState({ fileKey: "", fileUrl: "" }); // Add this line

  const router = useRouter();
  const { data: session, status } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "", // Correct the spelling of 'description'
    tag: "",
  });

  const userSession = (session as any)?.user?.id ?? "any value"; // Use type assertion


  const createPost = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          description: post.description, // Correct the spelling of 'description'
          image: image.fileUrl, 
          userId: userSession,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "loading") {
    // Handle loading state
    return <div>Loading...</div>;
  }

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
      image={image} // Pass the image state to the Form component
      setImage={setImage} 
    />
  );
};

export default CreatePost;