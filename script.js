// Filter projects by category
const filterProjects = (category) => {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach((project) => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
};

// Add event listeners to navigation links
document.getElementById('all').addEventListener('click', () => filterProjects('all'));
document.getElementById('web').addEventListener('click', () => filterProjects('web'));
document.getElementById('design').addEventListener('click', () => filterProjects('design'));
document.getElementById('other').addEventListener('click', () => filterProjects('other'));

