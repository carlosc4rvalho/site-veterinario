import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from 'pages/Home/Home'
import NotFound from 'pages/NotFound/NotFound'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <NotFound /> }
])

export default function App() {
  return <RouterProvider router={routes} />
}