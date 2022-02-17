// Google
let PromotedContentCleanUp = () => {
  let el = document.querySelector("#center_col #tvcap");
  !!el && el.remove();
};

document.addEventListener("load", PromotedContentCleanUp);
document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
document.addEventListener("DOMNodeInserted", PromotedContentCleanUp);
