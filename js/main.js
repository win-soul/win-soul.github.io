// Preloader

window.onload = function() 
		{
			setTimeout(function() {
				let loader = document.getElementById('preloader');
				loader.classList.add('done');
				let auth = document.getElementById('bodyguard');
				auth.classList.add('load');
			}, 1200);
		}
		
// Main