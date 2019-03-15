var modal = document.getElementById('zoomModal');
    var header = document.getElementById('header');

    function scaleImage(image) {
        modal.style.display = "block";
        var modalImg = document.getElementById("zoomImage");
        modalImg.src = image.src;
    }

    window.addEventListener('scroll', function (e) {

        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }