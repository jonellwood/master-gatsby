import { check } from 'prettier';
// import { FaPepperHot as icon } from 'react-icons/fa';
import { GiApothecary as icon } from 'react-icons/gi';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'options',
  title: 'Options',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Options Name',
      type: 'string',
      description: 'Name of the name of the option?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Name of the name of the topping?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price to add the option in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      inputComponent: PriceInput,
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.vegetarian ? '🌱' : ''}`,
    }),
  },
};
