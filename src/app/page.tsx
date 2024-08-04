import { db } from "~/server/db";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/61875c98-15bb-48ec-9e6c-91ebc3927859-6q3s3x.webp",
  "https://utfs.io/f/0e38a6f7-384a-444d-a647-5b31627b4ae5-uw751l.webp",
  "https://utfs.io/f/b7135ab1-1b45-4efb-b43b-33c7ea9305e3-sibasf.webp",
  "https://utfs.io/f/c88e97ce-11c9-4181-a74b-c670b0b87a3e-u3cohu.webp",
  "https://utfs.io/f/5f9a69c5-9455-44f5-9e51-5580af140cd7-clqrvu.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
