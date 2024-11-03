import React from 'react';

const instructors = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Web Development Expert',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: '15+ years of experience in full-stack development and teaching'
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Data Science Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    bio: 'Former Google AI researcher with PhD in Machine Learning'
  },
  {
    name: 'Emma Davis',
    role: 'Digital Marketing Strategist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    bio: 'Marketing consultant for Fortune 500 companies'
  },
  {
    name: 'James Wilson',
    role: 'UX Design Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    bio: '10+ years experience in product design and user research'
  }
];

const Instructors = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn from Industry Experts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our instructors are leading professionals in their fields with years of real-world experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={instructor.image}
                alt={instructor.name}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{instructor.name}</h3>
                <p className="text-sm text-indigo-600">{instructor.role}</p>
                <p className="mt-3 text-sm text-gray-500">{instructor.bio}</p>
                <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;