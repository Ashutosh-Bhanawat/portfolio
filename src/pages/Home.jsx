import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              Ashutosh Bhanawat
            </h1>
            <p className="text-xl text-gray-600">
              A passionate developer creating beautiful and functional web experiences
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-accent to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-shadow duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white shadow-2xl">
              <img
                src="/Ashu.jpg" // Replace with your photo URL
                alt="Ashutosh Bhanawat"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;