/* ==========================================
   PROJECT SCREENSHOTS
========================================== */

/*
import jobPortalVideo from '../assets/projects/videos/job-portal-demo.mp4'
import snapClassVideo from '../assets/projects/videos/snap-class-demo.mp4'
import neuralArtVideo from '../assets/projects/videos/neural-art-demo.mp4'
import wanderlustVideo from '../assets/projects/videos/wanderlust-demo.mp4'
import pacificToysVideo from '../assets/projects/videos/pacific-toys-demo.mp4'
import aiGymCoachVideo from '../assets/projects/videos/AI-Gym-Coach-demo.mp4'
*/

import jobPortalImage from '../assets/projects/job-portal.png'
import pacificToysImage from '../assets/projects/pacific-toys.png'
import wanderlustImage from '../assets/projects/wanderlust.png'

import snapclassImage from '../assets/projects/snapclass.png'
import neuralartImage from '../assets/projects/neuralart.png'
import aiGymCoachImage from '../assets/projects/ai-gym-coach.png'

export const projectsData = {

  /* ==========================================
     SOFTWARE DEVELOPMENT
  ========================================== */

  software: [

    {
      id: '01',

      title: 'Job Portal',

      subtitle: 'Full-Stack Recruitment Platform',

      description:
        'A full-stack recruitment platform connecting students and recruiters through role-based workflows. Students can discover and apply for jobs, while recruiters can manage companies, publish openings and review applicants.',

      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Redux',
        'Tailwind CSS',
        'REST API',
      ],

      category: 'FULL STACK',

      year: '2026',

      image: jobPortalImage,

      github: 'https://github.com/rajlaxmi12/Job_Portal',

      video: 'https://www.youtube.com/embed/6vcbCi76Rb4',
    },


    {
      id: '02',

      title: 'Pacific Toys',

      subtitle: 'Full-Stack Toy E-Commerce Platform',

      description:
        'A full-stack toy marketplace that allows users to explore products, view detailed listings, manage toy listings and securely access the platform through authentication.',

      technologies: [
        'Full Stack',
        'MVC',
        'Authentication',
        'Form Validation',
      ],

      category: 'E-COMMERCE',

      year: '2025',

      image: pacificToysImage,

      github: 'https://github.com/rajlaxmi12/pacific_toys',

      video: 'https://www.youtube.com/embed/_xgUNE3bNEA',
    },


    {
      id: '03',

      title: 'Wanderlust',

      subtitle: 'Travel Listing Platform',

      description:
        'A dynamic travel platform that allows users to discover destinations, explore detailed stays, create and manage listings, and securely access personalized functionality through authentication.',

      technologies: [
        'Web Development',
        'Authentication',
        'CRUD',
        'Form Validation',
      ],

      category: 'WEB APPLICATION',

      year: '2025',

      image: wanderlustImage,

      github: 'https://github.com/rajlaxmi12/wanderlust',

      video: 'https://www.youtube.com/embed/LR5v-54y0bg',
    },

  ],


  /* ==========================================
     AI / ML ENGINEERING
  ========================================== */

  ai: [

    {
      id: '01',

      title: 'SnapClass',

      subtitle: 'Intelligent AI Attendance System',

      description:
        'An intelligent attendance system combining face recognition and voice verification to automate classroom attendance using dual biometric verification.',

      technologies: [
        'Python',
        'Computer Vision',
        'Face Recognition',
        'Voice Recognition',
        'SVM',
        'Deep Learning',
        'SQL',
        'Streamlit',
      ],

      category: 'ARTIFICIAL INTELLIGENCE',

      year: '2026',

      image: snapclassImage,

      github: 'https://github.com/rajlaxmi12/SnapClass',

      video: 'https://www.youtube.com/embed/HMj6kUE-I6c',
    },


    {
      id: '02',

      title: 'NeuralArt',

      subtitle: 'Neural Style Transfer Platform',

      description:
        'An end-to-end Neural Style Transfer application that combines the content of one image with the artistic style of another using deep learning and a pre-trained VGG-19 network.',

      technologies: [
        'Python',
        'Deep Learning',
        'CNN',
        'VGG-19',
        'Neural Style Transfer',
        'Streamlit',
      ],

      category: 'DEEP LEARNING',

      year: '2026',

      image: neuralartImage,

      github: 'https://github.com/rajlaxmi12/NST',

      video: 'https://www.youtube.com/embed/9T62C180wwQ',
    },

    {
      id: '03',

      title: 'AI Gym Coach',

      subtitle: 'Real-Time AI Fitness Coach',

      description:
        'An intelligent computer-vision-based fitness coaching platform that analyzes exercise form, counts repetitions, detects movement errors, tracks workout metrics and provides real-time personalized AI coaching feedback.',

      technologies: [
        'Python',
        'MediaPipe',
        'OpenCV',
        'WebRTC',
        'Computer Vision',
        'Generative AI',
        'Pose Estimation',
      ],

      category: 'COMPUTER VISION',

      year: '2026',

      image: aiGymCoachImage,

      github: 'https://github.com/rajlaxmi12/AI_Gym_Coach',

      video: 'https://www.youtube.com/embed/oXWbsJ-iVw4',
    },

  ],

}