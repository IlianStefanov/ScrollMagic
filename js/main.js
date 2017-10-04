$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);
    
    
    
    
    
    
        //    var scaleImageAboutInfo = new TimelineMax();
//        scaleImageAboutInfo.from("#container", 1, {css: {scale: 1}})
    //IMPORTANT
    var aboutImgEffect = TweenMax.from( $('#container img'), 0.5,
    {css:{ scale:0.05, opacity:0, rotation: 180}, 
     ease:Quad.easeInOut});
    
    var aboutImgEffectScene = new ScrollMagic.Scene({
        triggerElement: '#container',
        triggerHook: 1, 
        duration: '100%'
      })
//    .addIndicators({
//        name: "img trigger rotation",
//        colorTrigger: "yellow"
//    })
    .setTween(aboutImgEffect)
    .addTo(controller);
    
    
    
    
    

	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	});
    
    
    
    
    //loop throught each .project element
    $('.project').each(function() {
        // build a scene 
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        .setClassToggle(this,'fade-in') //add class to project01
//        .addIndicators({
//            name: "fade scene",
//            colorTrigger: 'black',
//            colorStart: 'crimson'
//        })
        .addTo(controller)
    });
    
    
    var box1Scene = new ScrollMagic.Scene({
        triggerElement: '.box-1'  
    })
    .setClassToggle(".box-1 .line", "active")
    .addTo(controller);
    
    var box2Scene = new ScrollMagic.Scene({
        triggerElement: '.box-2'  
    })
    .setClassToggle(".box-2 .line", "active")
    .addTo(controller);
    
    var box3Scene = new ScrollMagic.Scene({
        triggerElement: '.box-3'  
    })
    .setClassToggle(".box-3 .line", "active")
    .addTo(controller);
    
    var box4Scene = new ScrollMagic.Scene({
        triggerElement: '.box-4'  
    })
    .setClassToggle(".box-4 .line", "active")
    .addTo(controller);
    
    
    var box6Scene = new ScrollMagic.Scene({
        triggerElement: '.box-6'  
    })
    .setClassToggle(".box-6 .line", "active")
    .addTo(controller);
    
    
    
    
    
    
    var textFadeIn = new ScrollMagic.Scene({
        triggerElement: '.box-2 .p-right', 
      
    })
    .setClassToggle(".box-2 .p-right","active-p")
//    .addIndicators({
//        name: 'text scene',
//        colorTrigger: 'crimson', 
//        
//    })
    .addTo(controller);
    
    
    var textFadeIn = new ScrollMagic.Scene({
        triggerElement: '.box-3 .p-left', 
      
    })
    .setClassToggle(".box-3 .p-left","active-p")
//    .addIndicators({
//        name: 'text scene',
//        colorTrigger: 'crimson', 
//        
//    })
    .addTo(controller);
    
    var textFadeIn = new ScrollMagic.Scene({
        triggerElement: '.box-6 .p-left', 
      
    })
    .setClassToggle(".box-6 .p-left","active-p")
//    .addIndicators({
//        name: 'text scene',
//        colorTrigger: 'crimson', 
//        
//    })
    .addTo(controller);
    
    
    
    // about me section fade in
    var textFadeIn = new ScrollMagic.Scene({
        triggerElement: '.box-4 .p-right', 
      
    })
    .setClassToggle(".box-4 .p-right","active-p")
//    .addIndicators({
//        name: 'text scene',
//        colorTrigger: 'crimson', 
//     })
    .addTo(controller);
    
    
    
    var aboutText = new ScrollMagic.Scene({
        triggerElement: '#box-1'  
    })
    .setClassToggle(".about-me-info", "about-me-fade-in")
    .addTo(controller); 
    
    var boxFadeIn1 = new ScrollMagic.Scene({
            triggerElement: '.box-3 .p-left', 

        })
        .setClassToggle(".box-3 .inner-box-1","active-box")
    //    .addIndicators({
    //        name: 'text scene',
    //        colorTrigger: 'crimson', 
    //        
    //    })
        .addTo(controller);
    
    var boxFadeIn2 = new ScrollMagic.Scene({
            triggerElement: '.box-4 .p-right', 

        })
        .setClassToggle(".box-4 .inner-box-2","active-box")
    //    .addIndicators({
    //        name: 'text scene',
    //        colorTrigger: 'crimson', 
    //        
    //    })
        .addTo(controller);
    
    var boxFadeIn3 = new ScrollMagic.Scene({
            triggerElement: '.box-6 .p-left', 

        })
        .setClassToggle(".box-6 .inner-box-3","active-box")
    //    .addIndicators({
    //        name: 'text scene',
    //        colorTrigger: 'crimson', 
    //        
    //    })
        .addTo(controller);
    
});

$(document).ready(function() {
//  var color = 'one';
//  var counter = 0;
//  $('.desc').hide();
//  $('.hexagon').hover(
//    function() {
//      $(this).find('.desc').fadeIn('fast');
//      counter++;
//      if (counter === 0) {
//        color = 'base';
//      } else if (counter === 1) {
//        color = 'one';
//      } else if (counter === 2) {
//        color = 'two';
//      } else if (counter === 3) {
//        color = 'three';
//      } else if (counter >= 4){
//        counter = 0 ;
//        color = 'base';
//      }
//      $(this).find('.desc').addClass(color);
//    }, 
//    function() {
//      $(this).find('.desc').fadeOut('fast', function() {
//        $(this).removeClass(color);
//      });
//    });
    
    
    var viewer       = document.querySelector('.viewer'),
    frame_count  = 9,
    offset_value = 100;

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});

// build pinned scene
new ScrollMagic.Scene({
  triggerElement: '#sticky',
  duration: (frame_count * offset_value) + 'px',
  reverse: true
})
.setPin('#sticky')
//.addIndicators()
.addTo(controller);

// build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#sticky',
      offset: i * offset_value
    })
    .setClassToggle(viewer, 'frame' + i)
    //.addIndicators()
    .addTo(controller);
}
});














