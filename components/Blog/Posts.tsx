import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

//Icons
import { ArrowRight2 } from 'iconsax-react';

async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    `*[_type == "post"] | order(_createdAt desc){
      _id,
      title,
      slug,
      body,
      mainImage{ asset->{url} },
      author->{name, image},
      "commentCount": count(*[_type == "comment" && post._ref == ^._id && approved == true])
    }`
  );
}

export default async function Posts() {

  const posts = await getPosts()

  return (
    <main className="px-5 sm:px-10 md:px-20 xl:px-32 py-6">
      <h1 className='my-4 font-inter font-black text-2xl md:text-3xl xl:text-4xl'>Posts</h1>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <article key={post._id} className='p-2 border border-gray-300 rounded-3xl'>
            {post.mainImage?.asset?.url && (
              <div className='relative mb-4 w-full h-48 md:h-52 xl:h-56'>
                <Image src={post.mainImage.asset.url} alt={post.title} fill className="rounded-2xl" />
              </div>
            )}
            <section className="flex justify-end my-2">
              <div className='place-items-center grid bg-green-800 px-4 py-1 rounded-2xl font-semibold text-[10px] text-white md:text-xs xl:text-sm'>
                <p>{post.commentCount} Comments</p>
              </div>
            </section>
            <h2 className="mb-2 font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">{post.title}</h2>
            <PortableText value={post.body[0]} />
            <div className='flex justify-end mt-2'>
              <Link className='flex items-center gap-x-1 font-semibold text-green-800' href={`/blog/${post.slug.current}`}>Read more <ArrowRight2 size={18} color={"#166534"} variant='Bold' /></Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
