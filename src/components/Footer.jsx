import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/Ashutosh-Bhanawat'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/Aashutosh-Bhanawat'
    },
    {
      name: 'Gmail',
      icon: <MdEmail className="w-6 h-6" />,
      url: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ashutoshbhanawat9876@gmail.com'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/ashuchobisa?igsh=MWJsb2NhZmsxdWwxcA=='
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200 hover:text-accent"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ashutosh Bhanawat. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;