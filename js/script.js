var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var getElementsByTagName = document.getElementsByTagName('li').length;
    element.innerHTML = 'item ' + getElementsByTagName;
    list.appendChild(element)
});