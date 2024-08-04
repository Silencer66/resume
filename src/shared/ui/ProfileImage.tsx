import Image, { StaticImageData } from "next/image";
import cn from "clsx";

interface ProfileImageProps {
    className?: string;
    image?: StaticImageData;
}

export const ProfileImage = (props: ProfileImageProps) => {
    const { image, className } = props;

    return (
        <div className={cn("w-1/6", className)}>
            <Image src={image!} alt="Icon" className="rounded-full" />
        </div>
    );
};
