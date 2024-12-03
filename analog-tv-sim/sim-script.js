		const screen = document.getElementById("tv");
        const toggle = document.getElementById("toggle-remote");
		const power = document.getElementById("power-btn");
        const genStaticDisplay = document.getElementById("static");

        // toggles static on/off (first instance in html doc)
        genStaticDisplay.addEventListener("click", function staticOff() {
            if (genStaticDisplay.style.display = "block") {
                console.log('toggle is on');
            } else {
                console.log('toggle is off');
            }
        });
        
        // toggles remote cursor off
        toggle.addEventListener("click", function() {
            document.body.style.cursor = "none";
        });

        function TVchannels() {
            var gifs = [
                "assets/d2.gif",
                "assets/fnaf.gif",
                "assets/giphy.gif",
                "assets/amiga-juggler.gif",
                "assets/cartman.gif",
                "assets/tunnel.gif",
                "assets/purple-abstract.gif",
                "assets/clouds.gif",
                "assets/sign-off.gif",
                "assets/tv-static.gif",
                "assets/dash1.gif"
            ]; 
    
            var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    
            console.log(randomGif);
        }

       
		
		

       


