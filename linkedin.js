// LinkedIn
let PromotedContentCleanUp = () => {
  document.querySelectorAll("span.feed-shared-actor__description, span.feed-shared-actor__sub-description").forEach((item) => {
    if (item.innerHTML.trim() === "Promoted") {
      item.closest("div[data-id^='urn:li:activity']").remove();
    }
  });
};

PromotedContentCleanUp();
document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
new MutationObserver(PromotedContentCleanUp).observe(document.body, { attributes: false, childList: true, subtree: true });
