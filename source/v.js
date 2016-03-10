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


//浏览器识别--------------------

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
    if (browser == "firefox") {
        alert("【FireFox】浏览器，将使部分动画功能失效，\r推荐使用chrome浏览器");
    }
    if (browser == "micromessenger") {
        alert("【微信】浏览器，将使部分动画功能失效，\r推荐使用chrome浏览器");
    }
    //document.write(browser + version);
}


//辨别语言--------------
// 获取终端的相关信息 
var Terminal = { // 辨别移动终端类型 
        platform: function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //IE内核 
                windows: u.indexOf('Windows') > -1,
                //opera内核 
                presto: u.indexOf('Presto') > -1, //苹果、谷歌内核 
                webKit: u.indexOf('AppleWebKit') > -1, //火狐内核 
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //是否为移动终端 
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //ios终端 
                ios: !!u.match(/\(i[^;]+;( U;) CPU.+Mac OS X/), //android终端或者uc浏览器 
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //是否iPad 
                iPad: u.indexOf('iPad') > -1, //是否为iPhone或者QQHD浏览器 
                iPhone: u.indexOf('iPhone') > -1, //是否为mac系统 
                Mac: u.indexOf('Macintosh') > -1, //是否web应该程序，没有头部与底部 
                webApp: u.indexOf('Safari') == -1
            };
        }(), // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp... 
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    } // 根据不同的终端，跳转到不同的地址 
var sysName;
var lagName;
var theUrl = '';
if (Terminal.platform.android) {
    sysName = "android";
} else if (Terminal.platform.iPhone) {
    sysName = "iPhone";
} else if (Terminal.platform.iPad) {
    sysName = "iPad";
} else if (Terminal.platform.windows) {
    sysName = "windows";
} else if (Terminal.platform.Mac) {
    sysName = "Mac";
} else if (Terminal.platform.gecko) {
    sysName = "fireFox";
} else if (Terminal.platform.mobile) {
    sysName = "mobile";
} else {
    sysName = "unknown";
} // 还可以通过language，区分开多国语言版 
switch (Terminal.language) {
case 'zh-cn':
    lagName = "中文";
    break;
case 'ko-kr':
    lagName = "韩文";
    break;
case 'ja-jp':
    lagName = "日文";
    break;
case 'it':
    lagName = "italiano";
    break;
default:
    lagName = "默认英文";
}




alert("目前网站为测试阶段\r----你的操作系统 : " + sysName + lagName + "\r----你浏览器版本 : " + browser + version);