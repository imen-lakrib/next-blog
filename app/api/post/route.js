import BlogPost from "@models/blogPost";
import { connentToDb } from "@utils/database";

export const GET = async (request) => {
    try {
        await connentToDb()

        const blogPosts = await BlogPost.find({}).populate('creator')

        return new Response(JSON.stringify(blogPosts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all blog Posts", { status: 500 })
    }
} 