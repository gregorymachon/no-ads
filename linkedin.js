let LinkedInCleanUp = () => {
  document.querySelectorAll("span.feed-shared-actor__description, span.feed-shared-actor__sub-description").forEach((item) => {
    if (item.innerHTML.trim() === "Promoted") {
      item.parentElement.parentElement.parentElement.parentElement.remove();
    }
  });
};

document.addEventListener("DOMContentLoaded", LinkedInCleanUp);
document.querySelector("#main").addEventListener("DOMNodeInserted", LinkedInCleanUp);
