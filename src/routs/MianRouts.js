import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import Home from "../components/home/Home";
import Main from "../layout/Main";

 const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        errorElement:<ErrorPage/> ,
        children:[
            { path:"/",element:<Home></Home>},
            { path:"course",element:<Courses/>},
            { path:"blog",element:<Blog/>},
            { path:"faq",element:<Faq/>},
            { path:"login",element:<LoginForm/>},
            { path:"register",element:<RegisterForm/>},
            {
                path:"/course/:id",
                loader:({params})=>fetch(`https://course-arena-backend.vercel.app/catgories/${params.id}`),
                element:<CourseDetails/>
            }
           
        ]
        
    }
])

export default router;