const portfolioInfo = {
  about: "Balaji D is a motivated B.E. Computer Science student with a strong foundation in Java, Data Structures, and Full Stack Development. He's eager to apply problem-solving skills and technical knowledge to real-world projects.",
  skills: "Balaji's skills include: Java, JavaScript, HTML & CSS, C, C++, MySQL, Git, Data Structures & Algorithms, and Problem Solving.",
  projects: "Balaji has worked on: 1) Duty Chart - Excel-based data processing for duty allocation using Python and Tkinter. 2) Portfolio - A responsive personal portfolio website.",
  contact: "You can reach Balaji at: Email: balaji29102005@gmail.com | Location: Salem, Tamilnadu",
  education: "Balaji is pursuing B.E. in Computer Science.",
  experience: "Balaji is currently a student but has worked on projects like Duty Chart and Portfolio website."
};

function toggleChatbot() {
  const window = document.getElementById('chatbotWindow');
  window.classList.toggle('active');
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim().toLowerCase();
  
  if (!message) return;

  // Add user message
  addMessage(message, 'user');
  input.value = '';

  // Process and respond
  setTimeout(() => {
    const response = getResponse(message);
    addMessage(response, 'bot');
  }, 500);
}

function addMessage(text, type) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}-message`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getResponse(message) {
  if (message.includes('about') || message.includes('who') || message.includes('profile')) {
    return portfolioInfo.about;
  } else if (message.includes('skill') || message.includes('tech') || message.includes('technology')) {
    return portfolioInfo.skills;
  } else if (message.includes('project') || message.includes('work')) {
    return portfolioInfo.projects;
  } else if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return portfolioInfo.contact;
  } else if (message.includes('education') || message.includes('study') || message.includes('college')) {
    return portfolioInfo.education;
  } else if (message.includes('experience') || message.includes('internship') || message.includes('job')) {
    return portfolioInfo.experience;
  } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! Feel free to ask about Balaji's about, skills, projects, or contact info!";
  } else if (message.includes('thank')) {
    return "You're welcome! Let me know if you need any more information.";
  } else {
    return "I'm here to help! Ask me about Balaji's about, skills, projects, or contact information.";
  }
}
