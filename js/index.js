function addHoverEffect(itemClass) {
  const items = document.querySelectorAll(itemClass);

  items.forEach(function (item, index) {
    const itemText = item.querySelector('.item-text');

    if (itemText) {
      if (window.innerWidth < 768) {
        let isMobileActivated = false;

        function handleMobileActivation() {
          const rect = item.getBoundingClientRect();
          const offset = window.innerHeight / 2.5;

          if (!isMobileActivated && rect.top < offset && rect.bottom >= 0) {
            isMobileActivated = true;

            itemText.style.display = 'none';
            item.classList.add(`${itemClass.slice(1)}-${index + 1}`);
          }

          // Odebrat třídu, pokud je offset větší než 60
          if (isMobileActivated && (rect.top >= offset || rect.bottom <= 320)) {
            isMobileActivated = false;

            itemText.style.display = 'block';
            item.classList.remove(`${itemClass.slice(1)}-${index + 1}`);
          }
        }

        window.addEventListener('scroll', handleMobileActivation);
        window.addEventListener('touchmove', handleMobileActivation);
      } else {
        item.addEventListener('mouseover', function () {
          itemText.style.display = 'none';
          item.classList.add(`${itemClass.slice(1)}-${index + 1}`);
        });

        item.addEventListener('mouseout', function () {
          itemText.style.display = 'block';
          item.classList.remove(`${itemClass.slice(1)}-${index + 1}`);
        });
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  addHoverEffect('.item');
});
