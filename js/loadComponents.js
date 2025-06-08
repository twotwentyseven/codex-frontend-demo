// Function to load HTML components
export async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error);
    }
}

// Function to highlight the current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Function to load markdown content
export async function loadMarkdownContent() {
    const contentDiv = document.querySelector('[data-markdown]');
    if (!contentDiv) return;

    const markdownPath = contentDiv.getAttribute('data-markdown');
    try {
        const response = await fetch(markdownPath);
        const markdown = await response.text();
        
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });
        
        contentDiv.innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error('Error loading markdown:', error);
        contentDiv.innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
}

// Initialize components
export async function initComponents() {
    // Load header instead of separate navigation
    await loadComponent('header', '/components/header.html');
    highlightCurrentPage();
} 