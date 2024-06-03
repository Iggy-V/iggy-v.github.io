document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { id: 1, title: 'EsyLearn - Talk to ChatGPT', description: 'HooHacks 2023 Education Category Winner!', tags: ['Python', 'JavaScript', 'HTML-CSS'], url: 'projects/esylearn.html', image: '/assets/esyLearnPortfolio.png', isPersonalBest: true },
        { id: 3, title: 'YouTube Video Downloader', description: 'Download all opened YouTube links to prepare yourself for the scary life without internet.', tags: ['Python', 'PyTube', 'PyAutoGUI'], url: 'projects/ytDownloader.html', image: '/assets/ytDownloader.png', isPersonalBest: true},
        { id: 4, title: 'Automated Daily Email', description: 'Want to track your habbits? Need to know the upcoming weather? News? Also, a dog a day keeps the sadness away.', tags: ['Python', 'AWS', 'API', 'Email'], url: 'projects/automatedEmail.html', image: '/assets/exampleEmail.png', isPersonalBest: true},
        { id: 5, title: 'Rocket Mouse Video Game', description: 'A infinite runner video game written in TypeScript that utilizes Node.js. I followed a tutorial to complete this project and went further by implementing - power-ups.', tags: ['TypeScript', 'Video Game', 'Node.js'], url: 'https://github.com/Iggy-V/rocketMouseIV', image: '/assets/rocketmouse.png' },
        { id: 6, title: 'We Do That - Rediscover Community', description: 'Create, join and see the events surrounding you in your community. Connection has never been this easy!', tags: ['HTML-CSS', 'PHP', 'MySQL'], url: 'projects/weDoThat.html', image: '/assets/weDoThat.png', isPersonalBest: true},
        { id: 7, title: 'Picasso Project', description: 'Some say math and art are opposite, but I think it\'s their more similar than different. Find the beauty of the X and Y.', tags: ['Java'], url: 'projects/picassoProject.html', image: '/assets/picassoProject.png' },
        { id: 8, title: 'Three.js Landing Page', description: 'Some experimentation with the landing page for a website using Three.js', tags: ['Three.js', 'JavaScript'], url: 'https://github.com/Iggy-V/WebsiteLandingPage', image: '/assets/landingPage.png' },
        { id: 2, title: 'GitHub Profile', description: 'Show some support by following me on GitHub!', tags: [], url: 'https://github.com/Iggy-V'},

    ];

    const container = document.getElementById('portfolioContainer');
    projects.forEach(project => {
        let tagsHTML = project.tags.map(tag => `<span class="tag ${tag.toLowerCase()}" onclick="event.stopPropagation(); filterProjects('${tag}')">${tag}</span>`).join(' ');
        let imageHTML = project.image ? `<img src="${project.image}" alt="${project.title} image" class="project-image">` : '';
        let projectHTML = `<div class="projectBox ${project.image ? '' : 'no-image'}" data-tags="${project.tags.join(',')}" data-personal-best="${project.isPersonalBest || false}" onclick="window.location.href='${project.url}'">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagsHTML}</div><br>
            ${imageHTML}
        </div>`;
    
        container.innerHTML += projectHTML;
    });

    const showBestButton = document.getElementById('showBest');
    const showAllButton = document.getElementById('showAll');

    showBestButton.addEventListener('click', function() {
        document.querySelectorAll('.projectBox').forEach(box => {
            const isBest = JSON.parse(box.getAttribute('data-personal-best').toLowerCase());
            box.style.display = isBest ? '' : 'none';
        });
    });

    showAllButton.addEventListener('click', function() {
        document.querySelectorAll('.projectBox').forEach(box => {
            box.style.display = '';
        });
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

