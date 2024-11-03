import React from 'react';
import { BookOpen, Users, Star, TrendingUp, PlayCircle, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Instructors from './components/Instructors';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Instructors />
      <Footer />
    </div>
  );
}

export default App;