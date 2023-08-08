'use client'

import Link from "next/link";

import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles






const Form = ({ type, post, setPost, submitting, handleSubmit, image, setImage }) => {
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text_small "><span className="blue_gradient">{type} Post</span></h1>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-white'>
            Post Title
          </span>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type='text'
            placeholder='title'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-white'>
            Post Description
          </span>
          {/* <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          /> */}

          <ReactQuill
            value={post.description}
            onChange={(value) => setPost({ ...post, description: value })}
            placeholder='Write your post here'
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-white'>
            image url
          </span>

          {/* here upload btn */}

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              setImage({
                fileKey: res[0].fileKey,
                fileUrl: res[0].fileUrl,
              });
              alert("Upload Completed", res);
            }}
            onUploadError={(error) => {
              // Do something with the error.
              console.log("ERROR: ", error);

              alert(`ERROR! ${error.message}`);
            }}
          />
          {console.log("image", image)
          }
          <input
            value={image.fileUrl}
            onChange={(e) => setPost({ ...post, image: image.fileUrl })}
            type='text'
            placeholder='image url'
            required
            disabled={true}
            className='form_input'
          />




        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-white'>
            Field of Post{" "}

          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded outline_btn'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;