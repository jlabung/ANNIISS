window.addEventListener("DOMContentLoaded", getData);
//alert("hello");

function getData() {
	const urlParams = new URLSearchParams(window.location.search);
	const search = urlParams.get("search");
	//document.querySelector("h1").textContent = query

	const id = urlParams.get("id");
	const category = urlParams.get("category");

	console.log("id: " + id);

	if (search) {
		console.log("this is a search result")
		getSearchData();
	} else if (id) {
		getSingleMovie();
	} else if (category) {
		getCategoryData(category);
		console.log("you should be showing category", category);

	} else {
		console.log("NOT SEARCHING")
		getFrontpageData();
	}

	getNavigation()
}

function getNavigation() {
	fetch("http://popispop.net/anniiss/wp-json/wp/v2/categories?per_page.search=100")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			data.forEach(addLink)
		})

}
