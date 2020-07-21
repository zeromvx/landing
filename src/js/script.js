const navList = document.querySelector(".nav-list");
const navbar = document.querySelector(".navbar");
const toggleBtn = document.querySelector(".toggle-btn");
const icon = document.querySelector(".toggle-icon");
const navbarBtn = document.querySelector(".navbar__btn");

toggleBtn.addEventListener("click", () => {
	navList.classList.toggle("nav-list-active");
	icon.classList.toggle("open");

	if (navList.classList.contains("nav-list-active")) {
		navList.style.height = "300px";

		for (let item of navList.children) {
			item.style.opacity = 1;
		}
	} else {
		navList.style.height = "0";

		for (let item of navList.children) {
			item.style.opacity = 0;
		}
	}
});

document.addEventListener("scroll", () => {

	if (pageYOffset > navbar.offsetHeight) {
		navbar.style.background = "#59687C";
		navbar.style.boxShadow =
			"0 7px 10px rgba(0, 9, 128, 0.035), 0 9px 18px rgba(0, 9, 128, 0.05)";
		navbarBtn.classList.add('navbar__btn--active');
	} else {
		navbar.style.background = "transparent";
		navbar.style.boxShadow = "none";
		navbarBtn.classList.remove('navbar__btn--active');
	}
});
