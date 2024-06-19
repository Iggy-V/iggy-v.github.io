document.addEventListener('DOMContentLoaded', function() {
    const projects = [
    //     { id: 1, title: '1st Article', date: '2024-03-02', description: 'My Thoughts on ...', tags: ['Philosophy', 'Movies'], url: 'articles/article-one.html', image: '/assets/esyLearnPortfolio.png'},
    //     { id: 2, title: '2nd Article', date: '2024-03-02', description: 'My Thoughts on ...', tags: ['Movies'], url: 'projects/esylearn.html', image: '/assets/esyLearnPortfolio.png'},
    //     { id: 3, title: '3rd Article', date: '2024-03-05', description: 'Exploring the depths of ...', tags: ['Books', 'Philosophy'], url: 'projects/article3.html', image: '/assets/article3.png'},
    //     { id: 4, title: '4th Article', date: '2024-03-10', description: 'An analysis of ...', tags: ['Politics', 'Travel'], url: 'projects/article4.html', image: '/assets/article4.png'},
    //     { id: 5, title: '5th Article', date: '2024-03-12', description: 'The evolution of ...', tags: ['Travel', 'Movies'], url: 'projects/article5.html', image: '/assets/article5.png'},
    //     { id: 6, title: '6th Article', date: '2024-03-15', description: 'A critical review of ...', tags: ['Books', 'Coding'], url: 'projects/article6.html', image: '/assets/article6.png'},
    //     { id: 7, title: '7th Article', date: '2024-03-20', description: 'The future of ...', tags: ['Other'], url: 'projects/article7.html', image: '/assets/article7.png'},
    //
    ];

    const container = document.getElementById('portfolioContainer');
    projects.forEach(project => {
        let tagsHTML = project.tags.map(tag => `<span class="tag ${tag.toLowerCase()}" onclick="event.stopPropagation(); filterProjects('${tag}')">${tag}</span>`).join(' ');
        let imageHTML = project.image ? `<img src="${project.image}" alt="${project.title} image" class="project-image">` : '';
        let description = project.description.length > 150 ? project.description.substring(0, 147) + '...' : project.description;
        let projectHTML = `<div class="projectBox ${project.image ? '' : 'no-image'}" data-tags="${project.tags.join(',')}" onclick="window.location.href='${project.url}'">
            ${imageHTML}
            <h3 class="project-title">${project.title}</h3>
            <p class="project-date">${project.date}</p>
            <p class="project-description">${description} <a href="${project.url}" class="read-more">Read more &#x2192;</a></p>
            <hr>
            <div class="tags">${tagsHTML}</div><br>
        </div>`;
    
        container.innerHTML += projectHTML;
    });

    const showAllButton = document.getElementById('showAll');

    const topicSelect = document.getElementById('topicSelect');
    topicSelect.addEventListener('change', function() {
        const selectedTag = this.value.toLowerCase();
        document.querySelectorAll('.projectBox').forEach(box => {
            const tags = box.getAttribute('data-tags').toLowerCase();
            box.style.display = selectedTag === '' || tags.includes(selectedTag) ? '' : 'none';
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

