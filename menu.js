document.addEventListener('DOMContentLoaded', function() {
    // Add mouseover effect to menu items
    var menuItems = document.querySelectorAll('.menu');
    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    });

    // Add hover effect to links
    window.addEventListener('mouseover', function() {
        var cssStyle = `
            a:hover {
                padding: 8px 10px;
                background-color: black;
                border-radius: 10px;
                border: 2px solid rgb(123, 104, 238);
                color: white;
            }
        `;
        // Create a style element
        var styleElement = document.createElement('style');

        // Set the CSS styles
        styleElement.textContent = cssStyle;

        // Append the style element to the head of the document
        document.head.appendChild(styleElement);
    });

    // Scroll event listener

    var navigationMenu = document.querySelector('.menu');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navigationMenu.style.background= 'orange'; // new background color when scrolled
        } else {
            navigationMenu.style.background= 'linear-gradient(270deg, greenyellow, whitesmoke)'; // default background color
        }
    });
});
