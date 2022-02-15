// LinkedIn
let PromotedContentCleanUp = () => {
  document.querySelectorAll("span.feed-shared-actor__description, span.feed-shared-actor__sub-description").forEach((item) => {
    if (item.innerHTML.trim() === "Promoted") {
      item.closest("div[data-id^='urn:li:activity']").remove();
    }
  });
};

document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
document.querySelector("#main").addEventListener("DOMNodeInserted", PromotedContentCleanUp);
