import React from 'react';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    { name: 'Active Learners', value: '40K+', icon: Users },
    { name: 'Online Courses', value: '850+', icon: BookOpen },
    { name: 'Expert Instructors', value: '200+', icon: Award },
    { name: 'Success Rate', value: '95%', icon: TrendingUp },
  ];

  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-500">{stat.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;