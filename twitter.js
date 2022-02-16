// Twitter
let PromotedContentCleanUp = () => {
  document.querySelectorAll("main article span").forEach((item) => {
    if (item.innerHTML.trim() === "Promoted") {
      item.closest('article').remove();
    }
  });
};

document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
document.addEventListener("DOMNodeInserted", PromotedContentCleanUp);
