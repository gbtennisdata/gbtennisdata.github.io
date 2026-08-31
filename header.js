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