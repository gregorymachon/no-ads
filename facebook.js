// Facebook
let PromotedContentCleanUp = () => {
  document.querySelectorAll("div[role=feed] a[aria-label='Sponsored']").forEach((item) => {
    item.closest("div[data-pagelet^='FeedUnit_'").remove();
  });
};

PromotedContentCleanUp();
document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
new MutationObserver(PromotedContentCleanUp).observe(document.body, { attributes: false, childList: true, subtree: true });
