var adDiv, tl, banner, cta, bg, b2, copy01_01, copy01_02, copy01_03, copy01_04, copy01_05, copy01_06, copy01_07, copy01_08, copy01_09, copy01_10, copy01_11, copy01_12, copy01_13, copy01_14, copy01_15, copy02_00, copy02_02, copy02_02, copy02_03, copy02_04, copy02_05, copy02_06, copy02_07, copy02_08, copy02_09, copy02_10, copy02_11, copy02_12, copy02_13, copy02_14, copy02_15, copy02_16, copy02_17, copy02_18, bg, bg2, bg3, legal, content_container;

function initEB() {
    EB.isInitialized() ? startAd() : EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd)
}

var loopCounter = 0;

function startAd() {
    banner = document.getElementById("banner"), tl = new TimelineMax({
        repeat: 1,
        onComplete: checkTime
    }), tl_bg2 = new TimelineMax,
        cta = document.getElementById("cta"),
        copy01_01 = document.getElementById("copy01_01"),
        copy01_02 = document.getElementById("copy01_02"),
        copy01_03 = document.getElementById("copy01_03"),
        copy01_04 = document.getElementById("copy01_04"),
        copy01_05 = document.getElementById("copy01_05"),
        copy01_06 = document.getElementById("copy01_06"),
        copy01_07 = document.getElementById("copy01_07"),
        copy01_08 = document.getElementById("copy01_08"),
        copy01_08 = document.getElementById("copy01_08"),
        copy01_09 = document.getElementById("copy01_09"),
        copy01_10 = document.getElementById("copy01_10"),
        copy01_11 = document.getElementById("copy01_11"),
        copy01_12 = document.getElementById("copy01_12"),
        copy01_13 = document.getElementById("copy01_13"),
        copy01_14 = document.getElementById("copy01_14"),
        copy01_15 = document.getElementById("copy01_15"),

        copy02_00 = document.getElementById("copy02_00"),
        copy02_01 = document.getElementById("copy02_01"),
        copy02_02 = document.getElementById("copy02_02"),
        copy02_03 = document.getElementById("copy02_03"),
        copy02_04 = document.getElementById("copy02_04"),
        copy02_05 = document.getElementById("copy02_05"),
        copy02_06 = document.getElementById("copy02_06"),
        copy02_07 = document.getElementById("copy02_07"),
        copy02_08 = document.getElementById("copy02_08"),
        copy02_08 = document.getElementById("copy02_08"),
        copy02_09 = document.getElementById("copy02_09"),
        copy02_10 = document.getElementById("copy02_10"),
        copy02_11 = document.getElementById("copy02_11"),
        copy02_12 = document.getElementById("copy02_12"),
        copy02_13 = document.getElementById("copy02_13"),
        copy02_14 = document.getElementById("copy02_14"),
        copy02_15 = document.getElementById("copy02_15"),
        copy02_16 = document.getElementById("copy02_16"),
        copy02_17 = document.getElementById("copy02_17"),
        copy02_18 = document.getElementById("copy02_18"),

        copy03 = document.getElementById("copy03"),

        bg = document.getElementById("bg"),
        bg2 = document.getElementById("bg2"),
        bg3 = document.getElementById("bg3"),

        content_container = document.getElementById("content_container"),

        banner.addEventListener("click", function() {
        clickthrough()
    }), banner.addEventListener("mouseover", function() {
        TweenMax.to(cta, .25, {scale: 1.05, transformOrigin: "center 470px", force3D: !0, rotationZ: .01}),
        TweenMax.to(cta, .25, { scale: 1, delay: .25, transformOrigin: "center 470px", force3D: !0, rotationZ: .01})

    });

    var t1 = document.getElementsByClassName("copy01");
    var t2 = document.getElementsByClassName("copy02");

    tl.set(bg2,{x:300,webkitFilter:"blur(5px)"}),
    tl.set(bg3,{y:600,webkitFilter:"blur(5px)"}),

    tl.set(copy01_01,{scale:0,transformOrigin:"20px 272px"}),
    tl.set(copy01_02,{scale:0,transformOrigin:"40px 272px"}),
    tl.set(copy01_03,{scale:0,transformOrigin:"60px 272px"}),
    tl.set(copy01_04,{scale:0,transformOrigin:"80px 272px"}),
    tl.set(copy01_05,{scale:0,transformOrigin:"100px 272px"}),
    tl.set(copy01_06,{scale:0,transformOrigin:"120px 272px"}),
    tl.set(copy01_07,{scale:0,transformOrigin:"140px 272px"}),
    
    tl.set(copy01_08,{scale:0,transformOrigin:"160px 272px"}),
    tl.set(copy01_09,{scale:0,transformOrigin:"180px 272px"}),
    tl.set(copy01_10,{scale:0,transformOrigin:"200px 272px"}),
    tl.set(copy01_11,{scale:0,transformOrigin:"220px 272px"}),
    tl.set(copy01_12,{scale:0,transformOrigin:"240px 272px"}),
    tl.set(copy01_13,{scale:0,transformOrigin:"260px 272px"}),
    tl.set(copy01_14,{scale:0,transformOrigin:"280px 272px"}),

    tl.set(copy02_00,{opacity:1, x:300}),
    tl.set(copy02_01,{scale:0,transformOrigin:"60px 304px"}),
    tl.set(copy02_02,{scale:0,transformOrigin:"87px 304px"}),
    tl.set(copy02_03,{scale:0,transformOrigin:"116px 304px"}),
    tl.set(copy02_04,{scale:0,transformOrigin:"149px 304px"}),
    tl.set(copy02_05,{scale:0,transformOrigin:"183px 304px"}),
    tl.set(copy02_06,{scale:0,transformOrigin:"210px 304px"}),
    tl.set(copy02_07,{scale:0,transformOrigin:"238px 304px"}),
    tl.set(copy02_08,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_09,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_10,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_11,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_12,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_13,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_14,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_15,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_16,{scale:0,transformOrigin:"258px 304px"}),
    tl.set(copy02_17,{scale:0,transformOrigin:"258px 304px"}),

    tl.set(copy03,{x:300}),


        tl.addLabel("frame01").to(content_container, .5, {
            opacity: 1
        }).staggerTo(t1, .5, {
            scale: 1,
            ease: Back.easeOut.config(2),
            opacity: 1,
            force3D: !0,
            rotationZ: .01
        }, .04, "f1+=0.5").set(copy01_15, {
            opacity: 1
        }),

        tl.addLabel("frame02").to([bg, t1, copy01_15], .5, {
            x: -300,
            webkitFilter: "blur(3px)",
            force3D: !0,
            rotationZ: .01
        }, "f2+=1.5").to(bg2, .2, {
            x: 0,
            webkitFilter: "blur(0px)",
            force3D: !0,
            rotationZ: .01
        }, "f2+=1.5").set(bg, {
            opacity: 0
        }).add(tl_bg2, "f2+=1.5")
          .to(copy02_00, .5, {
            x: 0
        }, "f2+=2").staggerTo(t2, .5, {
            scale: 1,
            ease: Back.easeOut.config(2),
            opacity: 1,
            force3D: !0,
            rotationZ: .01
        }, .04, "f2+=2.2").set(copy02_18, {
            opacity: 1
        }),

        tl.addLabel("frame03").to([t2, copy02_18, copy02_00], .5, {
            y: -600,
            webkitFilter: "blur(3px)",
            force3D: !0,
            rotationZ: .01
        }, "f3+=1.5").to(bg3, .5, {
            y: 0,
            webkitFilter: "blur(0px)",
            force3D: !0,
            rotationZ: .01
        }, "f3+=1.5").to(copy03, 1.5, {
            x: 0,
            ease: Elastic.easeOut.config(.25, .1),
            force3D: !0,
            rotationZ: .01
        }, "+=0.5")

        .to([cta], .5, {
            opacity: 1,
            onComplete: countLoops
        }, "-=0.5"),

        tl.to([content_container], .5, {
            opacity: 0
        }, "+=2"),

        tl_bg2
}

function countLoops() {
    2 == ++loopCounter && tl.pause(), checkTime()
}

function clickthrough() {
    console.log("click"), EB.clickthrough()
}

function checkTime() {
    console.log("Time at this point is " + tl.totalTime().toFixed(2))
}
window.addEventListener("load", initEB);
