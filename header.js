// load-header.js
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-container');
    
    if (headerContainer) {
        fetch('header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading header:', error);
                headerContainer.innerHTML = '<p>Error loading header.</p>';
            });
    }



    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                footerContainer.innerHTML = '<p>Error loading footer.</p>';
            });
    }
}); 

function updateSelectorHeight() {
    const selector = document.getElementById("player-select-container");
    const cardHeader = document.querySelector(".card-header");

    // Default values
    let h = 0;
    let ch = 0;

    if (selector) {
        h = selector.getBoundingClientRect().height;
    }

    if (cardHeader) {
        ch = cardHeader.getBoundingClientRect().height;
    }

    document.documentElement.style.setProperty("--selector-height", h + "px");
    document.documentElement.style.setProperty("--cardHeader-height", ch + "px");
}

window.addEventListener("load", () => {
    requestAnimationFrame(updateSelectorHeight);
});

window.addEventListener("resize", updateSelectorHeight);
