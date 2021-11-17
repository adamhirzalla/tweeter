$(document).ready(()=>{

  // TO AUTO-GROW TWEETS TEXT AREA //
  //
  // On document ready:
  // Listen for input events on #tweet-text and run callback accordingly
  // this === <textarea>
  // for each of target, manipulate height
  // Listen for input events and change the height depending
  // on scrollheight of textarea
  $("#tweet-text")
    .each(function() {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
});