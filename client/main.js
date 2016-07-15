import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

function getStyle(obj,styleName){
  if(obj.currentStyle){
    return obj.currentStyle[styleName];
  }else{
    return getComputedStyle(obj,null)[styleName];
  }
}


Template.panbox.onCreated(function () {
});

Template.panbox.helpers({
  // 'hammerInitOptions': {
  //   recognizers: []
  // },
  // 'configureHammer': function () {
  //   return function (hammer, templateInstance) {
  //     var pan = new Hammer.Pan({ threshold: 0, pointers: 0 });
  //     var rotate = new Hammer.Rotate({ threshold: 0 }).recognizeWith(pan);
  //     var pinch = new Hammer.Pinch({ threshold: 0 }).recognizeWith([pan, rotate]);
  //
  //     // we want to detect both the same time
  //     pinch.recognizeWith(rotate);
  //     // pinch.dropRecognizeWith(rotate);
  //     // add to the Manager
  //     hammer.add([pan, pinch, rotate]);
  //     return hammer;
  //   };
  // },
  // "templateGestures": {
  //   // 'tap div': function (event, templateInstance) {
  //   //   console.log('tap');
  //   //   console.log(event);
  //   // },
  //   // 'press div': function (event, templateInstance) {
  //   //   console.log('press');
  //   //   console.log(event);
  //   // },
  //   'pan .drag-ball': function (event, templateInstance) {
  //     if (event.isFinal) {
  //       event.target.style.webkitTransform = "translate3d(" + event.center.x + "," + event.center.y + ",0)";
  //     } else if (event.isFirst){
  //       event.preventDefault();
  //     } else {
  //       //事件元素父节点基于body的偏移量
  //       var box = document.querySelector('.panbox-box');
  //       var boxX = box.offsetLeft, boxY = box.offsetTop;
  //       var boxW = parseInt(getStyle(box, 'width')), boxH = parseInt(getStyle(box, 'height'));
  //       //事件元素基于body的偏移量
  //       var offx = event.center.x, offy = event.center.y;
  //       //时间元素的宽高
  //       var ballW = parseInt(getStyle(event.target, 'width'));
  //       var ballH = parseInt(getStyle(event.target, 'height'));
  //       //声明位移量
  //       var transX = offx-boxX-ballW/2 , transY = offy-boxY-ballH/2;
  //       if (transX < 0) {
  //         transX = 0;
  //       } else if (transX > boxW-ballW) {
  //         transX = boxW-ballW;
  //       }
  //       if (transY < 0) {
  //         transY = 0;
  //       } else if (transY > boxH-ballH) {
  //         transY = boxH-ballH
  //       }
  //
  //       $(event.target).attr('transx', transX);
  //       $(event.target).attr('transy', transY);
  //
  //       var transform = event.target.style.webkitTransform;
  //       if (!transform) {
  //         transform = "translate3d(" + transX + "px," + transY + "px,0)";
  //       } else if ( transform && transform.indexOf('translate3d') == -1) {
  //         transform += "translate3d(" + transX + "px," + transY + "px,0)";
  //       } else {
  //         var pattern = /translate3d\(.*?\)/i;
  //         transform = transform.replace(
  //           pattern,
  //           "translate3d(" + transX + "px," + transY + "px,0)"
  //         );
  //       }
  //       event.target.style.webkitTransform = transform;
  //       document.querySelector('#textarea').textContent = transX+", "+transY+"transform:"+transform;
  //     }
  //   },
  //   'pinch .drag-ball': function(event, templateInstance) {
  //     // if (event.isFirst) {
  //     //   event.preventDefault();
  //     // } else if (event.isFinal) {
  //     //   document.querySelector('#textarea').textContent = 'pinch';
  //     //
  //     //   var originWidth = $(event.target).attr('originWidth');
  //     //   console.log(originWidth);
  //     //   var currentScale = $(event.target).attr('scale') || 1.0;
  //     //   var eventScale = event.scale;
  //     //   var computScale = currentScale*eventScale;
  //     //   if (computScale < 1.0) {
  //     //     computScale = 1.0;
  //     //   }
  //     //   event.target.style.width = originWidth * computScale + "px";
  //     //   $(event.target).attr('scale', computScale);
  //     // }
  //
  //       var currentScale = $(event.target).attr('scale') || 1.0;
  //
  //       var transform = {}
  //       transform.scale = currentScale * event.scale;
  //
  //       requestElementUpdate();
  //
  //   },
  //   'rotate .drag-ball': function(event, templateInstance) {
  //     // console.log(event);
  //   }
  // },
});

Template.panbox.events({
  'click button'(event, instance) {


  },
});
