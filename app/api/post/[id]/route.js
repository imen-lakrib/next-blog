import BlogPost from "@models/blogPost";
import { connentToDb } from "@utils/database";

// get data:


export const GET = async (request, { params }) => {
    try {
        await connentToDb()

        const blogPost = await BlogPost.findById(params.id).populate('creator')
        if (!blogPost) return new Response("not found", { status: 404 })

        return new Response(JSON.stringify(blogPost), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch this blog Post", { status: 500 })
    }
};

// edit data:
export const POST = async(request, { params }) => {
    const { title, tag, description } = await request.json();
    try {
        await connentToDb()
        const existingPost = await BlogPost.findById(params.id)
        if (!existingPost) return new Response("not found", { status: 404 })
        existingPost.title = title
        existingPost.tag = tag
        existingPost.description = description
        await existingPost.save()
        return new Response(JSON.stringify(existingPost), { status: 200 })

    } catch (error) {
        return new Response("Failed to edit  blog Post", { status: 500 })
    }
}

// delete data:


export const DELETE = async (request, { params }) => {
    const { title, tag, description } = await request.json();
    try {
        await connentToDb()
        await BlogPost.findByIdAndRemove(params.id)
        
        return new Response("post deleted", { status: 200 })

    } catch (error) {
        return new Response("Failed to delete blog Post", { status: 500 })
    }
};