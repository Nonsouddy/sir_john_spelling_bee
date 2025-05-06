import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import CommentForm from './CommentForm';

async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      body,
      mainImage{
        asset->{url}
      },
      "comments": *[_type == "comment" && post._ref == ^._id && approved == true]{
        _id, name, comment
      }
    }`
  )
}

export default async function Posts() {
  
  const posts = await getPosts()

  return (
    <main className="space-y-10 p-6">
      {posts.map(post => (
        <article key={post._id} className="shadow p-4 border rounded">
          <h2 className="mb-2 font-semibold text-2xl">{post.title}</h2>
          {post.mainImage?.asset?.url && (
            <Image src={post.mainImage.asset.url} alt={post.title} width={600} height={400} className="relative mb-4 rounded" />
          )}
          <PortableText value={post.body} />

          <h3 className="mt-6 font-bold text-lg">Comments</h3>
          <ul className="mb-4">
            {post.comments?.map(comment => (
              <li key={comment._id} className="py-2 border-b">
                <strong>{comment.name}:</strong> {comment.comment}
              </li>
            ))}
          </ul>

          <CommentForm postId={post._id} />
        </article>
      ))}
    </main>
  )
}
