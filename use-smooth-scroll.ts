export function useSmoothScroll() {
  const scrollToElement = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return scrollToElement;
}
