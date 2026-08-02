function renderBlogs(data) {
    const grid = document.querySelector('.blog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    data.forEach(post => {
        const card = document.createElement('article');
        card.className = 'blog-card';

        const title = document.createElement('div');
        title.className = 'blog-title';
        title.textContent = post.title;

        const date = document.createElement('div');
        date.className = 'blog-date';
        date.textContent = post.date;

        const desc = document.createElement('p');
        desc.className = 'blog-desc';
        desc.textContent = post.description;

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(desc);
        grid.appendChild(card);
    });
}

function renderProjects(data) {
    const grid = document.querySelector('.project-grid');
    if (!grid) return;
    grid.innerHTML = '';

    data.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const title = document.createElement('div');
        title.className = 'project-title';
        title.textContent = project.title;

        const desc = document.createElement('p');
        desc.className = 'project-desc';
        desc.textContent = project.description;

        const langs = document.createElement('div');
        langs.className = 'project-langs';
        project.languages.forEach(lang => {
            const tag = document.createElement('span');
            tag.className = 'lang-tag';
            tag.textContent = lang;
            langs.appendChild(tag);
        });

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(langs);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogs(blogData);
    renderProjects(projectData);

    const statusDropdown = document.querySelector('.status-dropdown');
    if (statusDropdown) {
        statusDropdown.addEventListener('click', () => {
            statusDropdown.classList.toggle('open');
        });
    }

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});
