
// HogarthClass -----------------------------------------
var H = {
	// get element by ID
	e:function(id){
		return document.getElementById(id);
	},

	// get param by name
	gpn: function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
}

var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();
}

function addEventListeners() {
    document.getElementById("clickthrough-button").addEventListener("click", clickthrough);

}

function clickthrough() {
    EB.clickthrough();
}

window.addEventListener("load", initEB);


// Main Timeline ----------------------------------------

	/*----LINEA TIEMPO----*/

  TL = new TimelineMax({repeat:0, repeatDelay:0});

	/*----SET INICIO----*/

	TL.add( TweenMax.to(H.e('wrapper'), 0, {opacity: 1}) )


	/*----ANIMACION-----*/


	TL.add([
	  TweenMax.to(H.e('tx1'), 1, {opacity:1, ease: Sine.easeOut}),
		TweenMax.to(H.e('tx2'), 1, {delay: .5, opacity:1, ease: Sine.easeOut}),
		TweenMax.to(H.e('cta'), 1, {delay: .5, opacity:1, ease: Sine.easeOut}),
	], '+=0');

	TL.add([
		TweenMax.to(H.e('img1'), 1, {opacity:0, ease: Sine.easeOut}),
	], '+=.5');

	TL.add([
		TweenMax.to(H.e('img1'), 1, {opacity:1, ease: Sine.easeOut}),
		TweenMax.to(H.e('tx1'), 1, {opacity:0, ease: Sine.easeOut}),
		TweenMax.to(H.e('tx2'), 1, {opacity:0, ease: Sine.easeOut}),
		TweenMax.to(H.e('cta'), 1, {opacity:0, ease: Sine.easeOut}),
	], '+=1.5');


	/*----LOOP-----*/


	TL.add([
	  TweenMax.to(H.e('tx1'), 1, {opacity:1, ease: Sine.easeOut}),
		TweenMax.to(H.e('tx2'), 1, {delay: .5, opacity:1, ease: Sine.easeOut}),
		TweenMax.to(H.e('cta'), 1, {delay: .5, opacity:1, ease: Sine.easeOut}),
	], '+=0');

	TL.add([
		TweenMax.to(H.e('img1'), 1, {opacity:0, ease: Sine.easeOut}),
	], '+=.5');
