const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Navbar */}
      <header className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">CloudShare</a>
          <nav className="space-x-6">
            <a href="#home" className="text-white hover:text-blue-200">Home</a>
            <a href="#features" className="text-white hover:text-blue-200">Features</a>
            <a href="#pricing" className="text-white hover:text-blue-200">Pricing</a>
            <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20" id="home">
        <h1 className="text-4xl font-semibold mb-4">Welcome to CloudShare</h1>
        <p className="text-lg mb-6">Seamlessly store and share your files in the cloud. Anytime, anywhere.</p>
        <a href="#get-started" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">Get Started</a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">Fast Uploads</h3>
              <p className="text-gray-600">Upload your files in seconds and access them from anywhere.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">Secure Sharing</h3>
              <p className="text-gray-600">Share files securely with password protection and expiration dates.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">Cross-Platform Support</h3>
              <p className="text-gray-600">Access your files on any device, with real-time synchronization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Free Plan</h3>
              <p className="text-lg text-gray-600 mb-6">Up to 5GB of storage with basic sharing options.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full">Sign Up</button>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Pro Plan</h3>
              <p className="text-lg text-gray-600 mb-6">10GB of storage and advanced sharing features.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full">Sign Up</button>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Business Plan</h3>
              <p className="text-lg text-gray-600 mb-6">Unlimited storage with premium features for businesses.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 CloudShare. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
