import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Blaze } from 'meteor/blaze';


Template.box.onRendered(function(){
  var el;
  el = this.firstNode;
  var parentEl = el.parentNode;
  var reqAnimationFrame = (function () {
    return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();



  var START_X = 0;//Math.round((window.innerWidth - el.offsetWidth) / 2);
  var START_Y = 0;//Math.round((window.innerHeight - el.offsetHeight) / 2);

  var ticking;
  var transform = {
      translate: { x: START_X, y: START_Y },
      scale: 1,
      angle: 0,
      rx: 0,
      ry: 0,
      rz: 0
  };
  var timer;

  var mc = new Hammer.Manager(el);

  mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

  // mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
  mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
  mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);

  // mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
  // mc.add(new Hammer.Tap());

  mc.on("panstart panmove", onPan);
  mc.on("rotatestart rotatemove", onRotate);
  mc.on("pinchstart pinchmove", onPinch);
  // mc.on("swipe", onSwipe);
  // mc.on("tap", onTap);
  // mc.on("doubletap", onDoubleTap);

  mc.on("hammer.input", function(ev) {

  });

  function updateElementTransform() {
    var value = [
      'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
      'scale(' + transform.scale + ', ' + transform.scale + ')',
      'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
    ];

    value = value.join(" ");
    // console.log(value);

    el.textContent = value;;
    el.style.webkitTransform = value;
    el.style.mozTransform = value;
    el.style.transform = value;
    ticking = false;
  }

  function requestElementUpdate() {
    if(!ticking) {
      reqAnimationFrame(updateElementTransform);
      ticking = true;
    }
  }

  function onPan(ev) {
    // el.className = '';
    // console.log(`ev.deltaX:${ev.deltaX},ev.deltaY:${ev.deltaY}`);
    if (ev.type == 'panstart') {
      console.log("first pan");

      START_X = transform.translate.x;
      START_Y = transform.translate.y;
      console.log(`START_X: ${START_X}, START_Y: ${START_Y}`);

    }
    // console.log(ev);

    transform.translate = {
      x: START_X + ev.deltaX,
      y: START_Y + ev.deltaY
    };
    //logical settings translate x and y should > 0, and not be out of the parent
    transform.translate.x = transform.translate.x < 0 ? 0 : transform.translate.x;
    // transform.translate.x = transform.translate.x < el.
    requestElementUpdate();

  }

  var initScale = 1;
  function onPinch(ev) {
    console.log(ev.type);

    if(ev.type == 'pinchstart') {
      initScale = transform.scale || 1;
    }

    // el.className = '';
    transform.scale = initScale * ev.scale;

    requestElementUpdate();

  }

  var initAngle = 0;
  function onRotate(ev) {
    if(ev.type == 'rotatestart') {
      initAngle = transform.angle || 0;
    }

    // el.className = '';
    transform.rz = 1;
    transform.angle = initAngle + ev.rotation;
    requestElementUpdate();

  }

  function onSwipe(ev) {
    var angle = 50;
    transform.ry = (ev.direction & Hammer.DIRECTION_HORIZONTAL) ? 1 : 0;
    transform.rx = (ev.direction & Hammer.DIRECTION_VERTICAL) ? 1 : 0;
    transform.angle = (ev.direction & (Hammer.DIRECTION_RIGHT | Hammer.DIRECTION_UP)) ? angle : -angle;

    clearTimeout(timer);
    timer = setTimeout(function () {
    }, 300);
    requestElementUpdate();

  }

  function onTap(ev) {
    transform.rx = 1;
    transform.angle = 25;

    clearTimeout(timer);
    timer = setTimeout(function () {
    }, 200);
    requestElementUpdate();

  }

  function onDoubleTap(ev) {
    transform.rx = 1;
    transform.angle = 80;

    clearTimeout(timer);
    timer = setTimeout(function () {
    }, 500);
    requestElementUpdate();

  }
});
