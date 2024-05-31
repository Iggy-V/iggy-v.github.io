document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { id: 1, title: 'EsyLearn - Talk to ChatGPT', description: 'HooHacks 2023 Education Category Winner!', tags: ['Python', 'JavaScript', 'HTML-CSS'], url: 'projects/esylearn.html', image: '/assets/esyLearnPortfolio.png' },
        { id: 2, title: 'GitHub Profile', description: 'Show some support by following me on GitHub!', tags: [], url: 'https://github.com/Iggy-V'},
        { id: 3, title: 'YouTube Video Downloader', description: 'Download all opened YouTube links to prepare yourself for the scary life without internet.', tags: ['Python', 'PyTube', 'PyAutoGUI'], url: 'projects/ytDownloader.html', image: '/assets/ytDownloader.png' },
        { id: 4, title: 'Automated Daily Email', description: 'Want to track your habbits? Need to know the weather? News? Also, a dog a day keeps the sadness away.', tags: ['Python', 'AWS', 'API', 'Email'], url: 'projects/automatedEmail.html' },
        { id: 5, title: 'Rocket Mouse Video Game', description: 'Download all opened YouTube links to prepare yourself for the scary life without internet.', tags: ['TypeScript', 'Video Game', 'Node.js'], url: 'projects/rocketMouse.html', image: 'images/rocketMouse.png' },
        { id: 6, title: 'We Do That - Rediscover Community', description: 'Download all opened YouTube links to prepare yourself for the scary life without internet.', tags: ['HTML-CSS', 'PHP', 'MySQL'], url: 'projects/weDoThat.html' },
        { id: 7, title: 'Picasso Project', description: 'Download all opened YouTube links to prepare yourself for the scary life without internet.', tags: ['Java'], url: 'projects/picassoProject.html' },
        { id: 8, title: 'Three.js Landing Page', description: 'Download all opened YouTube links to prepare yourself for the scary life without internet.', tags: ['Three.js', 'JavaScript'], url: 'projects/landingPage.html', image: 'images/landingPage.png' }
    ];

    const container = document.getElementById('portfolioContainer');
    projects.forEach(project => {
        let tagsHTML = project.tags.map(tag => `<span class="tag ${tag.toLowerCase()}" onclick="event.stopPropagation(); filterProjects('${tag}')">${tag}</span>`).join(' ');
        let imageHTML = project.image ? `<img src="${project.image}" alt="${project.title} image" class="project-image">` : '';
        let projectHTML = `<div class="projectBox ${project.image ? '' : 'no-image'}" data-tags="${project.tags.join(',')}" onclick="window.location.href='${project.url}'">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagsHTML}</div><br>
            ${imageHTML}
        </div>`;

        container.innerHTML += projectHTML;
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        document.querySelectorAll('.projectBox').forEach(box => {
            const title = box.querySelector('h3').textContent.toLowerCase();
            const tags = box.querySelector('.tags').textContent.toLowerCase();
            box.style.display = title.includes(searchTerm) || tags.includes(searchTerm) ? '' : 'none';
        });
    });
    
});

function filterProjects(tag) {
    const searchTerm = tag.toLowerCase();
    document.querySelectorAll('.projectBox').forEach(box => {
        const tags = box.getAttribute('data-tags').toLowerCase();
        box.style.display = tags.includes(searchTerm) ? '' : 'none';
    });
    
}

