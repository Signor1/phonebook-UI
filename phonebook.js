//DOM selectors
const bar = document.getElementById('toggle'),
	closeBtn = document.getElementById('close'),
	asideNav = document.querySelector('.aside-nav'),

	formBtn = document.getElementById('toggleForm'),
	closeForm = document.querySelectorAll('#closeForm'),
	form = document.querySelector('.add-contact'),

	searchBtn = document.getElementById('toggleSearch'),
	closeSearch = document.getElementById('closeSearch'),
	search = document.querySelector('.search'),

	moreBtn = document.getElementById('toggleMore'),
	more = document.querySelector('.more');

//click event for more button functionality
moreBtn.addEventListener('click', () => {
	more.style.right = '0';
});
//click event for more settings functionality
more.addEventListener('click', (e) => {
	e.target.style.right = "-100%";
});

//click event for search modal
searchBtn.addEventListener('click', () => {
	search.style.bottom = "0";
});

//click event for close search modal
closeSearch.addEventListener('click', () => {
	search.style.bottom = '-100%';
});

//click event for add contact modal
formBtn.addEventListener('click', (e) => {
	e.preventDefault();
	form.style.top = '0';
});
// click event for close add contact modal 
closeForm.forEach(close => close.addEventListener('click', () => {
	form.style.top = '-100%';
}));

// Side bar click to show 
bar.addEventListener('click', (e) => {
	e.preventDefault();
	asideNav.style.left = '0';
});
// click for hiding side bar 
closeBtn.addEventListener('click', (e) => {
	e.preventDefault();
	asideNav.style.left = '-100%';
});
//click for hiding side nav
asideNav.addEventListener('click', (e) => {
	e.preventDefault();
	e.target.style.left = "-100%";
});