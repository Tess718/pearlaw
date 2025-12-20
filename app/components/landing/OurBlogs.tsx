import { getPayloadClient } from '@/lib/payload'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default async function OurBlogs() {
  const payload = await getPayloadClient()

  const posts = await payload.find({
    collection: 'blog',
    limit: 3,
    sort: '-publishedDate',
  })

  return (
    <section className="py-24 bg-[#f0f1f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-[#2B2B2B99] text-subtitle-1 tracking-wide mb-2">OUR BLOGS</span>
          <h2 className="text-[#333333] text-heading-2-semibold md:text-[40px] mb-6 text-center">Recent Articles</h2>
          <div className="h-[24px] w-[2px] bg-[#C84E26]"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.docs.map((post) => (
            <div key={post.id} className="flex flex-col gap-10 group cursor-pointer bg-white rounded-[8px]">
              {/* Image Container */}
              <div className="relative w-full h-[348px] rounded-t-[8px] overflow-hidden">
                {post.coverImage && typeof post.coverImage !== 'string' && post.coverImage.url ? (
                  <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                   </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col grow bg-white px-8 rounded-b-[8px]">
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-[#2B2B2B] text-title-blog mb-4 group-hover:text-[#C84E26] transition-colors line-clamp-2">
                    {post.title}
                    </h3>
                </Link>
                
                {/* Metadata */}
                <div className="flex items-center justify-between text-[#2B2B2BCC] text-sm mt-auto pb-16">
                    {post.publishedDate && (
                        <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    )}
                    <span className="mx-2">.</span>
                    <span>{post.author && typeof post.author !== 'string' ? (post.author.username || 'Author') : 'Author'}</span>
                    <span className="mx-2">.</span>
                    <span>4 comment</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <Link 
                href="/blog" 
                className="inline-flex justify-center items-center bg-[#C84E26] text-white px-8 py-4 rounded-[4px] text-btn-small hover:bg-[#b04320] transition-colors"
            >
                Read the Blog <span className="ml-0.5"> <ArrowRight size={12} /></span>
            </Link>
        </div>
      </div>
    </section>
  )
}
