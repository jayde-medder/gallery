import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0 gap-4 p-24">
      <div className="flex flex-1 items-start justify-center">
        <img
          src={image.url}
          className="max-h-full max-w-full flex-shrink object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="border-b p-2 text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By: </span>
          <span>{uploaderInfo.firstName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On: </span>
          <span>{image.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
