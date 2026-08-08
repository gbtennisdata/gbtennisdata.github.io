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
    const pills = document.querySelectorAll(".nav-pill[data-dropdown]");
    const women = document.getElementById("dropdown-women");
    const men = document.getElementById("dropdown-men");
    const us-college = document.getElementById("dropdown-us-college");

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            const section = pill.dataset.dropdown;

            if (section === "women") {
                women.classList.toggle("hidden");
                men.classList.add("hidden");
                us-college.classlist.add("hidden");
            } else if (section === "men") {
                men.classList.toggle("hidden");
                women.classList.add("hidden");
                us-college.classlist.add("hidden");
            } else {
                us-college.classList.toggle("hidden");
                women.classList.add("hidden");
                men.classlist.add("hidden");                
            }
        });
    });
}

// Load both header and footer on page load
loadHeader();
loadFooter();
