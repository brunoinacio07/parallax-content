const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to TaskList Pro</h1>
        <p className="text-gray-600 mb-6">
          Enter your email address to get started
        </p>
        <div className="mb-4">
          <input
            type="email"
            placeholder="name@yourcompany.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-4">
          Continue with Email
        </button>
        <p className="text-gray-600 mb-4 text-center">OR</p>
        <div className="mb-4">
          <button className="bg-white border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300 w-full">
            Continue with Google
          </button>
        </div>
        <div className="mb-4">
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full">
            Continue with Apple
          </button>
        </div>
        <p className="text-blue-500 hover:underline cursor-pointer">
          Already have an account? Sign In
        </p>
      </div>
    </div>
  )
}

export default WelcomeScreen
