import ReactDOM from 'react-dom/client'
import Home from './routes/Home';
import Journal from './routes/Journal'
import Contact from './routes/Contact';
import Admin from './routes/Admin';
import Blog from './routes/Blog';
import PostBlog from './routes/PostBlog';
import BlogPostDetailPage from './components/blog/BlogPostDetailPage';
import dotenv from "dotenv"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

dotenv.config();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin/post-journal",
    element: <Admin />,
  },
  {
    path: "/admin/post-blog",
    element: <PostBlog />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:blogPostId",
    element: <BlogPostDetailPage />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
