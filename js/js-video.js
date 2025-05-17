        var button1 = document.getElementById("vlt1");
        var button2 = document.getElementById("vlt2");
        var videoord = ["trims.mp4","https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4"];
        
        var numvide = 0;
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
