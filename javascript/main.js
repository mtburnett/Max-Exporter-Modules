var blipp = require('blippar').blipp;
var imported3D = require('./3d_export.js');
var imports = {};

// ======================================================
// =                        BLIPP                       =
// ======================================================

blipp.getPeel()
  .setOrientation('portrait')
  .setType('fit')
  .setScale(100)
  .setOffset(0, 0);

// ======================================================
// =                        SCENE                       =
// ======================================================

var scene = blipp.addScene('default');
var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();
var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.004;

scene.on('create', function() {
  imports = imported3D.make(blipp, scene);
});

scene.on('show', function() {
  imported3D.animateScene();
});
