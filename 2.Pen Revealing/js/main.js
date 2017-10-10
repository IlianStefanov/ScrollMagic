$(document).ready(function(){
    // move body to connect with the first part 
	TweenMax.set('.part3', { y: -572 });
    
    // hide all headings and paragraphs 
    TweenMax.set(['.parts h2, .parts p'], { autoAlpha: 0 });
    
    TweenMax.set('.part4', { y: -557 });
    
    TweenMax.set('.part5', { y: -726 });
    
    TweenMax.set('.part6', { y: -846 });
    
    
    
    // create a tween that will move the pen body back to its original css position
	var bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease:Linear.easeNone});
    
//    var tweenTimeline = new TimelineLite()
//                .add(TweenMax.to('.part4', 1, {y: 0, ease:Linear.easeNone}))
//                .add(TweenMax.to('.part5', 1, {y: 0, ease:Linear.easeNone}))
//                .add(TweenMax.to('.part6', 1, {y: 0, ease:Linear.easeNone}));
	var bodyToCore1 = TweenMax.to('.part4', 1, {y: 0, ease:Linear.easeNone});
    
	var bodyToCore2 = TweenMax.to('.part5', 1, {y: 0, ease:Linear.easeNone});
    
	var bodyToCore3 = TweenMax.to('.part6', 1, {y: 0, ease:Linear.easeNone});
    
    
    var controller = new ScrollMagic.Controller();
    
    // Scene body 1 
    var bodyToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 287,
        duration: 572
      
    })
    .setTween(bodyToStart)
    .addIndicators()
    .addTo(controller);
    
    
    // Scene body core 1 part 
//    var bodyToStartCoreOne = new ScrollMagic.Scene({
//        triggerElement: '.part3',
//        triggerHook: 0.5,
//        duration: 560
//        
//    })
//    .setTween(bodyToCore1)
//    .addIndicators({
//        name: "core 1"
//    })
//    .addTo(controller);
    
    //Scene body core 1 part
    var bodyToEndScene1 = new ScrollMagic.Scene({
        triggerElement: '.part3',
        triggerHook: 0,
        duration: 557
    })
    .setTween(bodyToCore1)
    .addTo(controller); 
    
    var bodyToEndScene2 = new ScrollMagic.Scene({
        triggerElement: '.part3',
        triggerHook: 0,
        duration: 726
    })
    .setTween(bodyToCore2)
    .addTo(controller);
    
    
    var bodyToEndScene3 = new ScrollMagic.Scene({
        triggerElement: '.part3',
        triggerHook: 0,
//        offset: 287,
//        duration: 572
        duration: 816
      
    })
    .setTween(bodyToCore3)
    .addIndicators()
    .addTo(controller);
    
});
