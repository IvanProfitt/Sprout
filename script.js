



document.addEventListener("DOMContentLoaded", function () {
    const fancyElements = document.querySelectorAll(".fancy");
  
    fancyElements.forEach((text) => {
      const strText = text.textContent;
      text.textContent = "";
  
      for (let i = 0; i < strText.length; i++) {
        const span = document.createElement('span');
        span.className = 'effect';
        span.textContent = strText[i];
        text.appendChild(span);
      }
  
      const spans = text.querySelectorAll('.effect');
  
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          text.classList.add('visible');
          observer.disconnect();
          initiateAnimation(spans);
        }
      }, { rootMargin: "-10% 0%" }); // Adjust the rootMargin as needed
  
      observer.observe(text);
  
      function initiateAnimation(spans) {
        spans.forEach((span, index) => {
          span.addEventListener('animationend', () => {
            span.classList.add('pull-up');
          });
  
          setTimeout(() => {
            span.classList.add('pull-up');
          }, index * 60); // Adjust the delay as needed
        });
      }
    });
  });
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    let openAccordion = null;

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const arrow = this.querySelector('.arrow');

            if (openAccordion && openAccordion !== accordionItem) {
                // Close the currently open accordion
                openAccordion.classList.remove('active');
                openAccordion.querySelector('.accordion-content').style.maxHeight = '0';
                openAccordion.querySelector('.arrow').classList.remove('clicked');
            }

            // Toggle active class for styling
            accordionItem.classList.toggle('active');

            // Toggle visibility of content
            accordionContent.style.maxHeight = accordionItem.classList.contains('active') ? accordionContent.scrollHeight + 'px' : '0';

            // Rotate the arrow with transition
            arrow.classList.toggle('clicked');

            // Update the open accordion
            openAccordion = accordionItem;
        });
    });
});



