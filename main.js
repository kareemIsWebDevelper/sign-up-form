    
    
    function submitted() {
        var input = querySelector("input").value;
    if (  input == "" ) {
            var myImage = document.getElementById("image");
            var image = document.getElementById("img") ;
            var immg = document.getElementById("immg") ;
            var immgg = document.getElementById("immgg");
            var wrong = document.querySelector("#wrong");
            var failed = document.querySelector("#failed");
            var cannot = document.querySelector("#cannot");
            var no = document.querySelector("#no");
            wrong.style.display = "block";
            failed.style.display = "block";
            no.style.display = "block";
            cannot.style.display = "block";
            myImage.style.visibility = "visible";
            image.style.visibility = "visible";
            immg.style.visibility = "visible";
            immgg.style.visibility = "visible";
        };  
    };
