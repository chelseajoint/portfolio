var adDiv;
var ctaContainer;

var loop;
loop = 0;

function startAd() {
    adDiv = document.getElementById("ad");
    ctaContainer = document.getElementById("ctaContainer");


    bannerAnim();


}




function bannerAnim(){

    var tl_cta = gsap.timeline({repeat:-1});

    tl_cta.to(["#brillo"], 3,{ x: 750,  ease: Power3.easeOut},"+=1");

    var tl_reloj = gsap.timeline({repeat:0});

    tl_reloj.to(["#arena"], 15,{ y: 800, ease: Power3.easeOut},"+=2");
    tl_reloj.to(["#arenaTop"], 13,{ scaleY: 0, ease: Power3.easeOut},"-=14");

    tl_reloj.to(["#arenaBottom","#arenaCasa"], 10,{ scaleY: 1, ease: Power3.easeOut},"-=14");
    tl_reloj.to(["#arenaCasa"], 5,{ opacity:1, ease: Power3.easeOut},"-=12");



    var tl_bannerAnim = gsap.timeline({repeat:-1});
    tl_bannerAnim.to(["#white"], 0.5,{ opacity: 0, ease: Power3.easeOut});

    tl_bannerAnim.to(["#txt1Cont"], 1,{ height: 230, ease: Power3.easeOut},"+=1");
    tl_bannerAnim.to(["#lineaCont"], 4,{ height: 300, ease: Power3.easeOut},"-=1");

    tl_bannerAnim.to(["#oficina"], 1,{ opacity: 1, ease: Power3.easeOut},"+=6");
    tl_bannerAnim.to(["#txt2"], 1,{ opacity: 1, ease: Power3.easeOut});


    tl_bannerAnim.to(["#white"], 0.5,{ opacity: 1, ease: Power3.easeOut, onComplete: reset},"+=3");


    function reset(){
        tl_reloj.restart();
    }
    /*tl_bannerAnim.call(loopCheck);

   	function loopCheck() {
        loop++;
        if (loop < 3) {
            tl_bannerAnim.play();
        } else{

            tl_bannerAnim.pause();

        }
    }*/

}



window.addEventListener("load", startAd);
