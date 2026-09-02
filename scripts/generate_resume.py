from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.units import mm
import os

out_path = r"C:\Users\AKSHAY R\OneDrive\Desktop\portfolio\Anagha_CR_Resume_updated.pdf"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Heading', fontSize=12, leading=14, spaceAfter=6, spaceBefore=6, fontName='Helvetica-Bold'))
styles.add(ParagraphStyle(name='NormalSmall', fontSize=10, leading=12, spaceAfter=4))
styles.add(ParagraphStyle(name='Contact', fontSize=9, leading=11))

content = []

content.append(Paragraph('ANAGHA C R', styles['Heading']))
content.append(Paragraph('BCA (AI Specialization)', styles['NormalSmall']))
content.append(Spacer(1,4))
content.append(Paragraph('Thrissur, Kerala | +91 9037462782 | <a href="mailto:anagacty@gmail.com">anagacty@gmail.com</a> | <a href="https://www.linkedin.com/in/anagha-c-r/">linkedin.com/in/anagha-c-r</a>', styles['Contact']))
content.append(Spacer(1,8))

content.append(Paragraph('PROFESSIONAL SUMMARY', styles['Heading']))
summary = (
    'BCA graduate specializing in AI, with hands-on experience in data analytics, Python, SQL, Excel, and Power BI. '
    'Skilled in data cleaning, exploratory analysis, and dashboard development through a Data Analytics internship. Seeking an entry-level IT role to apply technical and analytical skills.'
)
content.append(Paragraph(summary, styles['NormalSmall']))

content.append(Paragraph('TECHNICAL SKILLS', styles['Heading']))
skills_lines = [
    'Data Analysis Tools: Microsoft Excel (Pivot Tables, VLOOKUP, Data Cleaning, Dashboards)',
    'Power BI (Power Query, DAX, Data Modeling)',
    'Programming: Python (Pandas, NumPy), C, C++, Java',
    'Database: SQL, MySQL — querying, joins, aggregation',
    'Web Technologies: HTML, CSS, JavaScript (Basic)',
    'Tools & Platforms: VS Code, Git (Basic), MS Office'
]
for line in skills_lines:
    content.append(Paragraph(line, styles['NormalSmall']))

content.append(Spacer(1,6))

content.append(Paragraph('INTERNSHIP EXPERIENCE', styles['Heading']))
content.append(Paragraph('Data Analytics Intern — SMEC Technologies  Feb 2026 – Mar 2026', styles['NormalSmall']))

bullets = [
 'Cleaned and preprocessed raw datasets using Excel and Python (Pandas), improving data accuracy and consistency for analysis.',
 'Built interactive dashboards and visualizations in Power BI/Excel to track key metrics and support data-driven decision-making.',
 'Performed exploratory data analysis to identify trends and patterns, presenting findings in structured reports to stakeholders.',
 'Applied SQL queries to extract and aggregate data from relational databases for reporting purposes.'
]
for b in bullets:
    content.append(Paragraph(u'• ' + b, styles['NormalSmall']))

content.append(Spacer(1,6))

content.append(Paragraph('PROJECTS', styles['Heading']))
content.append(Paragraph('Pathology Viewer — Web-Based Image Analysis Platform (Krupanidhi Degree College)', styles['NormalSmall']))
content.append(Paragraph('Built a full-stack web application using Python (Flask), HTML, CSS, and JavaScript to upload, manage, and analyze high-resolution medical slide images, with JSON-based data storage. Integrated OpenSeadragon for deep-zoom image viewing, with session-based authentication, thumbnail generation, and an annotation API for marking regions of interest. Designed an intuitive interface to present processed image data and analysis results to end users.', styles['NormalSmall']))
content.append(Spacer(1,4))

# New project
content.append(Paragraph('Career Growth Suite — Job Application Tracker', styles['NormalSmall']))
content.append(Paragraph('Developed a full-stack job application tracking platform that helps users manage and organize job applications. Implemented user registration and authentication, application management, status tracking, dashboard visualization, and resume skill extraction from PDF and DOCX files. Integrated a React frontend with a Flask backend and MySQL database.', styles['NormalSmall']))
content.append(Paragraph('Technologies: React.js, JavaScript, Vite, Python, Flask, MySQL, REST API', styles['NormalSmall']))
content.append(Paragraph('<a href="https://github.com/anagha310805/career-growth-suite">GitHub: https://github.com/anagha310805/career-growth-suite</a>', styles['NormalSmall']))

content.append(Spacer(1,6))
content.append(Paragraph('EDUCATION', styles['Heading']))
for l in ['Bachelor of Computer Applications (BCA) — AI Specialization, Krupanidhi Degree College, Bangalore 2023 – 2026','Pre-University Course (PUC), GHSS Cheruthuruthy, Thrissur, Kerala 2021 – 2023','SSLC (10th), GHSS Cheruthuruthy, Thrissur, Kerala 2020 – 2021']:
    content.append(Paragraph(l, styles['NormalSmall']))

content.append(Spacer(1,6))
content.append(Paragraph('CERTIFICATIONS', styles['Heading']))
for c in ['IBM — Artificial Intelligence Analyst (2024)','Simplilearn — Introduction to AI (2025)','SMEC Technologies — Data Analytics (Internship Certification)']:
    content.append(Paragraph(c, styles['NormalSmall']))

content.append(Spacer(1,6))
content.append(Paragraph('LANGUAGES', styles['Heading']))
content.append(Paragraph('English | Malayalam | Tamil', styles['NormalSmall']))

os.makedirs(os.path.dirname(out_path), exist_ok=True)
doc = SimpleDocTemplate(out_path, pagesize=A4, rightMargin=20*mm, leftMargin=20*mm, topMargin=15*mm, bottomMargin=15*mm)
doc.build(content)
print(out_path)
