window.addEventListener("DOMContentLoaded", getData);

function getData() {
	fetch("http://popispop.net/anniiss_wordpress/wp-json/wp/v2/shows?_embed")
		.then(res => res.json())
		.then(handleData);

}

function handleData(myData) {
	//1.loop
	myData.forEach(getShow);
}

function getShow(event) {
	console.log(event);

	const imgPath = event._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

	//2. Clone a template
	const template = document.querySelector(".myTemplate").content;
	const postCopy = template.cloneNode(true);
	postCopy.querySelector(".artist_name").textContent = event.slug;
	postCopy.querySelector(".venue_name").textContent = event.venue;
	postCopy.querySelector(".eventDate").textContent = event.event_date;
	postCopy.querySelector(".eventDescription").textContent = event.description;
	postCopy.querySelector(".eventAddress").textContent = event.address;


	//	postCopy.querySelector(".description").textContent = event.description;
	//
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath);

	img.setAttribute("alt", "image of the book");
	document.querySelector(".shows").appendChild(postCopy);


}
