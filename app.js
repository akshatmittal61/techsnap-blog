const blog = {
	title: "How to become Frontend Developer",
	author: {
		name: "Jason Brownlee",
		image: "./images/user.svg",
		date: "22/4/16",
	},
	subtitle: "Last updated 12 days ago",
	image: "./images/bg.jpeg",
	content:
		"<p>Front-end developers must keep in mind that the tools and skills used to create the front end of a website are always changing. So developers need to constantly learn and brush up skills in these areas to advance their careers</p>",
	tags: ["web", "Front End", "developer", "html", "css", "js", "Javascript"],
};

const blogTitle = document.querySelector(".blog-title");
const blogAuthorImg = document.querySelector(".blog-author-image__img");
const bloaAuthorImgLink = document.querySelector(".blog-author-image__link");
const blogAuthorName = document.querySelector(".blog-author__name");
const blogAuthorTime = document.querySelector(".blog-author__time");
const blogSubtitle = document.querySelector(".blog-subtitle");
const blogTags = document.querySelector(".blog-tags");
const blogContent = document.querySelector(".blog-content");
const blogBgImg = document.querySelector(".blog-bg__img");

blogTitle.innerHTML = blog.title;
blogAuthorImg.setAttribute("src", blog.author.image);
bloaAuthorImgLink.setAttribute(
	"href",
	`/user/${_.kebabCase(blog.author.name)}`
);
blogAuthorName.innerHTML = blog.author.name;
blogAuthorName.setAttribute("href", `/user/${_.kebabCase(blog.author.name)}`);
blogAuthorTime.innerHTML = `Posted on ${blog.author.date}`;
blogSubtitle.innerHTML = blog.subtitle;
blog.tags.forEach((element) => {
	let tag = document.createElement("a");
	tag.className = "blog-tag";
	tag.innerHTML = element;
	tag.setAttribute("href", `/tag/${_.kebabCase(element)}`);
	blogTags.appendChild(tag);
});
// blogContent.innerHTML = blog.content;
blogBgImg.setAttribute("src", blog.image);
blogBgImg.setAttribute("alt", blog.title);

const fab = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
	fab.style.display = window.scrollY > window.innerHeight ? "flex" : "none";
});
fab.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
