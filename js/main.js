$(function() {
  // Navbar
  $(".navbar-toggler").click(function () {
    $(this).find(".navbar-toggler-icon-bars, .navbar-toggler-icon-x").toggle();
  });

  $(".navbar-collapse").on("hidden.bs.collapse", function () {
    $(".navbar-toggler").find(".navbar-toggler-icon-bars").show();
    $(".navbar-toggler").find(".navbar-toggler-icon-x").hide();
  });

  $(".navbar-collapse").on("hidden.bs.collapse", function () {
    $(".navbar-toggler").find(".navbar-toggler-icon-bars").show();
    $(".navbar-toggler").find(".navbar-toggler-icon-x").hide();
  });


  // Main Section

  function updateHeader() {
    const header = document.getElementById('main-header');
    const isDesktop = window.innerWidth >= 768; // Adjust the width as needed

    if (isDesktop) {
        // Change to two separate h1 elements
        header.innerHTML = '';
        const part1 = document.createElement('h1');
        part1.textContent = 'Make';
        const part2 = document.createElement('h1');
        part2.textContent = 'remote work';
        header.appendChild(part1);
        header.appendChild(part2);
    } else {
        // Change back to the original single h1
        header.innerHTML = 'Make remote work';
    }
}

// Initial check
updateHeader();

// Listen for resize events
window.addEventListener('resize', updateHeader);

    // replacing the hero image when screen resizes

    const heroImage = document.querySelector('.hero-img');
    console.log(heroImage.src);
    
    function replaceImage() {
      if (window.innerWidth < 768) {
        heroImage.style.display = 'none';
        // set mobile image
        heroImage.src = '../images/image-hero-mobile.png';
        heroImage.style.display = 'block';
      } else {
        // set desktop image
        heroImage.src = '../images/image-hero-desktop.png';
        heroImage.style.display = 'block';
      }
    }
    
    window.addEventListener('resize', replaceImage);
    replaceImage();
 

});
