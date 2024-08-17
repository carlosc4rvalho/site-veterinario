import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Admin from 'pages/Admin/Admin'
import NotFound from 'pages/NotFound/NotFound'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/admin', element: <Admin /> },
  { path: '*', element: <NotFound /> }
])

export default function App() {
  return <RouterProvider router={routes} />
}