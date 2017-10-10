$(document).ready(function(){
   //Init Scrollmagic
    var controller = new ScrollMagic.Controller();

    // Scene 1 - Pin the second section 
    var pinScene01 = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0,
        duration: '100%'
    })
    .setPin('#slide01 .pin-wrapper')
    .addTo(controller)
    .addIndicators({
        name: 'pin section one',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    }); // this requires a plugin 

    // Scene 2 - Pin the third section
    
    var pinScene02 = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0,
        duration: '200%'
    })
    .setPin('#slide02 .pin-wrapper')
    .addTo(controller)
    .addIndicators({
        name: 'pin section two',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    }); 
    
    // Scene 3 - Pin the fourth section
    
    var pinScene03 = new ScrollMagic.Scene({
        triggerElement: '#slide02',
        triggerHook: 0,
        duration: '200%'
    })
    .setPin('#slide03 .pin-wrapper')
    .addIndicators({
        name: 'pin section three',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
    })
    .addTo(controller); 
    
    // Scene 4 - Pin the fifth section
    var pinScene04 = new ScrollMagic.Scene({
        triggerElement: '#slide02',
        triggerHook: 0,
        duration: '200%'
    })
    .setPin('#slide04 .pin-wrapper')
    .addTo(controller);
});
