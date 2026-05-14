// Show Section Function
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
};
// window load event to show the default section
window.onload = function() {
  showSection('addStudents'); // Show the Add Student section by default
};