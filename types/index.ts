import { MouseEventHandler } from "react";


export interface Image {
    fileKey: string;
    fileUrl: string;
  }

  export interface BlogCardProps {
    data: {
        _id: string;
      image: string;
      tag: string;
      title: string;
      description: string;
      creator: {
        _id: string;
        image: string;
        email: string;
      };
    };
  }

  export interface PostProps {
    _id: string;
    image: string;
    tag: string;
    title: string;
    description: string;
    creator: {
        _id: string;
      image: string;
      email: string;
    };
  }

  export interface ProviderData {
    id: string;
    name: string;
  }

  export interface SocialMediaItem {
    id?: string;
   
    name?: string;
    link?: string;
    icon: string;
  }
 

  export interface ProfileProps {
    name: string | undefined;
    desc?: string;
    data: PostProps[];
    img: string;
    handleEdit: (post: PostProps) => void;
    handleDelete: (post: PostProps) => void;
    loading: Boolean;
  }

  export interface ProfileBlogCardProps {
    post: PostProps;
    handleEdit: () => void;
    handleDelete: () => void;
  }

  export interface FeedProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }
  