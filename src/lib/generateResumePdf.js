import { jsPDF } from 'jspdf'

export function downloadResumePdf({ projects, certifications, skillGroups, strengths, internshipHighlights }) {
  const document = new jsPDF({ unit: 'mm', format: 'a4' })
  const pageWidth = document.internal.pageSize.getWidth()
  const pageHeight = document.internal.pageSize.getHeight()
  const margin = 17
  const contentWidth = pageWidth - margin * 2
  let y = 19

  document.setProperties({
    title: 'Pravish M - Resume',
    subject: 'Artificial Intelligence and Data Science',
    author: 'Pravish M',
  })

  function ensureSpace(height) {
    if (y + height > pageHeight - margin) {
      document.addPage()
      y = margin
    }
  }

  function addText(value, { size = 9, style = 'normal', color = [42, 51, 68], indent = 0, gap = 2 } = {}) {
    document.setFont('times', style)
    document.setFontSize(size)
    document.setTextColor(...color)
    const lines = document.splitTextToSize(String(value), contentWidth - indent)
    const lineHeight = size * 0.42
    ensureSpace(lines.length * lineHeight + gap)
    document.text(lines, margin + indent, y)
    y += lines.length * lineHeight + gap
  }

  function addSection(title) {
    y += 2
    ensureSpace(9)
    document.setFont('times', 'bold')
    document.setFontSize(11)
    document.setTextColor(88, 56, 174)
    document.text(title.toUpperCase(), margin, y)
    y += 2
    document.setDrawColor(201, 194, 222)
    document.line(margin, y, pageWidth - margin, y)
    y += 5
  }

  function addBullet(value) {
    addText(`- ${value}`, { size: 8.5, indent: 2, gap: 1.5 })
  }

  document.setFont('times', 'bold')
  document.setFontSize(24)
  document.setTextColor(24, 32, 51)
  document.text('PRAVISH M', margin, y)
  y += 7
  addText('AI & DATA SCIENCE STUDENT | DATA SCIENCE | AI/ML | GENERATIVE AI', {
    size: 10,
    style: 'bold',
    color: [88, 56, 174],
    gap: 3,
  })
  addText('Coimbatore, Tamil Nadu  |  pravishpika@gmail.com  |  +91 93618 54660', { size: 8.5, color: [80, 88, 103], gap: 1.5 })
  addText('linkedin.com/in/pravish-m-870820321  |  github.com/pravish-m', { size: 8.5, color: [80, 88, 103], gap: 3 })

  addSection('Professional Summary')
  addText(
    'Motivated Artificial Intelligence and Data Science student with hands-on experience in Generative AI, Machine Learning, Data Science, and AI application development. Skilled in Python, machine learning, Streamlit, API integration, prompt engineering, and LLM-based applications. Completed a Generative AI internship at Nandha Infotech, Coimbatore.',
    { size: 9, gap: 3 },
  )

  addSection('Education')
  addText('B.Tech - Artificial Intelligence & Data Science | United Institute of Technology, Coimbatore', { size: 9.5, style: 'bold', gap: 1.5 })
  addText('3rd Year  |  CGPA: 8.15  |  Class 10: 79%  |  Class 12: 79%', { size: 8.5, color: [80, 88, 103], gap: 2 })

  addSection('Internship Experience')
  addText('Generative AI Intern - Nandha Infotech, Coimbatore | June 2026 - July 2026', { size: 9.5, style: 'bold', gap: 2 })
  internshipHighlights.forEach(addBullet)

  addSection('Technical Skills')
  skillGroups.forEach(({ label, skills }) => {
    addText(`${label}: ${skills.join(', ')}`, { size: 8.5, gap: 1.5 })
  })

  addSection('Selected Projects')
  projects.forEach((project) => {
    addText(project.title, { size: 9.5, style: 'bold', gap: 1 })
    addText(project.description, { size: 8.5, gap: 1 })
    if (project.stack) addText(project.stack, { size: 8, color: [88, 56, 174], gap: 3 })
    if (project.href) addText(project.href, { size: 7.5, color: [88, 56, 174], gap: 3 })
  })

  addSection('Certifications & Training')
  certifications.forEach((certification) => {
    addBullet(certification.title)
    if (certification.href) addText(certification.href, { size: 7.5, color: [88, 56, 174], indent: 2, gap: 2 })
  })

  addSection('Core Strengths')
  addText(strengths.join('  |  '), { size: 8.5, gap: 3 })

  addSection('Career Interests')
  addText('Data Science  |  Machine Learning  |  AI/ML Engineering  |  Generative AI  |  AI Application Development  |  Data Analytics', { size: 8.5, gap: 1 })

  document.save('Pravish_M_Professional_Resume.pdf')
}