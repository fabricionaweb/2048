// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

var i = 2;
while(i < 2048) {
    var imageObject = new Image();
    imageObject.src = 'meta/bg-'+ i +'.jpg';
    
    i *= 2;
}
