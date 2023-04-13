
import NotFound from "../components/404";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage";
import UserPosts from "../pages/Posts";
import UserTodo from "../pages/TodosUsers";
import AddUser from "../pages/AddUser";

export const RootRoutes = [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '',
          element: <UsersPage />
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
            path: 'users/:userId',
            element: <UserPage />
        },
        {
            path: 'users/:userId/posts',
            element: <UserPosts/>
        },
        {
            path: 'users/:userId/todos',
            element: <UserTodo/>
        }
      ]
    },
  ]