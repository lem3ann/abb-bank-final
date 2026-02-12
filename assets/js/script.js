 const ranges = document.querySelectorAll('.my-range');

    ranges.forEach(range => {
      const updateRange = () => {
        const val = range.value;
        const min = range.min || 0;
        const max = range.max || 100;
        const percent = ((val - min) / (max - min)) * 100;
        range.style.background = `linear-gradient(to right, #2d63d6 ${percent}%, #e5e5e5 ${percent}%)`;
      }

      range.addEventListener('input', updateRange);
      updateRange(); // səhifə yüklənəndə gradient olsun
    });
