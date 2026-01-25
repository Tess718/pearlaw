import React from "react";
import { getPayloadClient } from "@/lib/payload";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";

export default async function BlogListing() {
  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "blog",
    limit: 10,
    sort: "publishedDate",
    depth: 2,
  });

  return (
    <div className="bg-[#f0f1f5] min-h-screen pb-20">
      <div className="relative lg:h-[276px] h-[218px] w-full overflow-hidden mb-12 bg-blog">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex items-center flex-col gap-8 justify-center z-20">
          <h1 className="lg:text-5xl text-[14px] font-bold lg:text-white text-[#C84E26] tracking-wide">
            Blog
          </h1>
          <p
            className="font-bold hidden lg:block
             text-[20px] leading-[24px] tracking-normal text-center uppercase text-[#FFFFFFCC]"
          >
            caption aligned here
          </p>

          <p
            className="font-bold block lg:hidden
             text-[20px] leading-[24px] tracking-normal text-center text-[#FFFFFFCC]"
          >
            Stay updated with stories, articles in and around Pearlaw Corporate
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-12">
          {posts.docs.length === 0 ? (
            <p className="text-gray-500 text-lg">No posts found yet.</p>
          ) : (
            posts.docs.map((post) => (
              <div
                key={post.id}
                className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-96">
                  {post.coverImage &&
                  typeof post.coverImage !== "string" &&
                  post.coverImage.url ? (
                    <Image
                      src={post.coverImage.url}
                      alt={post.coverImage.alt || post.title}
                      fill
                      className="object-cover max-sm:rounded-t-[8px] max-sm:h-[328px]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="md:p-8 p-4">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="lg:text-3xl text-[16px] font-bold text-gray-900 mb-4 group-hover:text-[#C84E26] transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-6 leading-relaxed text-[14px]">
                    {post.excerpt ? post.excerpt : "Click to read more..."}
                  </p>

                  <div className="hidden md:block">
                    <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                      {post.publishedDate && (
                        <span>
                          {new Date(post.publishedDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" },
                          )}
                        </span>
                      )}
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>
                        {post.author && typeof post.author !== "string"
                          ? post.author.username ||
                            post.author.email ||
                            "Unknown"
                          : "Author"}
                      </span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>0 Comments</span>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                      {post.publishedDate && (
                        <span className="max-sm:col-span-2">
                          {new Date(post.publishedDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" },
                          )}
                        </span>
                      )}
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="max-sm:col-span-2">
                        {post.author && typeof post.author !== "string"
                          ? post.author.username ||
                            post.author.email ||
                            "Unknown"
                          : "Author"}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="max-sm:col-span-2">0 Comments</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-[#C84E26] text-white px-8 py-3 rounded font-semibold text-sm hover:bg-[#c26546] transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="pl-0 lg:pl-12">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
