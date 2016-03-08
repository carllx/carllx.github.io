(function () {

    var video = document.querySelector('div#eric video');
    //    var span1 = document.querySelector('#eric > div :first-child');
    //    var span2 = document.querySelector('#eric > div :last-of-type');
    var span1 = document.querySelector('div#ap');
    var span2 = document.querySelector('div#bp');


    if (!video.textTracks) return;

    var track = video.textTracks[0];
    //chrome
    //track.mode = TextTrack.DISABLED; 


    var idx = 0;

    track.oncuechange = function (e) {

        var cue = this.activeCues[0];
        if (cue) {
            if (idx == 0) {
                span2.className = '';
                span1.classList.remove('on');
                span1.innerHTML = '';
                span1.appendChild(cue.getCueAsHTML());
                span1.classList.add('on');
            } else {
                span1.className = '';
                span2.classList.remove('on');
                span2.innerHTML = '';
                span2.appendChild(cue.getCueAsHTML());
                span2.classList.add('on');
            }

            idx = ++idx % 2;
        }

    };

})();


var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function () {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
});


pauseButton.addEventListener("click", function () {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
    } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
    }
})