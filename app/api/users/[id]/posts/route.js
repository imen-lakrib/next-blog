import BlogPost from "@models/blogPost";
import { connentToDb } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connentToDb()

        const blogs = await BlogPost.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch blogs created by user", { status: 500 })
    }
} 