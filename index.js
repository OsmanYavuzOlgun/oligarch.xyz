setTimeout(function () {
  document.querySelector("#loading").style.display = "none";
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "block";
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
