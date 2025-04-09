
document.addEventListener('DOMContentLoaded', () => {
    // Initialize skill level bars
    const skillItems = document.querySelectorAll('.skill-level');
    skillItems.forEach(item => {
        const level = item.getAttribute('data-level');
        const fillElement = item.querySelector('.skill-fill');
        if (fillElement) {
            // Start at 0 width and animate to the actual level
            fillElement.style.width = '0%';
            setTimeout(() => {
                fillElement.style.width = level + '%';
            }, 300);
        }
    });
});

// Set active navigation item
function setActiveNav(element) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    element.classList.add('active');
}

// Show skill detail
function showSkillDetail(element, skillName, description) {
    const detailContainer = document.getElementById('skill-detail');
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    
    if (detailContainer && detailTitle && detailDescription) {
        // Update content
        detailTitle.textContent = skillName;
        detailDescription.textContent = description;
        
        // Show the container
        detailContainer.classList.remove('hidden');
        
        // Highlight the selected skill
        document.querySelectorAll('.skill-item').forEach(item => {
            item.style.borderColor = '';
        });
        element.style.borderColor = 'var(--primary-color)';
    }
}

// Toggle project details
function toggleProjectDetails(element) {
    const details = element.querySelector('.project-details');
    if (details) {
        details.classList.toggle('hidden');
    }
}

// Toggle experience details
function toggleExperienceDetails(element) {
    const details = element.querySelector('.timeline-details');
    if (details) {
        details.classList.toggle('hidden');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Initialize skill level bars
    const skillItems = document.querySelectorAll('.skill-level');
    skillItems.forEach(item => {
        const level = item.getAttribute('data-level');
        const fillElement = item.querySelector('.skill-fill');
        if (fillElement) {
            // Start at 0 width and animate to the actual level
            fillElement.style.width = '0%';
            setTimeout(() => {
                fillElement.style.width = level + '%';
            }, 300);
        }
    });
});

// Set active navigation item
function setActiveNav(element) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    element.classList.add('active');
}

// Show skill detail
function showSkillDetail(element, skillName, description) {
    const detailContainer = document.getElementById('skill-detail');
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    
    if (detailContainer && detailTitle && detailDescription) {
        // Update content
        detailTitle.textContent = skillName;
        detailDescription.textContent = description;
        
        // Show the container
        detailContainer.classList.remove('hidden');
        
        // Highlight the selected skill
        document.querySelectorAll('.skill-item').forEach(item => {
            item.style.borderColor = '';
        });
        element.style.borderColor = 'var(--primary-color)';
    }
}document.addEventListener('DOMContentLoaded', () => {
    // Initialize skill level bars
    const skillItems = document.querySelectorAll('.skill-level');
    skillItems.forEach(item => {
        const level = item.getAttribute('data-level');
        const fillElement = item.querySelector('.skill-fill');
        if (fillElement) {
            // Start at 0 width and animate to the actual level
            fillElement.style.width = '0%';
            setTimeout(() => {
                fillElement.style.width = level + '%';
            }, 300);
        }
    });
});

// Set active navigation item
function setActiveNav(element) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    element.classList.add('active');
}

// Show skill detail
function showSkillDetail(element, skillName, description) {
    const detailContainer = document.getElementById('skill-detail');
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    
    if (detailContainer && detailTitle && detailDescription) {
        // Update content
        detailTitle.textContent = skillName;
        detailDescription.textContent = description;
        
        // Show the container
        detailContainer.classList.remove('hidden');
        
        // Highlight the selected skill
        document.querySelectorAll('.skill-item').forEach(item => {
            item.style.borderColor = '';
        });
        element.style.borderColor = 'var(--primary-color)';
    }
}

// Open project modal with details
function openProjectModal(element) {
    const details = element.querySelector('.project-details');
    if (!details) return;
    
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const codeLink = document.getElementById('code-link');
    
    // Get data from the project details
    const title = details.getAttribute('data-title');
    const repoLink = details.getAttribute('data-code-link');
    const content = details.innerHTML;
    
    // Set modal content
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    codeLink.href = repoLink;
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Add event listener to close when clicking outside the modal
    window.addEventListener('click', closeOnOutsideClick);
}

// Close modal when clicking outside
function closeOnOutsideClick(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    
    // Remove outside click event listener
    window.removeEventListener('click', closeOnOutsideClick);
}

// Toggle experience details
function toggleExperienceDetails(element) {
    const details = element.querySelector('.timeline-details');
    if (details) {
        details.classList.toggle('hidden');
    }
}
