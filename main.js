const toggle = document.getElementById('themeToggle'); // targeting the button element
const label = document.getElementById('toggle-label'); // targeting the Light & Dark label
const html = document.documentElement; // targeting the root
// Load saved preference (or system preference)
const userHasChosen = localStorage.getItem('userChosen');
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//Only use saved value if the user manually picked it
const initial = (userHasChosen && saved) ? saved : (prefersDark ? 'dark' : 'light');

// Function to switch the Light & Dark theme
const setTheme = (theme, userChosen = false) => {
    html.setAttribute('data-theme', theme);
    label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    localStorage.setItem('theme', theme);
    if (userChosen) localStorage.setItem('userChosen', 'true');
};

// Call function to set the current theme
setTheme(initial);

// Toggle button between Light & Dark mode
toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
});
