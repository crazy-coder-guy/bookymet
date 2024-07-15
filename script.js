 // JavaScript for increment and decrement buttons
    let durationValue = 1.0; // initial duration value in hours

    document.getElementById('incrementDuration').addEventListener('click', function() {
        durationValue += 0.5; // increase duration by 0.5 hours
        updateDuration();
    });

    document.getElementById('decrementDuration').addEventListener('click', function() {
        if (durationValue > 0.5) {
            durationValue -= 0.5; // decrease duration by 0.5 hours, minimum 0.5 hours
            updateDuration();
        }
    });

    function updateDuration() {
        document.getElementById('durationValue').textContent = durationValue.toFixed(1);
    }
     // Optional: Add smooth scrolling behavior for the horizontal scroll container
     const container = document.querySelector('.offers-container');

     let isDown = false;
     let startX;
     let scrollLeft;
 
     container.addEventListener('mousedown', (e) => {
         isDown = true;
         startX = e.pageX - container.offsetLeft;
         scrollLeft = container.scrollLeft;
     });
 
     container.addEventListener('mouseleave', () => {
         isDown = false;
     });
 
     container.addEventListener('mouseup', () => {
         isDown = false;
     });
 
     container.addEventListener('mousemove', (e) => {
         if (!isDown) return;
         e.preventDefault();
         const x = e.pageX - container.offsetLeft;
         const walk = (x - startX) * 3; // Adjust scrolling speed
         container.scrollLeft = scrollLeft - walk;
     });