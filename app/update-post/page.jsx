"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const UpdatePost = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const postId = searchParams.get("id")

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        title: "",
        decription: "",
        tag: "",
    });

    useEffect(() => {
        const getPostDetails = async () => {
            const response = await fetch(`/api/post/${postId}`)
            const data = await response.json()
            setPost({
                title: data.title,
                tag: data.tag,
                description: data.description
            });
        }
        if (postId) getPostDetails();

    }, [postId])



    const updatePost = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        if (!postId) return alert("Missing postId!");


        try {
            const response = await fetch(`/api/post/${postId}`, {
                method: "POST",
                body: JSON.stringify({
                    title: post.title,
                    decription: post.decription,
                    tag: post.tag,
                }),
            });


            console.log("test submission", response)

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <Form
            type="Update"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePost}
        />
    );
};

export default UpdatePost;
