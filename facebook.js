// Facebook
let PromotedContentCleanUp = () => {
  document.querySelectorAll("div[role=feed] a[aria-label='Sponsored']").forEach((item) => {
    item.closest("div[data-pagelet^='FeedUnit_'").remove();
  });
};

document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
document.addEventListener("DOMNodeInserted", PromotedContentCleanUp);
