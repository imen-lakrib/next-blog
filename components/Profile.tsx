import Image from "next/image";
import ProfileBlogCard from "./ProfileBlogCard";
import { useSession } from "next-auth/react";
import SocialMedia from "./SocialMedia";

interface SocialMediaItem {
  id: string;
  name: string;
  link: string;
  icon: string;
}

interface Post {
  _id: string;
  image: string;
  title: string;
  description: string;
  tag: string;
  creator: {
    _id: string;
    image: string;
    email: string;
  };
  // Add other properties of the Post object here
}

interface ProfileProps {
  name: string | undefined;
  desc: string;
  data: Post[];
  handleEdit: (post: Post) => void;
  handleDelete: (post: Post) => void;
}

const socialmed: SocialMediaItem[] = [
  {
    id: "1",
    name: "facebook",
    link: "https://www.facebook.com",
    icon: "facebook",
  },
  {
    id: "2",
    name: "linkedin",
    link: "https://www.linkedin.com",
    icon: "linkedin",
  },
  {
    id: "3",
    name: "twitter",
    link: "https://www.twitter.com",
    icon: "twitter",
  },
  {
    id: "4",
    name: "youtube",
    link: "https://www.youtube.com",
    icon: "youtube",
  },
];

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  const { data: session } = useSession();
  const userImage = session?.user?.image ?? "./assets/images/logo.svg";
  return (
    <section className="">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
        <div className="md:col-span-1">
          <Image
            className="border-sky border-2 p-0 m-0 rounded-full"
            src={userImage}
            alt="Image"
            width={200}
            height={200}
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="sub_head_text">Hello Everyone!</h1>
          <h1 className="section_title ">
            <span className="blue_gradient">
              {`I'm ${name}, a lover of technology, business and experiencing new`}
              things
            </span>
          </h1>
          <div className="flex-start items-center justify-center">
            {" "}
            {socialmed.map((social) => {
              return (
                <SocialMedia
                  key={social.id}
                  icon={`/assets/images/${social.icon}.png`}
                  link={social.link}
                />
              );
            })}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <h1 className="section_title">{`Posted by ${name}`}</h1>
        <p className="section_sub_title">Exclusive author</p>
      </div>

      <div className="mt-20 grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-4 ">
        {data.map((post) => (
          <ProfileBlogCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
