if(document.getElementById("Poemas") != null){
    document.getElementById("Poemas").addEventListener("click", () => {
        document.getElementById('coverwholescreenUn').classList.add('coverwholescreen');
        setTimeout(function() {
            // Redirect to a different HTML page
            window.location.href = 'Poemas.html';
        }, 1000);
    })
}
if(document.getElementById("back") != null){
    document.getElementById("back").addEventListener("click", () => {
        document.getElementById('coverwholescreenUn').classList.add('coverwholescreen');
        setTimeout(function() {
            // Redirect to a different HTML page
            window.location.href = 'index.html';
        }, 1000);
    })
}