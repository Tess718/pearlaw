import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'Username', 
      required: true,
      saveToJWT: true,
      admin: {
        description: 'Publicly displayed name for blog posts',
        position: 'sidebar',
      },
    },
  ],
}
