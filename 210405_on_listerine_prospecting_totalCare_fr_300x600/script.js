var Banner = {
    init: function() {
		this.bannerAnimation();
    },

    bannerAnimation: function() {

		$("#tx1").animate({opacity: '1'},1000).delay(1000).animate({opacity: '0'},1000);

    $("#palanca1").delay(1500).animate({opacity: '1'},10).delay(500).animate({opacity: '0'},10);
    $("#palanca2").delay(1500).animate({opacity: '0'},10).delay(500).animate({opacity: '1'},10);

    $("#slotLeft").delay(2000).animate({top: '-1657px'},2500);
    $("#slotCenter").delay(2250).animate({top: '-1657px'},2500);
    $("#slotRight").delay(2500).animate({top: '-1657px'},2500);

		$("#tx2").delay(3000).animate({opacity: '1'},1000).delay(2000).animate({opacity: '0'},1000);

    $("#palanca1").delay(4400).animate({opacity: '1'},10).delay(500).animate({opacity: '0'},10);
    $("#palanca2").delay(4400).animate({opacity: '0'},10).delay(500).animate({opacity: '1'},10);

    $("#slotLeft").delay(2500).animate({top: '142px'},2500);
    $("#slotCenter").delay(2750).animate({top: '142px'},2500);
    $("#slotRight").delay(3000).animate({top: '142px'},2500);

    $("#tx3").delay(7000).animate({opacity: '1'},1000);
    $("#cta").delay(9500).animate({opacity: '1'},500);

	},

};
