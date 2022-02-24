// Twitter
let PromotedContentCleanUp = () => {
  document.querySelectorAll("main article span").forEach((item) => {
    if (item.innerHTML.trim().indexOf("Promoted") === 0) {
      item.closest('.css-1dbjc4n.r-j5o65s.r-qklmqi.r-1adg3ll.r-1ny4l3l').remove(); // Promoted tweet
      item.closest('.css-1dbjc4n.r-1adg3ll.r-1ny4l3l').remove(); // Promoted Who to follow
    }
  });
};

PromotedContentCleanUp();
document.addEventListener("DOMContentLoaded", PromotedContentCleanUp);
new MutationObserver(PromotedContentCleanUp).observe(document.body, { attributes: false, childList: true, subtree: true });
