import { FC } from "react";
import { cn } from "../lib/utils";

interface ProfileCardProps {
  name?: string;
  imageUrl: string;
  gender: "Male" | "Female";
}

const ProfileCard: FC<ProfileCardProps> = ({
  name = "John Doe",
  imageUrl,
  gender,
}) => {
  return (
    <div className="bg-zinc-950/70 px-4 py-2 w-52 rounded-md flex items-center gap-x-2 hover:bg-zinc-950/80 cursor-pointer hover:scale-105 transition-all">
      <div className="w-12">
        <img src={imageUrl} alt={name} className="rounded-full w-full" />
      </div>
      <div className="text-white">
        <h1 className="font-semibold text-neutral-300">{name}</h1>
        <p
          className={cn(
            "text-sm",
            gender === "Male" ? "text-blue-600" : gender === "Female" ? "text-pink-600" : ""
          )}
        >
          {gender}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
