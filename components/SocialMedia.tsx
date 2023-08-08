import { SocialMediaItem } from "@types";
import Image from "next/image";





const SocialMedia = ({ icon, link }: SocialMediaItem) => {
  return (
    <div className="bg-text hover:bg-sky m-2 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
      <Image
        alt="image"
        src={icon}
        width={20}
        height={20}
        layout="fixed"
      />
    </div>
  );
};

export default SocialMedia;
