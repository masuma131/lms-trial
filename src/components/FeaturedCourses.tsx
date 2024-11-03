import React from 'react';
import { Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Web Development Masterclass',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 15430,
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    instructor: 'Michael Chen',
    rating: 4.8,
    students: 12250,
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'Digital Marketing Strategy',
    instructor: 'Emma Davis',
    rating: 4.7,
    students: 8920,
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80'
  }
];

const FeaturedCourses = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Courses</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our most popular courses and start your learning journey today.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{course.title}</p>
                  <p className="mt-3 text-base text-gray-500">{course.instructor}</p>
                  <div className="mt-3 flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;