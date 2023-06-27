const mobileNav = () => {
	const headerBtn = document.querySelector('.header__bars');
	const mobileNav = document.querySelector('.mobile-nav');
    const mobileLink = document.querySelectorAll('.mobile-nav__link');
	
	//state
	let isMobileNavOpen = false; 

	headerBtn.addEventListener("click",() => {
		isMobileNavOpen = !isMobileNavOpen;
		if(isMobileNavOpen)
		{
			mobileNav.style.display ='flex';
			document.body.style.overflowY = 'hidden';
		}
		else {
			mobileNav.style.display ='none';
			document.body.style.overflowY = 'auto';
		}
	});

	mobileLink.forEach(link => {
		link.addEventListener('click', () =>{
			mobileNav.style.display ='none';
			isMobileNavOpen = false;
			document.body.style.overflowY = 'auto';
		});
	})
}

export default mobileNav;