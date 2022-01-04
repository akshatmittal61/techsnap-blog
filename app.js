const blog = {
	title: "How to become Frontend Developer",
	subtitle: "by Jason Brownlee on April 22, 2016. Last updated 12 days ago",
	image: "./images/bg.jpeg",
	content:
		"<div><h2>Front-end developers must keep in mind that the tools and skills used to create the front end of a website are always changing. So developers need to constantly learn and brush up skills in these areas to advance their careers</h2></div>",
	tags: ["web", "frontend", "developer", "html", "css", "js"],
};

const blogTitle = document.querySelector(".blog-title");
const blogSubtitle = document.querySelector(".blog-subtitle");
const blogContent = document.querySelector(".blog-content");

blogTitle.innerHTML = blog.title;
blogSubtitle.innerHTML = blog.subtitle;
blogContent.innerHTML = blog.content;
