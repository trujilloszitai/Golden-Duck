const MoveBGFuntion = (containerID) => {
  var bgContainer = document.getElementById(containerID);
  window.onmousemove = function (e) {
    var x = e.clientX,
      y = e.clientY;
    bgContainer.style.backgroundPositionX = x + "px";
    bgContainer.style.backgroundPositionY = y + "px";
  };
};

export default MoveBGFuntion;
