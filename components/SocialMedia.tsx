import Image from "next/image";


interface SocialMediaProps {
  icon: string;
  link: string;
}


const SocialMedia = ({ icon, link }: SocialMediaProps) => {
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
