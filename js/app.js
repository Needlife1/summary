let zSpacing = -1000;
let lastPos = zSpacing / 5;
const frames = document.getElementsByClassName("frame");
const arrFrames = Array.from(frames);
const depthEachElement = Array.from(
  { length: arrFrames.length },
  (_, i) => i * zSpacing + zSpacing
);

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;

  lastPos = top;

  arrFrames.forEach((frame, i) => {
    depthEachElement[i] += delta * -5;
    const transform = `translateZ(${depthEachElement[i]}px)`;
    let opacity = depthEachElement[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;

    frame.style.transform = transform;
    frame.style.opacity = opacity;
  });
};

window.scrollTo(0, 1);
