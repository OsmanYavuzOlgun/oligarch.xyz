document.addEventListener("DOMContentLoaded", function () {});

setTimeout(function () {
  document.querySelector("#loading").style.display = "none";
  /*  var sections = document.getElementsByTagName("section:not(click-open-section)");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "block";
  } */
  var sectionSidebar = document.querySelectorAll(
    ".click-open-section, .header"
  );
  var introduction = document.querySelectorAll(".introduction");
  /*   var boomsAnimation = document.querySelectorAll(
    ".all-booms"
  ); */
  console.log(introduction);
  for (let i = 0; i < sectionSidebar.length; i++) {
    sectionSidebar[i].style.display = "block";
    introduction[i].style.display = "block";
    /*  boomsAnimation[i].style.display = "block"; */
  }
}, 100);

function toggleMenu() {
  const menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}

var transition = 40;
var dots = 12;
var lgStars = 2;
var smStars = 2;

function nJoin(n, markup) {
  var fn = typeof markup == "function" ? markup : (e) => markup;
  return new Array(n).join(" ").split(" ").map(fn).join("");
}

// Transition layers
Array.from(document.querySelectorAll(".sky-level"))
  .slice(0, -1)
  .forEach((layer) => {
    layer.innerHTML = nJoin(transition, "<div></div>");
  });

// Stars and dots
var bigStars = nJoin(
  lgStars,
  `
        <span class="star star--lg">
            <span class="star__part"></span>
            <span class="star__part"></span>
        </span>
        `
);

var smallStars = nJoin(
  smStars,
  `
        <span class="star star--sm">
            <span class="star__part"></span>
            <span class="star__part"></span>
        </span>
        `
);

var dotStars = nJoin(dots, (e) => {
  var isBlinking = Math.random() < 0.33;
  var className = "dot";
  isBlinking && (className += " dot--blinking");
  return `
            <span class="${className}"></span>
        `;
});

document.getElementById("stars").innerHTML += dotStars + smallStars + bigStars;

function showIntroduction() {
  var section = document.getElementById("introduction");
  section.style.display = "block";

  var otherSections = document.querySelectorAll(
    "section:not(#introduction):not(#sidebar):not(.header)"
  );
  for (var i = 0; i < otherSections.length; i++) {
    otherSections[i].style.display = "none";
  }
}

isWorking = false;
function showAuction() {
  var section = document.getElementById("auction");
  section.style.display = "block";

  var otherSections = document.querySelectorAll(
    "section:not(#auction):not(#sidebar):not(.header)"
  );
  console.log(otherSections);
  for (var i = 0; i < otherSections.length; i++) {
    otherSections[i].style.display = "none";
  }
}

function showTeam() {
  var section = document.getElementById("team");
  section.style.display = "block";

  var otherSections = document.querySelectorAll(
    "section:not(#team):not(#sidebar):not(.header)"
  );
  console.log(otherSections);
  for (var i = 0; i < otherSections.length; i++) {
    otherSections[i].style.display = "none";
  }
}
function showGallery() {
  var section = document.getElementById("gallery");
  section.style.display = "block";

  var otherSections = document.querySelectorAll(
    "section:not(#gallery):not(#sidebar):not(.header)"
  );
  console.log(otherSections);
  for (var i = 0; i < otherSections.length; i++) {
    otherSections[i].style.display = "none";
  }
}

var lightShift = document.getElementById("light");
var body = document.getElementById("all-body");
var hamburger = document.getElementById("hamburger");

function light() {
  if (lightShift.checked) {
    body.classList.add("light-vision");
    hamburger.classList.add("light");
  } else {
    body.classList.remove("light-vision");
    hamburger.classList.remove("light");
  }
}

(function ($) {
  $(function () {


    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });


    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({height: n + "px"});

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }


  });
})(jQuery);
