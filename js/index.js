function fade() {
  $('.preloader').fadeOut("slow");
  }
  setTimeout(fade, 3000);
  
  $(".searchButton").on("click", function(){
    $(".searchButton").toggleClass("active");
    if ($(".searchButton").hasClass("active")) {
      $(".searchBar").css("height", "100vh");
      $("#searchForm").css("opacity","1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    }
    else {
      $(".searchBar").css('height', "0vh");
      $("#searchForm").css("opacity","0");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
  });
  
  $(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });
   
  var acc = document.getElementsByClassName("accordion");
  
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
  
      this.classList.toggle("active");
  
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }