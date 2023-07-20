import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-300 to-orange-500">
      <div className="text-white text-center mb-8">
        <h1 className="text-5xl font-bold">Welcome to Your Dashboard</h1>
        <p className="text-xl">
          Track your study progress, manage tasks, and access your recent study materials here.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Study Progress</h2>
          <p className="text-lg">You've completed 70% of your courses. Keep it up!</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Upcoming Tasks</h2>
          <ul className="text-lg">
            <li>Submit assignment by Friday</li>
            <li>Prepare for quiz on Monday</li>
            {/* Add more upcoming tasks here */}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Recent Study Materials</h2>
          <ul className="text-lg">
            <li>Mathematics Lecture Notes</li>
            <li>Physics Practice Problems</li>
            {/* Add more recent study materials here */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
