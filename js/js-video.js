        var button1 = document.getElementById("vlt1");
        var button2 = document.getElementById("vlt2");
        var videoord = ["trims.mp4","https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4"];
        
        var numvide = 1;
        var videocs = document.getElementById("video");
        var video = document.createElement("video");
        video.src = videoord[numvide];
        video.id = "videocont";
        

      
        window.onload = () => {

            const progressBar = document.getElementById("progress");
            const volumeBar = document.getElementById("volume");
            var buttonbar = document.getElementById("paused");
        video.addEventListener("click", () => {

            if (video.paused) {
                video.play();
                buttonbar.value.textContent = "▶";
            }
            else {
                video.pause();
                buttonbar.value.textContent = "⏸";
            }
        });
        buttonbar.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

            progressBar.addEventListener("timeupdate", () => {
            if (video.duration) {
                var progress = (video.currentTime / video.duration) * 100;
                progress.value = progress;
                }
                console.log((video.currentTime / video.duration) * 100);
            });
    progressBar.addEventListener("input", () => {
        if (video.duration) {
            const time = (progressBar.value / 100) * video.duration;
            video.currentTime = time;
            progressBar.value = (video.currentTime / video.duration) * 100;
        }
    });
            volumeBar.addEventListener("input", () => {
                video.volume = volumeBar.value / 100;

            })
        var currentvalue = function() {
            progressBar.value = 0;
        }
               currentvalue();

        videocs.appendChild(video);};
        button1.addEventListener("click", () => {
            numvide + 1;
        })
        button2.addEventListener("click", () => {
            numvide - 1;
        });
    var container = document.getElementById("container");
    var fullscreen = document.getElementById("fullscreen");
    var content = document.getElementById("content");
    var bars = document.getElementById("progress"),vbar = document.getElementById("volume"),vlt1 = document.getElementById("vlt1")
    var vlt2 = document.getElementById("vlt2"),paused = document.getElementById("paused"),vbut = document.getElementById("vbut")

    var primary = function() {
        container.style.width = (window.innerWidth) + "px";
        container.style.height = (window.innerHeight) + "px";
        video.style.height = (window.innerHeight) + "px";
        video.style.width = (window.innerWidth) + "px";
        content.style.height = (window.innerHeight) + "px";
        vlt1.style.left = (window.innerHeight + 32) + "px";
        vlt2.style.left = (window.innerHeight + 1) + "px";
        paused.style.left = (window.innerHeight - 56.5) + "px";
        bars.style.left = (window.innerHeight - 200) + "px";
        vbar.style.left = (window.innerHeight + 500) + "px";
        fullscreen.style.left = (window.innerHeight - 30) + "px";
        vbut.style.left = (window.innerHeight + 100) + "px";        
    }
        primary();
    fullscreen.addEventListener("click", (e) => {
        if (container.requestFullscreen) {
        container.requestFullscreen();
        video.style.width = (window.innerWidth) + "px";
        video.style.height = (window.innerHeight) + "px";
        container.style.width = (window.innerWidth) + "px";
        container.style.height = (window.innerHeight) + "px";
        vlt1.style.top = (window.innerHeight -20) + "px";
        vlt2.style.top = (window.innerHeight - 20) + "px";
        paused.style.top = (window.innerHeight - 20) + "px";
        bars.style.top = (window.innerHeight - 25) + "px";
        vbar.style.top = (window.innerHeight - 25) + "px";
        vbar.style.width = "170px"
        vbar.style.left = "1100px"
        bars.style.width = "1000px"
        fullscreen.style.top = (window.innerHeight - 20) + "px";
        vbut.style.top = (window.innerHeight - 20) + "px";
    }});
    document.addEventListener("keydown", (e) => {
        if (container.requestFullscreen) {
        } else if (e.key === "Escape") {
        video.style.width = "800px";
        video.style.height = "450px";
        e.preventDefault();
        }
    });
    vbut.addEventListener("click", () => {
        if (vbut.textContent === "🔊") {
            vbar.style.display = "visible";
            vbut.textContent = "❌";
        } else {
            vbar.style.display = "visible";
            vbut.textContent = "🔊"
        }
    })

