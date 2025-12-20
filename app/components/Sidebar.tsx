import Link from 'next/link'
import Image from 'next/image'
import { Clock4, ClipboardList, Search } from 'lucide-react'
import { getPayloadClient } from '@/lib/payload'

// We will fetch data inside this component as it's a Server Component
export default async function Sidebar() {
  const payload = await getPayloadClient()

  const recentArticles = (await payload.find({
    collection: 'blog',
    limit: 3,
    sort: '-publishedDate',
  })).docs

  const popularTags = (await payload.find({
    collection: 'tags',
    limit: 10,
  })).docs

  const practiceAreas = (await payload.find({
    collection: 'practice-areas',
    limit: 10,
  })).docs

  return (
    <div className="space-y-12">
      {/* Recent Articles Widget */}
      <div>
       <div className='w-[40px] h-[3.5px] bg-[#C84E26] rounded-[3.5px] mb-4'/>

         <h3 className="text-heading-4-semibold capitalize text-[#2B2B2B] mb-8">Recent Articles</h3>
         <div className="space-y-6">
            {recentArticles.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="flex gap-4 group text-link-sidebar">
                 <div className="relative w-[139px] h-[120px] flex-shrink-0 bg-gray-200 overflow-hidden">
                   {post.coverImage && typeof post.coverImage !== 'string' && post.coverImage.url && (
                     <Image src={post.coverImage.url} alt="" fill className="object-cover" />
                   )}
                 </div>
                 
                 <div className='flex flex-col justify-between'>
                    <h4 className="font-bold text-gray-900 leading-tight group-hover:text-[#C84E26] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex gap-6 mt-3">
                     <p className="text-xs text-gray-500 flex items-center gap-2">
                       <Clock4 size={14} />
                       {post.publishedDate ? new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'No Date'}
                       <span className="mx-1"><ClipboardList size={14} /></span>
                       <span>{post.author && typeof post.author !== 'string' ? (post.author.username || 'Author') : 'Author'}</span>
                     </p>
                    </div>
                 </div>
              </Link>
            ))}
         </div>
      </div>

      {/* Tags Widget */}
      <div>
         <h3 className="text-heading-4-semibold capitalize text-[#2B2B2B] mb-6">Tags</h3>
         <div className="flex flex-wrap gap-2">
            {popularTags.map(tag => (
               <span key={tag.id} className="bg-[#C84E26CC] text-[#FEFEFE] text-tag text-center capitalize py-[14px] px-[20px] rounded-[4px]">
                 {tag.name}
               </span>
            ))}
         </div>
      </div>

      {/* Practice Areas Widget */}
      <div>
         <h3 className="text-heading-4-semibold capitalize text-[#2B2B2B] mb-4">Practice Areas</h3>
          <ul className="space-y-3">
            {practiceAreas.length > 0 ? practiceAreas.map((area, i) => (
              <li key={i} className='border-b-[0.5px] border-[#9695954D] pb-3'>
                <Link href="#" className="text-gray-700 hover:text-[#C84E26] text-sm font-medium transition-colors">
                  {area.title}
                </Link>
              </li>
            )) : <li className="text-gray-400 text-sm">No practice areas found.</li>}
          </ul>
      </div>
    </div>
  )
}
