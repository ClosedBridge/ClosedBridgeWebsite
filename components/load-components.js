window.componentsReady = (async function () {
    const components = document.querySelectorAll('[data-component]');
    for (const el of components) {
        const name = el.getAttribute('data-component');
        const resp = await fetch('components/' + name + '.html');
        if (resp.ok) {
            el.innerHTML = await resp.text();
        }
    }

    // Set active nav link based on current page
    const page = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    for (const link of navLinks) {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    }

    // Mobile: toggle dropdowns on tap
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    for (const dd of dropdowns) {
        dd.querySelector('.dropdown-toggle').addEventListener('click', e => {
            e.preventDefault();
            // Close other open dropdowns
            for (const other of dropdowns) {
                if (other !== dd) other.classList.remove('open');
            }
            dd.classList.toggle('open');
        });
    }
})();

