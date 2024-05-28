
      function rotateIcon(element) {
        var icon = element.querySelector('#icon');
        if (icon.classList.contains('rotate-up')) {
          icon.classList.remove('rotate-up');
        } else {
          icon.classList.add('rotate-up');
        }
      }
    