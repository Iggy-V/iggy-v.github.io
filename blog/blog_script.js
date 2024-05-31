document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { id: 1, title: 'EsyLearn - Talk to ChatGPT', description: 'A 2nd place winner in Education Category...', tags: ['Python', 'JavaScript', 'CSS', 'HTML'] },
        { id: 2, title: 'GitHub Profile', description: 'Show some support by following me on GitHub!', tags: ['Support', 'Author', 'VWG'] },
        { id: 3, title: 'YouTube Video Downloader', description: 'Download all opened YouTube links to prepare yourself for the scary life without internet.', tags: ['Python', 'PyTube', 'PyAutoGUI'] }
    ];

    const container = document.getElementById('portfolioContainer');
    projects.forEach(project => {
        let tagsHTML = project.tags.map(tag => `<span class="tag ${tag.toLowerCase()}" onclick="filterProjects('${tag}')">${tag}</span>`).join(' ');
        container.innerHTML += `<div class="projectBox" data-tags="${project.tags.join(',')}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagsHTML}</div>
        </div>`;
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

