document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { id: 1, title: '1st Article', date: '20xx-xx-xx', description: 'My Thoughts on ...', tags: ['Philosophy', 'Movies'], url: '', image: '/assets/work-in-progress.png'},
        { id: 2, title: '2nd Article', date: '20xx-xx-xx', description: 'My Thoughts on ...', tags: ['Movies', 'Travels'], url: '', image: '/assets/work-in-progress.png'},
        { id: 3, title: '3rd Article', date: '20xx-xx-xx', description: 'Exploring the depths of ...', tags: ['Books', 'Philosophy'], url: '', image: '/assets/work-in-progress.png'},

    
    ];

    const container = document.getElementById('portfolioContainer');
    projects.forEach(project => {
        let tagsHTML = project.tags.map(tag => `<span class="tag ${tag.toLowerCase()}" onclick="event.stopPropagation(); filterProjects('${tag}')">${tag}</span>`).join(' ');
        let imageHTML = project.image ? `<img src="${project.image}" alt="${project.title} image" class="project-image">` : '';
        let projectHTML = `<div class="projectBox ${project.image ? '' : 'no-image'}" data-tags="${project.tags.join(',')}"  onclick="window.location.href='${project.url}'">
            ${imageHTML}
            <h3 class="project-title">${project.title}</h3>
            <p class="project-date">${project.date}</p>
            <p class="project-description">${project.description.substring(0, 150)}${project.description.length > 150 ? '...' : ''} <a href="${project.url}" class="read-more">Read more &rarr;</a></p>
            <hr>
            <div class="tags">${tagsHTML}</div><br>
        </div>`;
    
        container.innerHTML += projectHTML;
    });

    const showAllButton = document.getElementById('showAll');
    const topicTags = document.querySelectorAll('.topic-tag');

    topicTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('selected');
            filterProjectsByTags();
        });
    });

    showAllButton.addEventListener('click', function() {
        document.querySelectorAll('.projectBox').forEach(box => {
            box.style.display = '';
        });
        topicTags.forEach(tag => {
            tag.classList.remove('selected');
        });
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function() {
        filterProjectsBySearch();
    });

    function filterProjectsByTags() {
        const selectedTags = Array.from(document.querySelectorAll('.topic-tag.selected')).map(tag => tag.getAttribute('data-topic').toLowerCase());
        document.querySelectorAll('.projectBox').forEach(box => {
            const tags = box.getAttribute('data-tags').toLowerCase().split(',');
            const matches = selectedTags.every(tag => tags.includes(tag));
            box.style.display = matches || selectedTags.length === 0 ? '' : 'none';
        });
    }

    function filterProjectsBySearch() {
        const searchTerm = searchInput.value.toLowerCase();
        document.querySelectorAll('.projectBox').forEach(box => {
            const title = box.querySelector('h3').textContent.toLowerCase();
            const tags = box.querySelector('.tags').textContent.toLowerCase();
            box.style.display = title.includes(searchTerm) || tags.includes(searchTerm) ? '' : 'none';
        });
    }
});
