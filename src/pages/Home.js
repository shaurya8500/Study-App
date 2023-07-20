import React from 'react'

const Home = ({isLoggedIn}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Study Notion</h1>
      <p className="text-xl mb-8">
        This is a study application that helps you organize and manage your study materials effectively.
      </p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 w-2/3">
      <h2 className="text-3xl font-bold mb-4">Study Resources</h2>
      <ul className="text-lg">
        <li>Interactive quizzes</li>
        <li>Study guides</li>
        <li>Flashcards</li>
        {/* Add more study resources here */}
      </ul>
    </div>

    <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600">
      Get Started
    </button>
  </div>
  )
}

export default Home
