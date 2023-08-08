import { Schema, models, model } from 'mongoose'

const BlogPostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      title: {
        type: String,
        required: [true, 'Title is required.'],
      },
      tag: {
        type: String,
        // required: [true, 'Tag is required.'],
      },
      description: {
        type: String,
        required: [true, 'Description is required.'],
      },
      image: {
        type: String,
        // required: [true, 'image is required.'],
      },
})

const BlogPost= models.BlogPost || model("BlogPost",BlogPostSchema)
export default BlogPost