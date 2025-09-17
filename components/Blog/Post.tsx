import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

//Utils
import { format } from "date-fns";
import { urlFor } from "@/sanity/lib/image";

//Component
import CommentForm from "./CommentForm"

async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      body,
      mainImage{ asset->{url} },
      author->{name, image},
      _createdAt,
      "comments": *[
        _type == "comment" && post._ref == ^._id && approved == true
      ] | order(_createdAt desc) {
        _id,
        name,
        comment,
        _createdAt
      }
    }`,
    { slug },
  );
}


const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      const src = urlFor(value).url()
      return (
        <div className="relative my-6 rounded-lg w-full h-96 overflow-hidden">
          <Image className="object-cover" src={src || "/placeholder.svg"} alt={value.alt || ""} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="mt-8 mb-4 font-bold text-4xl">{children}</h1>,
    h2: ({ children }: any) => <h2 className="mt-8 mb-4 font-bold text-3xl">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mt-6 mb-3 font-bold text-2xl">{children}</h3>,
    h4: ({ children }: any) => <h4 className="mt-4 mb-2 font-bold text-xl">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 pl-4 border-gray-200 border-l-4 italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="space-y-2 mb-4 pl-6 list-disc">{children}</ul>,
    number: ({ children }: any) => <ol className="space-y-2 mb-4 pl-6 list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-gray-700 leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="text-gray-700 leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <a href={value.href} rel={rel} className="text-blue-600 hover:underline">
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{children}</code>,
  },
}

const Post = async ({ slug }: { slug: string }) => {

  const post = await getPost(slug);

  return (
    <main className="mx-auto px-4 py-12 max-w-5xl">
      <article className="bg-white shadow-md rounded-2xl overflow-hidden">
        <div className="relative w-full h-[400px]">
          <Image src={post.mainImage.asset.url || "/placeholder.svg"} alt={post.title} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>

        <div className="p-4 md:p-6 xl:p-8">
          <h1 className="mb-4 font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl xl:text-4xl">{post.title}</h1>
          <div className="flex items-center space-x-4 mb-8">
            <div>
              <div className="flex items-center gap-x-1">
                {post.author.image && (
                  <div className="relative size-6 md:size-8 xl:size-10">
                    <Image src={urlFor(post.author.image).url()} alt={post.author.name} fill className="rounded-full object-cover" />
                  </div>
                )}
                <p className="font-medium text-gray-900">{post.author.name}</p>
              </div>
              {post._createdAt && (
                <p className="text-gray-500 text-sm"><span className="font-semibold text-black">Published At:</span> {format(new Date(post._createdAt), "MMMM dd, yyyy h:mm a")}</p>
              )}
            </div>
          </div>

          <div className="max-w-none prose">
            <PortableText value={post.body} components={ptComponents} />
          </div>

          {post.comments && post.comments.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="mb-6 font-bold text-2xl">Comments</h3>
              <div className="space-y-6">
                {post.comments.map((comment) => (
                  <div key={comment._id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-y-0.5">
                      <p className="font-medium text-gray-900">{comment.name}</p>
                      <p className="text-[10px] md:text-xs xl:text-sm">{format(new Date(comment._createdAt), "MMMM d, yyyy h:mm a")}</p>
                    </div>
                    <p className="mt-1 text-gray-700">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      <p className="my-6 font-semibold text-base md:text-lg xl:text-xl">Add comment</p>
      <CommentForm postId={post._id} slug={slug} />
    </main>
  )
}

export default Post
