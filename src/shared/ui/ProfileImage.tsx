import Image, { StaticImageData } from "next/image";
import cn from "clsx";

interface ProfileImageProps {
    className?: string;
    image?: StaticImageData;
}

export const ProfileImage = (props: ProfileImageProps) => {
    const { image, className } = props;

    return (
        <Image
            src={image!}
            alt="Icon"
            className={cn("rounded-full", className)}
        />
    );
};
