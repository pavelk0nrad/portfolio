function addHoverEffect(itemClass) {
    const items = document.querySelectorAll(itemClass);
 

    items.forEach(function(item) {
        const hiddenText = item.querySelector('.text-hidden');

        
        if (hiddenText) {
            item.addEventListener('mouseover', function() {
                hiddenText.classList.remove('text-hidden');
                hiddenText.classList.add('blurred-background');
               
            });

            item.addEventListener('mouseout', function() {
                hiddenText.classList.remove('blurred-background');
                hiddenText.classList.add('text-hidden');
          
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    addHoverEffect('.item');
    addHoverEffect('.item-p');
});