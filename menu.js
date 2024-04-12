document.getElementById('menu').onmouseover=function(){
    this.style.color='#'+ Math.floor(Math.random()*16777215).toString(16)
};
window.onmouseover = function() {
    var h1Elements = document.getElementsByTagName("a");
    var cssStyle = `
    a:hover{
        padding:8px 10px;
        background-color: black;
        border-radius:10px;
        border: 2px solid rgb(123,104,238);
        color: white;
    }
`;

    // Create a style element
    var styleElement = document.createElement('style');

    // Set the CSS styles
    styleElement.textContent = cssStyle;

    // Append the style element to the head of the document
    document.head.appendChild(styleElement);
 };
  