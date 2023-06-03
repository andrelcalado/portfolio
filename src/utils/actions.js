export const goToSection = (secId) => {
  const sections = document.querySelectorAll("[data-js=section]");

  sections?.forEach((item) => {
    item.id === secId
      ? item.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      : null;
  });
};

export const toggleHtmlScroll = () => {
  const htmlDOM = document.querySelector("html");

  htmlDOM.classList.toggle("hideScroll");
};
