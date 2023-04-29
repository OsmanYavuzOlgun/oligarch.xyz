document.addEventListener("DOMContentLoaded", function () {});

const sectionNumber1 = document.getElementById("numberOne");
const sectionNumber2 = document.getElementById("numberTwo");
const sectionNumber3 = document.getElementById("numberThree");
const sectionNumber4 = document.getElementById("numberFour");
setTimeout(function () {
  document.querySelector("#loading").style.display = "none";
  /*  var sections = document.getElementsByTagName("section:not(click-open-section)");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "block";
  } */
  var sectionSidebar = document.querySelectorAll(
    ".click-open-section, .header"
  );
  for (let i = 0; i < sectionSidebar.length; i++) {
    sectionSidebar[i].style.display = "block";
  }
}, 3500);

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
  sectionNumber1.classList.add("pulse-number");
  sectionNumber2.classList.remove("pulse-number");
  sectionNumber3.classList.remove("pulse-number");
  sectionNumber4.classList.remove("pulse-number");

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
  sectionNumber1.classList.remove("pulse-number");
  sectionNumber2.classList.add("pulse-number");
  sectionNumber3.classList.remove("pulse-number");
  sectionNumber4.classList.remove("pulse-number");

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
  sectionNumber1.classList.remove("pulse-number");
  sectionNumber2.classList.remove("pulse-number");
  sectionNumber3.classList.add("pulse-number");
  sectionNumber4.classList.remove("pulse-number");

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
  sectionNumber1.classList.remove("pulse-number");
  sectionNumber2.classList.remove("pulse-number");
  sectionNumber3.classList.remove("pulse-number");
  sectionNumber4.classList.add("pulse-number");

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
