// import { MdLocalPizza as icon } from 'react-icons/md';
import { GiDeathJuice as icon } from 'react-icons/gi';
import PriceInput from '../components/PriceInput';

export default {
  name: 'skulls',
  title: 'Skulls',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Skull Name',
      type: 'string',
      description: 'Name of the Skull',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the skull in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      inputComponent: PriceInput,
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'options' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'options.0.name',
      topping1: 'options.1.name',
      topping2: 'options.2.name',
      topping3: 'options.3.name',
    },
    prepare: ({ title, media, ...options }) => {
      const opts = Object.values(options).filter(Boolean);
      return {
        title,
        media,
        subtitle: opts.join(', '),
      };
    },
  },
};
