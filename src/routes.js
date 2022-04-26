import React from 'react'

const Dashboard = React.lazy(() => import('./adminPanel/views/dashboard/Dashboard'))


const usersList = React.lazy(() => import('./adminPanel/views/users/list'))

const petsList = React.lazy(() => import('./adminPanel/views/pets/list'))
const petsAdd = React.lazy(() => import('./adminPanel/views/pets/add'))
const petEdit = React.lazy(() => import('./adminPanel/views/pets/edit'))

const categoriesList = React.lazy(() => import('./adminPanel/views/categories/list'))
const categoryAdd = React.lazy(() => import('./adminPanel/views/categories/add'))
const categoryEdit = React.lazy(() => import('./adminPanel/views/categories/edit'))

const routes = [

  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/user/list', name: 'users List', element: usersList },

  { path: '/pet/list', name: 'pets List', element: petsList },
  { path: '/pet/add', name: 'pets Add', element: petsAdd },
  { path: '/pet/edit/:id', name: 'pets Edit', element: petEdit },

  { path: '/category/list', name: 'Category List', element: categoriesList },
  { path: '/category/add', name: 'Category Add', element: categoryAdd },
  { path: '/category/edit/:id', name: 'Category Edit', element: categoryEdit },
  
]

export default routes