const blog = {
	title: "How to become Frontend Developer",
	subtitle: "by Jason Brownlee on April 22, 2016. Last updated 12 days ago",
	image: "./images/bg.jpeg",
	content:
		"<p>Front-end developers must keep in mind that the tools and skills used to create the front end of a website are always changing. So developers need to constantly learn and brush up skills in these areas to advance their careers</p>",
	tags: [
		"web",
		"frontend",
		"developer",
		"html",
		"css",
		"frontend",
		"html",
		"css",
		"developer",
		"html",
		"frontend",
		"developer",
		"css",
		"js",
	],
};

const blogTitle = document.querySelector(".blog-title");
const blogSubtitle = document.querySelector(".blog-subtitle");
const blogTags = document.querySelector(".blog-tags");
const blogContent = document.querySelector(".blog-content");
const blogBgImg = document.querySelector(".blog-bg__img");

blogTitle.innerHTML = blog.title;
blogSubtitle.innerHTML = blog.subtitle;
blog.tags.forEach((element) => {
	let tag = document.createElement("a");
	tag.className = "blog-tag";
	tag.innerHTML = `#${element}`;
	tag.setAttribute("href", `/${element}`);
	blogTags.appendChild(tag);
});
// blogContent.innerHTML = blog.content;
blogBgImg.setAttribute("src", blog.image);
blogBgImg.setAttribute("alt", blog.title);
