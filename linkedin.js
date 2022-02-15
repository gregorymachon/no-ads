let LinkedInCleanUp = () => {
  document.querySelectorAll("span.feed-shared-actor__description, span.feed-shared-actor__sub-description").forEach((item) => {
    if (item.innerHTML.trim() === "Promoted") {
      let r = item.parentElement.parentElement.parentElement.parentElement;
      console.log(r);
      r.remove();
    }
  });
};

document.addEventListener("DOMContentLoaded", LinkedInCleanUp);
document.querySelector("#main").addEventListener("DOMNodeInserted", LinkedInCleanUp);
