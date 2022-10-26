import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const {title,image_url,details} = course
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="/" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0,40)}</p>
                <div className="card-actions justify-end">
                   <Link className='btn btn-primary' to={`/course/:${course.category_id}`}>Get Course</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;