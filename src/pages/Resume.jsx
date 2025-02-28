import { motion } from 'framer-motion';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Resume() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 hover:text-blue-500">Resume</h1>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              download
              className="bg-gradient-to-r from-accent to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              Download PDF
            </motion.a>
          </div>

              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl="/Resume.pdf" />
              </Worker>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
