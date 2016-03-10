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


//浏览器识别

var userAgent = navigator.userAgent.toLowerCase(),
    rWeixin = /(micromessenger)\/([\w.]+)/,
    rMsie = /(msie\s|trident\/7)([\w.]+)/,
    rTrident = /(trident)\/([\w.]+)/,
    rFirefox = /(firefox)\/([\w.]+)/,
    rOpera = /(opera).+version\/([\w.]+)/,
    rNewOpera = /(opr)\/(.+)/,
    rChrome = /(chrome)\/([\w.]+)/,
    rSafari = /version\/([\w.]+).*(safari)/;
var matchBS, matchBS2;
var browser;
var version;
var ua = userAgent.toLowerCase();
var uaMatch = function (ua) {
    matchBS = rMsie.exec(ua);
    if (matchBS != null) {
        matchBS2 = rTrident.exec(ua);
        if (matchBS2 != null) {
            switch (matchBS2[2]) {
            case "4.0":
                return {
                    browser: "IE",
                    version: "8"
                };
                break;
            case "5.0":
                return {
                    browser: "IE",
                    version: "9"
                };
                break;
            case "6.0":
                return {
                    browser: "IE",
                    version: "10"
                };
                break;
            case "7.0":
                return {
                    browser: "IE",
                    version: "11"
                };
                break;
            default:
                return {
                    browser: "IE",
                    version: "undefined"
                };
            }
        } else
            return {
                browser: "IE",
                version: matchBS[2] || "0"
            };
    }
    matchBS = rFirefox.exec(ua);
    if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
        return {
            browser: matchBS[1] || "",
            version: matchBS[2] || "0"
        };
    }
    matchBS = rWeixin.exec(ua);
    if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
        return {
            browser: matchBS[1] || "",
            version: matchBS[2] || "0"
        };
    }
    matchBS = rOpera.exec(ua);
    if ((matchBS != null) && (!(window.attachEvent))) {
        return {
            browser: matchBS[1] || "",
            version: matchBS[2] || "0"
        };
    }
    matchBS = rChrome.exec(ua);
    if ((matchBS != null) && (!!(window.chrome)) && (!(window.attachEvent))) {
        matchBS2 = rNewOpera.exec(ua);
        if (matchBS2 == null)
            return {
                browser: matchBS[1] || "",
                version: matchBS[2] || "0"
            };
        else
            return {
                browser: "Opera",
                version: matchBS2[2] || "0"
            };
    }
    matchBS = rSafari.exec(ua);
    if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
        return {
            browser: matchBS[2] || "",
            version: matchBS[1] || "0"
        };
    }
    if (matchBS != null) {
        return {
            browser: "undefined",
            version: " browser"
        };
    }
}
var browserMatch = uaMatch(userAgent.toLowerCase());
if (browserMatch.browser) {
    browser = browserMatch.browser;
    version = browserMatch.version;
    if (browser == "firefox" || browser == "micromessenger") {
        alert("对不起，网站暂未完全支持你所拥的浏览器, 部分功能将失效");
    }
}
//document.write(browser + version);

alert("目前网站为测试阶段，你浏览器是 : " + browser + version);