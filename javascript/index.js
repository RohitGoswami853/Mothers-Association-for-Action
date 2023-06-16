/*slideshow 1*/

var slideIndex = 0;
showSlides(); // call showslide method

function showSlides()
{
	var i;

	// get the array of divs' with classname image-sliderfade
	var slides = document.getElementsByClassName("image-sliderfade");
	
	

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length)
	{
		slideIndex = 1;
	}

	slides[slideIndex - 1].style.display = "block";

	// Change image every 5 seconds
	setTimeout(showSlides, 6000);
}

/*mission colours*/
document.getElementsByClassName("mission")[0].style.background="#333333";
document.getElementsByClassName("mission")[1].style.background="#ca4343";
document.getElementsByClassName("mission")[2].style.background="#981f1f";


document.getElementsByClassName("heading")[0].style.color="#6a6b6a";
document.getElementsByClassName("heading")[3].style.color="#6a6b6a";




/*slideshow 2*/
/*
var sIndex = 0;
sSlides(); // call showslide method



function sSlides()
{
	var x;

	// get the array of divs' with classname image-sliderfade
	var s = document.getElementsByClassName("member_box");
	
	

	for (x = 0; x < s.length; x++) {
		s[x].style.display = "none";
	}

	// increase by 1, Global variable
	sIndex++;

	// check for boundary
	if (sIndex > s.length)
	{
		sIndex = 1;
	}

	s[sIndex - 1].style.display = "block";

	setTimeout(sSlides, 12000);
}
*/