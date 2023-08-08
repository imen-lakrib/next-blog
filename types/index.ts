import { MouseEventHandler } from "react";
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

  export interface BlogCardProps {
    data: {
        _id: string;
      image: string;
      tag: string;
      title: string;
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