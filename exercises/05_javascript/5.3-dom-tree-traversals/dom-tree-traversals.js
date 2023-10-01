const ul = document.querySelectorAll("ul");
var ulNode;
var tempUlNode;

//skipataan ensimmäisen ul, koska sen jälkeläisiä ei tarvitse laskea.
for (var i = 1; i < ul.length; i++) {
    ulNode = ul[i];  
    tempUlNode = ulNode.querySelectorAll("li");   
    ulNode.previousSibling.textContent += "(" + tempUlNode.length + ")";
}