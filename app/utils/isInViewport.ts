export const isInViewport = (element: HTMLDivElement) => {
  const rect = element.getBoundingClientRect();
  console.log("rect", rect);
  console.log("window.innerHeight", window.innerHeight);
  return (
    rect.top <= window.innerHeight - 200
    // rect.left >= 0 &&
    // rect.bottom <=
    //   (window.innerHeight || document.documentElement.clientHeight) &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
