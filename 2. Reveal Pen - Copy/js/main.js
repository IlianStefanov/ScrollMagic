




$(document).ready(function(){

	// move the pen body up to connect with the first part
	TweenMax.set('.part3', {y: -489}); //-572 prev
    TweenMax.set('.part2', {y: -158});
	// hide all headings and text
	//TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

	// create a tween that will move the pen body back to its original css position
    // Init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();
    var p2ToStart = new TweenMax.to('.part2', 1, {y: 0, ease:Linear.easeNone});
    
    var p2ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		offset: 158,
		duration: 489
	})
	.setTween(p2ToStart)
	.addTo(controller);
    
	var bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease:Linear.easeNone});
    
	

	// Create a Scene 1 - move pen body back to start - HOW?
	var bodyToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		offset: 158,
		duration: 489
	})
	.setTween(bodyToStart)
	.addTo(controller);

    
    
    var fadein1 = new ScrollMagic.Scene({
			triggerElement: '.part1',
		      triggerHook: 0.55,
		  
		  offset: 0
		})
		.setClassToggle(".part1", 'fade-in')
		.addTo(controller);
    
    var fadein2 = new ScrollMagic.Scene({
			triggerElement: '.part1',
		      triggerHook: 0.55,
		  
		  offset: 489
		})
		.setClassToggle(".part2", 'fade-in')
		.addTo(controller);
    
    
      var fadein3 = new ScrollMagic.Scene({
			triggerElement: '.part1',
		      triggerHook: 0.55,
		  
		  offset: 572
		})
		.setClassToggle(".part3", 'fade-in')
		.addTo(controller);
	// move 4 and 5 down, to connect with part 6 - HOW?
    
   
    
	// TweenMax.set('.part5', {y: 120});
	// TweenMax.set('.part4', {y: 289});

	// move part 6 to connect with the body
	TweenMax.set('.part6', {y: -678});

	// move 4 and 5 to connect with part 6 again
	TweenMax.set('.part5', {y: -540}); /* 120 - 846 */
	TweenMax.set('.part4', {y: -426}); /* 289 - 846 */

	// Create scene for part 6 - move part 6 back to start
	var p6ToStart = new TweenMax.to('.part6', 1, {y:0, ease:Linear.easeNone});

	var p6ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		duration: 678,
		offset: 1250
	})
	.setTween(p6ToStart)
	.addTo(controller);

	// Create scene for part 5 - move part 5 back to start
	var p5ToStart = new TweenMax.to('.part5', 1, {y: 0, ease:Linear.easeNone});

	var p5ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		duration: 540,
		offset: 1250
	})
	.setTween(p5ToStart)
	.addTo(controller);

	// Create scene for part 4 - move part 4 back to start
	var p4ToStart = new TweenMax.to('.part4', 1, {y:0, ease:Linear.easeNone});

	var p4ToStartScene = new ScrollMagic.Scene({
		triggerElement: '.part1',
		triggerHook: 1,
		duration: 426,
		offset: 1250
	})
	.setTween(p4ToStart)
	.addTo(controller);

	// Loop through all parts and add a class //.fade-in
//    var first3elements = ['.part1','.part2','.part3'];
//	$(first3elements).each(function(){
//
//		// build a scene
//		var scene = new ScrollMagic.Scene({
//			triggerElement: this,
//			triggerHook: 0.55
//		})
//		.setClassToggle(this, 'fade-in')
//		.addTo(controller);
//
//	});

    var fadein4 = new ScrollMagic.Scene({
			triggerElement: '.part1',
		      triggerHook: 0.55,
		  
		  offset: 1250
		})
		.setClassToggle(".part4", 'fade-in')
		.addTo(controller);
    var fadein5 = new ScrollMagic.Scene({
			triggerElement: '.part1',
		      triggerHook: 0.55,
		  
		  offset: 1850
		})
		.setClassToggle(".part5", 'fade-in')
		.addTo(controller);
    var fadein5 = new ScrollMagic.Scene({
			triggerElement: '.part1',
		      triggerHook: 0.55,
		  
		  offset: 1950
		})
		.setClassToggle(".part6", 'fade-in')
		.addTo(controller);
});