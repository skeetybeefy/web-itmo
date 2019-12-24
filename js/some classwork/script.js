document.write("A text added with document.write()<br>");
document.write("<b>This is a bold text added with document.write()</b><br>");
document.write(`Number of anchors: ${document.getElementsByTagName("a").length}<br>`);
document.write(`innerHTML of the first anchor: ${document.getElementsByTagName("a")[0].innerHTML}<br>`);
document.write(`Number of forms: ${document.getElementsByTagName("form").length}<br>`);
document.write(`Name of the first form: ${document.getElementsByTagName("form")[0].name}<br>`);
document.write(`Number of imgs: ${document.getElementsByTagName("img").length}<br>`);
document.write(`Id of the first img: ${document.getElementsByTagName("img")[0].id}<br>`);
document.write(`Number of links: ${document.getElementsByTagName("link").length}<br>`);
document.write(`Id of the first link: ${document.getElementsByTagName("link")[0].id}<br>`);
document.write(`Name of the domain: ${window.location.hostname}<br>`);
document.write(`Document title: ${document.title}<br>`);
document.write(`Document URL: ${document.URL}<br>`);

function ChangeText() {
    document.getElementsByClassName("button")[0].value="NOW you click'd me!";
}