{
	/* <footer>
  <span>Another day, Another project</span>
  <a href="https://github.com/peetzaecksdee">
    <img src="./assets/images/pizza.jpg" alt="my profile" />
  </a>
</footer> */
}

import "./Footer.css";

function loadFooter() {
	const footer = document.createElement("footer");

	const text = document.createElement("i");
	text.textContent = "Another day, Another project";
	text.classList.add("credit");

	const githubPage = document.createElement("a");
	githubPage.href = "https://github.com/peetzaecksdee";
	githubPage.classList.add("credit-a");
  githubPage.target = "_blank";

	const githubImage = document.createElement("img");
	githubImage.src = "./assets/images/pizza.jpg";
	githubImage.alt = "my profile";

	githubPage.appendChild(githubImage);

	footer.appendChild(text);
	footer.appendChild(githubPage);

	return footer;
}

export default loadFooter;
