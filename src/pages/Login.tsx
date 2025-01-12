const Login = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">

            {/* CloudShare Logo */}
            <div className="text-center mb-8">
                <img src="https://via.placeholder.com/150?text=CloudShare" alt="CloudShare Logo" className="mx-auto mb-4" />
                <h1 className="text-4xl font-semibold text-gray-900">Welcome Back to CloudShare</h1>
                <p className="text-lg text-gray-600 mt-2">Sign in to your account</p>
            </div>

            {/* Login Form */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-200"
                    >
                        Log In
                    </button>
                </form>

                <div className="text-center mt-4 text-gray-600">
                    <p>Or</p>
                </div>

                {/* Social Login Options */}
                <div className="mt-6 flex justify-center space-x-4">
                    {/* Google Login */}
                    <button className="flex items-center bg-white border border-gray-300 px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                        <img src="https://via.placeholder.com/20?text=G" alt="Google Logo" className="mr-2" />
                        <span>Login with Google</span>
                    </button>

                    {/* Apple Login */}
                    <button className="flex items-center bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition duration-200">
                        <img src="https://via.placeholder.com/20?text=A" alt="Apple Logo" className="mr-2" />
                        <span>Login with Apple</span>
                    </button>
                </div>
            </div>

            <footer className="mt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2025 CloudShare. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Login;