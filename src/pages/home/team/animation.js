import $ from "jquery";
export const toggleLayers = (show) => {
  $("#upperlayer").css("transform", `scaleY(${show ? 1 : 0})`);
  $("#bottomlayer").css("transform", `scaleY(${show ? 1 : 0})`);
};

export const togglecircle = (show, oldid) => {
  setTimeout(() => {
    $("#circle" + oldid).css("transform", `scale(${show ? 1 : 0})`);
  }, 400);
};

export const toggleline = (show, oldid) => {
  setTimeout(() => {
    $("#line" + oldid).css("width", show ? "94.5%" : "0px");
  }, 600);
};
