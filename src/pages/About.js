import React from 'react'

const About = ({isLoggedIn}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-6">About Study Notion</h1>
      <p className="text-xl mb-8">
        Study Notion is a powerful study application designed to help students and learners
        organize and optimize their study materials and boost their learning experience.
      </p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 w-2/3">
      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg">
        Our mission is to provide an intuitive platform that enables learners to manage their
        study resources efficiently, stay focused, and achieve academic success.
      </p>
    </div>

    <button className="mt-8 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600">
      Learn More
    </button>
  </div>
  )
}

export default About
