import BlogPost from '@models/blogPost'
import { connentToDb } from "@utils/database";

export const POST = async (request) => {
    const { userId, title, tag , image, description} = await request.json();

    try {
        await connentToDb();
        const newPost = new BlogPost({ creator: userId, title, tag, image , description });
        console.log("new post", newPost);

        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response(error);
    }
}