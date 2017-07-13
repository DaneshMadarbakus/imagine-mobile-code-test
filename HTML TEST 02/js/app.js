$(()=>{
  this.currentState = 'blue';
  this.content = '.portraitTop, .portraitLeft, .portraitRight, .landscapeLeft, .landscapeTop, .landscapeBot';
  setupPage();
  checkPhoneOrientation();
  $(window).on('orientationchange', checkPhoneOrientation);
  // $(window).on('orientationchange', handleTilt);
  window.addEventListener('deviceorientation', deviceOrientationListener);
  $('.portraitLeft, .landscapeTop').on('click', tiltedLeft.bind(this));
  $('.portraitRight, .landscapeBot').on('click', tiltedRight.bind(this));
});

function checkPhoneOrientation () {
  if(window.innerHeight > window.innerWidth){
    $('.landscape').hide();
    $('.portrait').show();
  } else {
    $('.landscape').show();
    $('.portrait').hide();
  }
}

function deviceOrientationListener (event) {
  if (event.gamma <= -45 ){
    tiltedLeft();
  } else if (event.gamma >= 45){
    tiltedRight();
  }
}

function setupPage () {
  $('.portraitTop, .landscapeLeft').css({'background-image': `url('./page-BLUE/BLUE.jpg')`, 'background-color': '#219aed'});
  $('.portraitLeft').css({'background-image': `url('./page-BLUE/portrait/LEFT-GREEN.jpg')`, 'background-color': '#20ed64'});
  $('.portraitRight').css({'background-image': `url('./page-BLUE/portrait/RIGHT-YELLOW.jpg')`, 'background-color': '#eee621'});
  $('.landscapeTop').css({'background-image': `url('./page-BLUE/landscape/LEFT-GREEN.jpg')`, 'background-color': '#20ed64'});
  $('.landscapeBot').css({'background-image': `url('./page-BLUE/landscape/RIGHT-YELLOW.png')`, 'background-color': '#eee621'});
}

function tiltedLeft () {
  switch (this.currentState) {
    case 'blue':
      this.currentState = 'green';
      $(this.content).fadeTo('slow', 0.2, changeToGreen).fadeTo('slow', 1);
      break;
    case 'green':
      this.currentState = 'red';
      $(this.content).fadeTo('slow', 0.2, changeToRed).fadeTo('slow', 1);
      break;
    case 'red':
      this.currentState = 'yellow';
      $(this.content).fadeTo('slow', 0.2, changeToYellow).fadeTo('slow', 1);
      break;
    case 'yellow':
      this.currentState = 'blue';
      $(this.content).fadeTo('slow', 0.2, changeToBlue).fadeTo('slow', 1);
      break;
  }

}
function tiltedRight () {
  switch (this.currentState) {
    case 'blue':
      this.currentState = 'yellow';
      $(this.content).fadeTo('slow', 0.2, changeToYellow).fadeTo('slow', 1);
      break;
    case 'yellow':
      this.currentState = 'red';
      $(this.content).fadeTo('slow', 0.2, changeToRed).fadeTo('slow', 1);
      break;
    case 'red':
      this.currentState = 'green';
      $(this.content).fadeTo('slow', 0.2, changeToGreen).fadeTo('slow', 1);
      break;
    case 'green':
      this.currentState = 'blue';
      $(this.content).fadeTo('slow', 0.2, changeToBlue).fadeTo('slow', 1);
      break; 
  }
}

function changeToGreen(){
  $('.portraitTop, .landscapeLeft').css({'background-image': `url('./page-GREEN/GREEN.jpg')`, 'background-color': '#20ed64'});
  $('.portraitLeft').css({'background-image': `url('./page-GREEN/portrait/LEFT-RED.jpg')`, 'background-color': '#ee2034'});
  $('.portraitRight').css({'background-image': `url('./page-GREEN/portrait/RIGHT-BLUE.jpg')`, 'background-color': '#219aed'});
  $('.landscapeTop').css({'background-image': `url('./page-GREEN/landscape/LEFT-RED.jpg')`, 'background-color': '#ee2034'});
  $('.landscapeBot').css({'background-image': `url('./page-GREEN/landscape/RIGHT-BLUE.png')`, 'background-color': '#219aed'});
}
function changeToRed(){
  $('.portraitTop, .landscapeLeft').css({'background-image': `url('./page-RED/RED.jpg')`, 'background-color': '#ee2034'});
  $('.portraitLeft').css({'background-image': `url('./page-RED/portrait/LEFT-YELLOW.jpg')`, 'background-color': '#eee621'});
  $('.portraitRight').css({'background-image': `url('./page-RED/portrait/RIGHT-GREEN.jpg')`, 'background-color': '#20ed64'});
  $('.landscapeTop').css({'background-image': `url('./page-RED/landscape/LEFT-YELLOW.jpg')`, 'background-color': '#eee621'});
  $('.landscapeBot').css({'background-image': `url('./page-RED/landscape/RIGHT-GREEN.png')`, 'background-color': '#20ed64'});
}
function changeToYellow(){
  $('.portraitTop, .landscapeLeft').css({'background-image': `url('./page-YELLOW/YELLOW.jpg')`, 'background-color': '#eee621'});
  $('.portraitLeft').css({'background-image': `url('./page-YELLOW/portrait/LEFT-BLUE.jpg')`, 'background-color': '#219aed'});
  $('.portraitRight').css({'background-image': `url('./page-YELLOW/portrait/RIGHT-RED.jpg')`, 'background-color': '#ee2034'});
  $('.landscapeTop').css({'background-image': `url('./page-YELLOW/landscape/LEFT-BLUE.jpg')`, 'background-color': '#219aed'});
  $('.landscapeBot').css({'background-image': `url('./page-YELLOW/landscape/RIGHT-RED.png')`, 'background-color': '#ee2034'});
}
function changeToBlue(){
  $('.portraitTop, .landscapeLeft').css({'background-image': `url('./page-BLUE/BLUE.jpg')`, 'background-color': '#219aed'});
  $('.portraitLeft').css({'background-image': `url('./page-BLUE/portrait/LEFT-GREEN.jpg')`, 'background-color': '#20ed64'});
  $('.portraitRight').css({'background-image': `url('./page-BLUE/portrait/RIGHT-YELLOW.jpg')`, 'background-color': '#eee621'});
  $('.landscapeTop').css({'background-image': `url('./page-BLUE/landscape/LEFT-GREEN.jpg')`, 'background-color': '#20ed64'});
  $('.landscapeBot').css({'background-image': `url('./page-BLUE/landscape/RIGHT-YELLOW.png')`, 'background-color': '#eee621'});
}