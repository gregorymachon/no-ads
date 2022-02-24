// Google
let PromotedContentCleanUp = () => {
  let el = document.querySelector("#center_col #tvcap");
  !!el && el.remove();
};

PromotedContentCleanUp();
document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
