import { motion } from 'framer-motion';
import { FaGithub, FaBootstrap, FaJava, FaPython, FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaGit } from 'react-icons/fa';

function About() {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 transform -skew-y-6 z-0"></div>
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12">
              
              <div className="flex justify-center items-center flex-col sm:flex-row gap-12">
                <div className="space-y-6 w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold  text-blue-700 hover:text-blue-500 mb-8">About Me</h1>
                  <div className="prose prose-lg">
                    <p className="text-lg text-gray-600 leading-relaxed">
                    Hello! I’m a passionate frontend developer who loves turning ideas into smooth, interactive, and visually appealing digital experiences. With a strong foundation in web technologies, I focus on writing clean, efficient, and well-structured code to bring designs to life.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                    I believe that great code isn’t just about functionality—it should be simple, scalable, and easy to maintain. Every project I work on is an opportunity to create something meaningful, user-friendly, and impactful.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl text-white">
                  <h2 className="text-2xl font-bold mb-6">Professional Journey</h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-xl mb-2 font-semibold">Master of Computer Applications - MCA</h3>
                      <p className="text-accent">2023 - Present</p>
                      <p className="text-gray-300 mt-2">Mohanlal Sukhadia University, Udaipur</p>
                    </div>
                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-xl mb-2 font-semibold">Bachelor of Computer Applications - BCA</h3>
                      <p className="text-accent">2020 - 2023</p>
                      <p className="text-gray-300 mt-2">Vision Group of Colleges, Chittorgarh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl text-white"
                    >
                      <div className="text-4xl mb-2 text-accent">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;