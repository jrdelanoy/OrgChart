'use client'
import React from 'react'
// import { OrganizationalChart } from './OrganizationalChart.js'
import { BaseLayout } from '@/components/Layouts/BaseLayout'


const employees = [
  {
    id: 1,
    parentId: '',
    name: 'John',
    positionName: 'CEO',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    parentId: '1',
    name: 'Smith',
    positionName: 'COO',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
  },

  {
    id: 3,
    parentId: '1',
    name: 'Kate',
    positionName: 'CTO',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    parentId: '6',
    team: 'HR team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    parentId: '3',
    name: 'Erica',
    positionName: 'Manager of something',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 6,
    parentId: '3',
    name: 'Paul',
    positionName: 'Manager of something',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: 7,
    parentId: '5',
    team: 'Developers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 8,
    parentId: '3',
    name: 'Tony',
    positionName: 'Manager of something',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 9,
    parentId: '2',
    name: 'Sally',
    positionName: 'Manager of something',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: 10,
    parentId: '4',
    name: 'Scott',
    positionName: 'HR assistant',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
  },

  {
    id: 11,
    parentId: '1',
    name: 'James',
    positionName: 'CGO',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 12,
    parentId: '4',
    name: 'Tony',
    positionName: 'HR assistant',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 13,
    parentId: '4',
    name: 'Sally',
    positionName: 'HR assistant',
    phone: '99887766',
    email: 'employee@email.com',
    team: '',
    location: 'LA Branch',
    department: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
]

export default function App(props) {
  return (
    <BaseLayout
      title={'Account Access'}
      meta={{ name: 'Corporate', content: 'Directory' }}
    >
      {/* <OrganizationalChart data={employees} /> */}
    </BaseLayout>
  )
}
