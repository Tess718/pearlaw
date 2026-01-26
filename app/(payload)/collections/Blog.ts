import type { CollectionConfig } from "payload";

interface BlogDoc {
  slug?: string | null;
}

const revalidateBlog = async (doc: BlogDoc) => {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) {
    return;
  }

  try {
    // Revalidate the blog listing
    await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?secret=${process.env.NEXT_PRIVATE_REVALIDATION_KEY}&path=/blog`,
      {
        method: "POST",
      },
    );

    // Revalidate the homepage (for "Recent Articles" section)
    await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?secret=${process.env.NEXT_PRIVATE_REVALIDATION_KEY}&path=/`,
      {
        method: "POST",
      },
    );

    // Revalidate the specific post
    if (doc.slug) {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?secret=${process.env.NEXT_PRIVATE_REVALIDATION_KEY}&path=/blog/${doc.slug}`,
        {
          method: "POST",
        },
      );
    }
  } catch (err) {
    console.error("Error revalidating:", err);
  }
};

export const Blog: CollectionConfig = {
  slug: "blog",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "publishedDate",
      type: "date",
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "practiceArea",
      type: "relationship",
      relationTo: "practice-areas",
      hasMany: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      label: "Excerpt",
    },
    {
      name: "content",
      type: "richText",
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc }) => {
        await revalidateBlog(doc);
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        await revalidateBlog(doc);
        return doc;
      },
    ],
  },
};
