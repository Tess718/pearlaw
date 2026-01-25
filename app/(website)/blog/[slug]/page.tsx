import React from "react";
import { getPayloadClient } from "@/lib/payload";
import { notFound } from "next/navigation";
import SerializeLexical from "@/app/components/SerializeLexical";
import Sidebar from "@/app/components/Sidebar";

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "blog",
    limit: 1000,
    depth: 0,
    select: {
      slug: true,
    },
  });

  return posts.docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "blog",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!result.docs.length) {
    notFound();
  }

  const post = result.docs[0];

  return (
    <div className="bg-white">
      <div className="relative w-full h-[218px] md:h-[276px] bg-blog">
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 container mx-auto px-4 flex flex-col max-sm:gap-10 justify-center items-center text-center z-10">
          <h1 className="lg:text-5xl text-[14px] font-bold lg:text-white text-[#C84E26] tracking-wide lg:hidden">
            Blog
          </h1>
          <h1 className="text-[20px] lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm md:text-base">
              {post.publishedDate && (
                <div className="flex items-center gap-2">
                  <span>
                    {new Date(post.publishedDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}

              {post.author && typeof post.author !== "string" && (
                <div className="flex items-center gap-2">
                  <span>
                    By {post.author.username || post.author.email || "Unknown"}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <span>0 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:py-16 py-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#D97757] [&_li>p]:list-none [&_li>p]:m-0">
              {post.content &&
                post.content.root &&
                post.content.root.children && (
                  <SerializeLexical nodes={post.content.root.children} />
                )}
            </div>
          </div>

          <div className="pl-0 lg:pl-12">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
