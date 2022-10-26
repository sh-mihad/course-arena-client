import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {

    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch("https://course-arena-backend.vercel.app/catgories")
        .then(result=>result.json())
        .then(data=>{setCategories(data);})
    },[])

    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://course-arena-backend.vercel.app/course')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className='flex w-full  bg-slate-200'> 
          <div className=' bg-white w-2/5 lg:w-3/12 pt-4 '>
            {
                categories.map(category=><p className='mx-3 my-5 ml-5 hover:text-red-600  text-gray-800 font-semibold' key={category.id}><Link  to={`/course/${category.id}`} >{category.name}</Link></p>)
            }
          </div>
          <div className=' p-5 w-full grid  lg:grid-cols-3 gap-4'>
           {
               courses.map(course=><CourseCard course={course} key={course._id}></CourseCard>)
           }
          </div>
        </div>
    );
};

export default Courses;