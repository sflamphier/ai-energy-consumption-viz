import { Link } from "wouter";
import { BoltIcon, GithubIcon, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About This Project</h3>
            <p className="text-gray-300">
              This visualization project was created for an Information Visualization class to explore the energy consumption patterns of AI systems and their environmental impact.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Team</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Student Name</li>
              <li>Student Name</li>
              <li>Student Name</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Research Paper
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Data Sources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Methodology
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                <span>project@university.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <GithubIcon className="h-4 w-4" />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  github.com/project
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AI Energy Consumption Visualization Project | Information Visualization Class</p>
        </div>
      </div>
    </footer>
  );
}
