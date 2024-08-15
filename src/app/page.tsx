import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {images.map((image) => (
          <div key={image.id} className="flex max-h-fit max-w-fit flex-col">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={1000}
                height={1000}
                alt={image.name}
              />
            </Link>
            <div className="line-clamp-1 max-w-48 overflow-ellipsis">
              {image.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-xl">
          Please sign in to view
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
