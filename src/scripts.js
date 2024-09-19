const translations = {
  en: {
    name: "Jane Doe",
    headerDescription: "Computer Science Student | Germany",
    aboutTitle: "About Me",
    aboutDescription:
      "I am a computer science student currently studying in Germany. I was born in Rwanda and have a passion for technology, coding, and problem-solving.",
    skillsTitle: "Skills",
    skill1: "Programming (Java, Python, JavaScript)",
    skill2: "Web Development (HTML, CSS, React)",
    skill3: "Database Management (SQL, MongoDB)",
    skill4: "Machine Learning",
    skill5: "Problem Solving",
    projectsTitle: "Projects",
    project1Title: "Portfolio Website",
    project1Description:
      "A personal portfolio website to showcase my skills and projects.",
    project2Title: "Weather App",
    project2Description:
      "A simple weather application using open weather APIs to display current weather data.",
    project3Title: "E-commerce Platform",
    project3Description:
      "An online store built with React and Firebase to showcase e-commerce functionality.",
    contactTitle: "Contact Me",
    contactDescription:
      "If you'd like to get in touch, feel free to send me a message via email.",
    contactButton: "Send Email",
    footerText: "© 2024 Jane Doe. All rights reserved.",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  de: {
    name: "Jane Doe",
    headerDescription: "Informatikstudentin | Deutschland",
    aboutTitle: "Über mich",
    aboutDescription:
      "Ich bin Informatikstudentin, die derzeit in Deutschland studiert. Ich wurde in Ruanda geboren und habe eine Leidenschaft für Technologie, Programmierung und Problemlösung.",
    skillsTitle: "Fähigkeiten",
    skill1: "Programmierung (Java, Python, JavaScript)",
    skill2: "Webentwicklung (HTML, CSS, React)",
    skill3: "Datenbankmanagement (SQL, MongoDB)",
    skill4: "Maschinenlernen",
    skill5: "Problemlösung",
    projectsTitle: "Projekte",
    project1Title: "Portfolio-Website",
    project1Description:
      "Eine persönliche Portfolio-Website, um meine Fähigkeiten und Projekte zu präsentieren.",
    project2Title: "Wetter-App",
    project2Description:
      "Eine einfache Wetteranwendung, die offene Wetter-APIs verwendet, um aktuelle Wetterdaten anzuzeigen.",
    project3Title: "E-Commerce-Plattform",
    project3Description:
      "Ein Online-Shop, der mit React und Firebase entwickelt wurde, um die Funktionen des E-Commerce zu präsentieren.",
    contactTitle: "Kontaktieren Sie mich",
    contactDescription:
      "Wenn Sie in Kontakt treten möchten, können Sie mir gerne eine E-Mail senden.",
    contactButton: "E-Mail senden",
    footerText: "© 2024 Jane Doe. Alle Rechte vorbehalten.",
    about: "Um",
    skills: "Fähigkeiten",
    projects: "Projekte",
    contact: "Kontakt",
  },
};

let currentLanguage = "en";

function changeLanguage(language) {
  if (currentLanguage === language) return;
  currentLanguage = language;

  fadeOut(() => {
    updateContent(language);
    fadeIn();
  });
}

function updateContent(language) {
  document.getElementById("name").innerText = translations[language].name;
  document.getElementById("header-description").innerText =
    translations[language].headerDescription;
  document.getElementById("about-title").innerText =
    translations[language].aboutTitle;
  document.getElementById("about-description").innerText =
    translations[language].aboutDescription;
  document.getElementById("skills-title").innerText =
    translations[language].skillsTitle;
  document.getElementById("skill1").innerText = translations[language].skill1;
  document.getElementById("skill2").innerText = translations[language].skill2;
  document.getElementById("skill3").innerText = translations[language].skill3;
  document.getElementById("skill4").innerText = translations[language].skill4;
  document.getElementById("skill5").innerText = translations[language].skill5;
  document.getElementById("projects-title").innerText =
    translations[language].projectsTitle;
  document.getElementById("project1-title").innerText =
    translations[language].project1Title;
  document.getElementById("project1-description").innerText =
    translations[language].project1Description;
  document.getElementById("project2-title").innerText =
    translations[language].project2Title;
  document.getElementById("project2-description").innerText =
    translations[language].project2Description;
  document.getElementById("project3-title").innerText =
    translations[language].project3Title;
  document.getElementById("project3-description").innerText =
    translations[language].project3Description;
  document.getElementById("contact-title").innerText =
    translations[language].contactTitle;
  document.getElementById("contact-description").innerText =
    translations[language].contactDescription;
  document.getElementById("contact-button").innerText =
    translations[language].contactButton;
  document.getElementById("footer-text").innerText =
    translations[language].footerText;
  document.getElementById("about").innerText = translations[language].about;
  document.getElementById("skills").innerText = translations[language].skills;
  document.getElementById("projects").innerText =
    translations[language].projects;
  document.getElementById("contact").innerText = translations[language].contact;
}

function fadeOut(callback) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));
  setTimeout(callback, 500); // Wait for the fade-out to complete
}

function fadeIn() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.add("active"));
}

function scrollToSection(sectionId) {
  fadeOut(() => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    fadeIn();
  });
}
