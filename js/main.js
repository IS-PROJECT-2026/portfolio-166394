console.log("Portfolio site loaded");

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    project.classList.toggle('expanded');
  });
});