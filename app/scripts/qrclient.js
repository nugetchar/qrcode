var QRClient = function() {
  var currentCallback;
  var worker = new Worker('./scripts/jsqrcode/qrworker.js');
  worker.addEventListener('message', function(e){
    currentCallback(e.data);
    //worker.terminate();
  }, false);
  this.decode = function(imageData, callback) {
    currentCallback = currentCallback || callback;
    worker.postMessage(imageData);
  };
 };