import { getInitials } from "@/utils/get-initials";
import Image from "next/image";

type UserAvatarProps = {
  avatar: string;
  name: string;
};

export function UserAvatar({ avatar, name }: UserAvatarProps) {
  if (!avatar) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
        <span className="text-sm font-medium leading-none text-white">
          {getInitials(name)}
        </span>
      </span>
    );
  }

  return (
    <div className="relative w-8 h-8 rounded-full">
      <Image
        src={avatar}
        fill
        alt="Imagem de perfil"
        className="object-cover rounded-full"
      />
    </div>
  );
}
