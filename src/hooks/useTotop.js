export default function useTotop(top = 0) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return handleScrollToTop;
}
