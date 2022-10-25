import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Faq from "../components/FAQ/Faq";
import LoginForm from "../components/Forms/LoginForm";
import Home from "../components/home/Home";
import Main from "../layout/Main";

 const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            { path:"/",element:<Home></Home>},
            { path:"course",element:<Home></Home>},
            { path:"blog",element:<Blog/>},
            { path:"faq",element:<Faq/>},
            { path:"login",element:<LoginForm/>},
           
        ]
        
    }
])

export default router;