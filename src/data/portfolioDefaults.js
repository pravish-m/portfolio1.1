import profileImage from '../assets/profile.jpg'

export const defaultProfileImage = profileImage

export const defaultProjects = [
  {
    title: 'Customer Intelligence & Recommendations',
    description:
      'Analyze customer behavior, create useful segments, surface insights, and deliver personalized recommendations.',
    stack: 'Python / Pandas / Machine Learning / Streamlit',
    href: 'https://github.com/pravish-m/customer-intelligence-system',
  },
  {
    title: 'Student Placement Prediction & Skill Analysis',
    description:
      'Predict placement outcomes from academic, internship, project, and skill attributes, with student skill analysis.',
    stack: 'Python / Scikit-learn / Pandas / Streamlit',
    href: 'https://github.com/pravish-m/student_placement_prediction',
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'Extract resume information, identify skills, compare job requirements, and suggest missing qualifications.',
    stack: 'Python / Generative AI / NLP / Streamlit',
    href: 'https://github.com/pravish-m/ai-resume-analyzer-1256',
  },
  {
    title: 'AI Meeting Minutes Generator',
    description:
      'Turn meeting content into structured summaries, decisions, key points, and actionable follow-ups.',
    stack: 'Python / Generative AI / Streamlit',
    href: 'https://github.com/pravish-m/aimeeting',
  },
  {
    title: 'AI Research Paper Assistant',
    description:
      'Upload research PDFs for extraction, question answering, summaries, and key-point generation.',
    stack: 'Python / Gemini / LangChain / FAISS / Streamlit',
    href: 'https://github.com/pravish-m/AI-RESEARCH-PAPER-ASSISTANT',
  },
  {
    title: 'AI Interview Preparation Assistant',
    description:
      'Generate interview questions and sample answers by domain, difficulty, and preparation type.',
    stack: 'Python / Streamlit / Gemini',
    href: 'https://github.com/pravish-m/AI-INTERVIEW-PREPARATION-ASSISTANT',
  },
  {
    title: 'AI Learning Roadmap Generator',
    description:
      'Create skill-based learning roadmaps with levels, weekly plans, resources, projects, and interview preparation.',
    stack: 'Python / Streamlit / Gemini',
    href: 'https://github.com/pravish-m/AI-GENERATOR-APP',
  },
  {
    title: 'Football Player Prediction',
    description:
      'A football player image collection organized into Messi and Ronaldo folders for player recognition experiments.',
    stack: 'Football / Player image data',
    href: 'https://github.com/pravish-m/playerr-prediction',
  },
]

export const defaultCertifications = [
  { title: 'Generative AI Internship / Completion Certificate - Nandha Infotech' },
  { title: 'Data Science Certification / Course' },
  { title: 'Full Stack Development Internship Certificate - June-July 2026' },
]

export const defaultSkillGroups = [
  { label: 'Programming languages', skills: ['Python', 'C', 'HTML'] },
  { label: 'Data science', skills: ['NumPy', 'Pandas', 'Data cleaning', 'EDA', 'Data visualization', 'Statistics'] },
  { label: 'Machine learning', skills: ['Scikit-learn', 'Classification', 'Regression', 'Clustering', 'Model evaluation'] },
  { label: 'Generative AI', skills: ['LLMs', 'Prompt engineering', 'Gemini API', 'OpenAI API', 'LangChain'] },
  { label: 'Development', skills: ['Streamlit', 'API integration', 'AI chatbot development'] },
  { label: 'Tools', skills: ['VS Code', 'Git', 'GitHub', 'Google Colab'] },
]