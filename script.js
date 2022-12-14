function changeStyle(){
    function random() {
        return Math.floor(Math.random() * 100000);
    }
    var element = document.getElementById("bg");
    element.style.backgroundColor = '#'+ random() + '5';
}