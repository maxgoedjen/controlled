function addControls(event) {
    console.log("OK");
    var video_elements = document.getElementsByTagName("video");
    for (var i=0; i<video_elements.length; i++) {
        video_elements[i].setAttribute("controls", "controls");
    }
}
document.addEventListener("DOMSubtreeModified", addControls);
document.addEventListener("DOMContentLoaded", addControls);
