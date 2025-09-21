import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Github, Linkedin, Download, Users, Code, Brain, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollPosition = window.scrollY + window.innerHeight / 2; // Mid-viewport position

      for (const sectionId in sectionRefs) {
        const ref = sectionRefs[sectionId];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const skills = {
    proficient: ['Python (PyTorch, TensorFlow)', 'Java', 'C++'],
    intermediate: ['Kotlin (TFLite)'],
    languages: ['English (Native)', 'Mandarin (Native)']
  }

  const projects = [
    {
      title: 'Image Generation Using Variational Autoencoders',
      period: 'January 2023 – August 2023',
      description: 'Built two different variational autoencoders to generate new images of hands and abstract paintings using TensorFlow. Organized and trained autoencoders on datasets of 10k and 18k images respectively.',
      technologies: ['TensorFlow', 'Python', 'VAE', 'Deep Learning'],
      type: 'Computer Vision',
      githubLink: '#', // Placeholder for user to add
    },
    {
      title: 'Music Generation LSTM',
      period: 'August 2022 – October 2022',
      description: 'Organized dataset of 1k+ piano MIDI files for training using NumPy and Pandas. Trained model using LSTM template from Keras to generate original piano compositions.',
      technologies: ['Keras', 'LSTM', 'NumPy', 'Pandas', 'MIDI'],
      type: 'AI/ML',
      githubLink: '#', // Placeholder for user to add
    },
    {
      title: 'Painting Classifier',
      period: 'January 2022 – March 2022',
      description: 'Built and trained a Convolutional Neural Network to classify paintings by seven different artists. Cleaned and organized 2k images of paintings with artist labels.',
      technologies: ['CNN', 'Python', 'Image Classification', 'Data Processing'],
      type: 'Computer Vision',
      githubLink: '#', // Placeholder for user to add
    }
  ]

  const experiences = [
    {
      title: 'Research Team Lead',
      organization: 'Purdue AIM',
      period: 'June 2025 - Present',
      description: 'Leading a team of 12 students for Purdue\'s AI4Musicians Evaluator Computer Vision team to create a real-time cellist posture evaluation mobile app. Finetuned YOLOv11 model for cellist postural recognition and classification, optimized model by reducing model & input size, increasing inference speed by 4x. Led the transfer from cloud inference to on-device inference, reducing latency by 2x.',
      skills: ['Leadership', 'PyTorch', 'TensorFlow', 'Kotlin', 'YOLO', 'Google Mediapipe'],
      type: 'Leadership & Research',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Teaching Assistant',
      organization: 'Saratoga High School',
      period: 'August 2023 – June 2024',
      description: 'Acted as TA for high school\'s AP Physics 1&2 course. Assisted in labs & demonstrations, answered questions, graded homework, labs & exams.',
      skills: ['Teaching', 'Physics', 'Communication', 'Mentoring'],
      type: 'Education',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Research Intern',
      organization: 'University of California, Santa Cruz',
      period: 'June 2023 – August 2023',
      description: 'Collaborated with 3 other high school interns to analyze misinformation diffusion methods on social media. Manually collected and classified ~200 posts from TikTok and Twitter, analyzed patterns in the methods through which misinformation was distributed on each platform.',
      skills: ['Data Analysis', 'Research', 'Social Media Analysis', 'Pattern Recognition'],
      type: 'Research',
      icon: <Brain className="w-5 h-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-800">Paolo Wang</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600 font-medium' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in">
              Paolo Wang
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fade-in-delay-1">
              Undergraduate Researcher
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
              Interested in artificial intelligence, computer vision, and adversarial machine learning. 
              Currently pursuing AI at Purdue University with a focus on real-world applications.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown 
              className="w-8 h-8 text-slate-400 mx-auto cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Background</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm currently pursuing a Bachelor of Science in Artificial Intelligence at Purdue University 
                with a GPA of 3.96, expected to graduate in May 2027. My passion lies in developing innovative 
                AI solutions that solve real-world problems, particularly in computer vision and machine learning.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As a Research Team Lead at Purdue AIM, I guide a team of 12 students in creating cutting-edge 
                applications that bridge the gap between academic research and practical implementation. 
                I believe in the power of collaborative innovation and continuous learning.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Skills & Technologies</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Proficient</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.proficient.map((skill, index) => (
                      <Badge key={index} variant="default" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Intermediate</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.intermediate.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={sectionRefs.experience} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-800">
                          {exp.title}
                        </CardTitle>
                        <p className="text-blue-600 font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{exp.type}</Badge>
                      <p className="text-sm text-slate-500 mt-1">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={sectionRefs.projects} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                    <span className="text-xs text-slate-500">{project.period}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Want to see more projects? Check out my GitHub for additional work and contributions.
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or innovative projects in AI and machine learning.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300">wang6601@purdue.edu</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Download className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Resume</h3>
                <p className="text-slate-300">Download my latest resume</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Paolo Wang. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
