// Load header fragment
async function loadHeader() {
    const container = document.getElementById("header-banner");
    const html = await fetch("./header.html").then(r => r.text());
    container.innerHTML = html;
    attachHeaderEvents();
}

// Load footer fragment
async function loadFooter() {
    const container = document.getElementById("footer");
    const html = await fetch("./footer.html").then(r => r.text());
    container.innerHTML = html;
}

// Attach dropdown logic AFTER header loads
function attachHeaderEvents() {
    const pills = document.querySelectorAll(".nav-pill[data-target]");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Handle pill clicks
    pills.forEach(pill => {
        pill.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents document click listener from triggering immediately
            
            const targetId = pill.dataset.target;
            const targetDropdown = document.getElementById(targetId);

            dropdowns.forEach(dropdown => {
                if (dropdown === targetDropdown) {
                    dropdown.classList.toggle("hidden");
                } else {
                    dropdown.classList.add("hidden");
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (event) => {
        dropdowns.forEach(dropdown => {
            // Check if click was outside the dropdown and outside any nav pill
            const clickedInsideDropdown = dropdown.contains(event.target);
            const clickedOnPill = Array.from(pills).some(pill => pill.contains(event.target));

            if (!clickedInsideDropdown && !clickedOnPill) {
                dropdown.classList.add("hidden");
            }
        });
    });
}

// Load both header and footer on page load
loadHeader();
loadFooter();
