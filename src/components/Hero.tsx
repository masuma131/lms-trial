import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <PlayCircle className="h-6 w-6 text-white" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Transform Your Future with Online Learning
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Access world-class education from anywhere. Learn from industry experts and join a global community of learners.
                </p>
                <div className="mt-8 flex space-x-4">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Start Learning
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Browse Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Learning platform interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;