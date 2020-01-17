var preload_image = function(src){
  jQuery("<img />").attr("src", src).hide().appendTo("body").on("load", function(){
    jQuery(this).remove();
  });
};

jQuery.fn.ifExists = function(fn, else_fn){
  this.length !== 0 ? fn(this) : (else_fn && else_fn());
  return this;
};

var is_ie = function(){
  return !!navigator.userAgent.match(/Trident/);
};


/*
Responsive.js
Copyright (c) 2015 necota
This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

var buildWidthMediaQuery = function(min, max){
  var media = "(min-width: " + min + "px)";
  if(max !== null) media += " and (max-width: " + max + "px)";
  return media;
};

var matchWidthMediaQuery = function(min, max){
  return window.matchMedia(buildWidthMediaQuery(min, max)).matches;
}

var buildHeightMediaQuery = function(min, max){
  var media = "(min-height: " + min + "px)";
  if(max !== null) media += " and (max-height: " + max + "px)";
  return media;
};

var matchHeightMediaQuery = function(min, max){
  return window.matchMedia(buildHeightMediaQuery(min, max)).matches;
}

var responsive = (function(){
  var sets = [];

  window.addEventListener("resize", function(){
    sets.forEach(function(set, key){
      var widthQuery = window.matchMedia(set.media);

      if(widthQuery.matches){
        set.fn(!set.prevMatch);
      }
      set.prevMatch = widthQuery.matches;
    });
  }, false);

  return function(min, max, fn){
    sets.push({
      media: buildWidthMediaQuery(min, max),
      fn: fn,
      prevMatch: false
    });
  };
})();

responsive.fire = function(){
  (function(e){
    e.initEvent("resize", true, true);
    window.dispatchEvent(e);
    setTimeout(function(){window.dispatchEvent(e);}, 0);
  })(document.createEvent("HTMLEvents"));
};
