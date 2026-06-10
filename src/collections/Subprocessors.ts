import type { CollectionConfig } from 'payload'

export const Subprocessors: CollectionConfig = {
  slug: 'subprocessors',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        'Engineering',
        'Infrastructure',
        'Marketing',
        'Business tools',
        'Analytics & data',
        'Operations'
      ],
      required: true,
    },
    {
      name: 'activities',
      type: 'text',
      required: true,
    },
  ],
}
