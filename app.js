const blog = {
	title: "How to become Frontend Developer",
	author: {
		name: "Jason Brownlee",
		image: "./images/user.svg",
		username: "jason3",
	},
	date: "22/4/16",
	subtitle: "Last updated 12 days ago",
	image: "./images/bg.jpeg",
	content:
		"<p>Front-end developers must keep in mind that the tools and skills used to create the front end of a website are always changing. So developers need to constantly learn and brush up skills in these areas to advance their careers</p>",
	tags: ["web", "Front End", "developer", "html", "css", "js", "Javascript"],
	comments: [
		{
			author: {
				name: "Jane Doe",
				image: "./images/1.svg",
				username: "jane21doe",
			},
			content:
				"Amazing start. Really looking forward to the great start !",
			date: "24/4/16",
			editDate: "26/4/16",
		},
		{
			author: {
				name: "Maria Phillips",
				image: "./images/2.svg",
				username: "maraia443",
			},
			content: "Can I know about the start of the project/campaign??",
			date: "1/5/16",
			editDate: "2/5/16",
		},
	],
};
const trendingBlogs = [
	{
		...blog,
		image: "./images/1.png",
		title: "How to begin career as a data analyst with ststs knowledge",
		date: "12/5/21",
	},
	{
		...blog,
		image: "./images/2.png",
		title: "How to begin career as a data analyst with ststs knowledge",
		date: "12/5/21",
	},
	{
		...blog,
		image: "./images/3.png",
		title: "How to begin career as a data analyst with ststs knowledge",
		date: "12/5/21",
	},
	{
		...blog,
		image: "./images/4.png",
		title: "How to begin career as a data analyst with ststs knowledge",
		date: "12/5/21",
	},
];

const socials = [
	{
		icon: "./icons/Facebook.svg",
		name: "Facebook",
		link: `https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`,
	},
	{
		icon: "./icons/Gmail.svg",
		name: "Gmail",
		link: "https://gmail.com",
	},
	{
		icon: "./icons/Instagram.svg",
		name: "Instagram",
		link: "https://instagram.com",
	},
	{
		icon: "./icons/LinkedIn.svg",
		name: "LinkedIn",
		link: `https://www.linkedin.com/shareArticle?url=${
			document.location.href
		}&title=${document.querySelector("title").innerHTML}`,
	},
	{
		icon: "./icons/Twitter.svg",
		name: "Twitter",
		link: `https://twitter.com/intent/tweet?url=${
			document.location.href
		}&text=${document.querySelector("title").innerHTML}`,
	},
	{
		icon: "./icons/WhatsApp.svg",
		name: "WhatsApp",
		link: `https://web.whatsapp.com/send?text=${document.location.href}`,
	},
];

const blogTitle = document.querySelector(".blog-title");
const blogAuthorImg = document.querySelector(".blog-author-image__img");
const bloaAuthorImgLink = document.querySelector(".blog-author-image__link");
const blogAuthorName = document.querySelector(".blog-author__name");
const blogAuthorTime = document.querySelector(".blog-author__time");
const blogSubtitle = document.querySelector(".blog-subtitle");
const blogTags = document.querySelector(".blog-tags");
const blogContent = document.querySelector(".blog-content");
const blogBgImg = document.querySelector(".blog-bg__img");
const blogCoomentsBody = document.querySelector(".blog-comments-body");
const shareBody = document.querySelector(".share-body");
const trendingBody = document.querySelector(".trending-body");
const moreBlogsBody = document.querySelector(".more-blogs-body .row");

blogTitle.innerHTML = blog.title;
blogAuthorImg.setAttribute("src", blog.author.image);
bloaAuthorImgLink.setAttribute("href", `/user/${blog.author.username}`);
blogAuthorName.innerHTML = blog.author.name;
blogAuthorName.setAttribute("href", `/user/${blog.author.username}`);
blogAuthorTime.innerHTML = `Posted on ${blog.date}`;
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

blog.comments.forEach((item) => {
	let comment = document.createElement("div");
	comment.className = "blog-comment";

	let commentImage = document.createElement("div");
	commentImage.className = "blog-comment-image";
	let commentImageLink = document.createElement("a");
	commentImageLink.className = "blog-comment-image__link";
	commentImageLink.setAttribute("href", `/user/${item.author.username}`);
	let commentImageImg = document.createElement("img");
	commentImageImg.className = "blog-comment-image__img";
	commentImageImg.setAttribute("src", item.author.image);
	commentImageLink.appendChild(commentImageImg);
	commentImage.appendChild(commentImageLink);

	let commentContainer = document.createElement("div");
	commentContainer.className = "blog-comment-container";

	let commentContent = document.createElement("div");
	commentContent.className = "blog-comment-content";

	let commentContentHead = document.createElement("div");
	commentContentHead.className = "blog-comment-content-head";
	let commentContentHeadName = document.createElement("a");
	commentContentHeadName.className = "blog-comment-content-head__name";
	commentContentHeadName.innerHTML = item.author.name;
	commentContentHeadName.setAttribute(
		"href",
		`/user/${item.author.username}`
	);
	let commentContentHeadPosted = document.createElement("span");
	commentContentHeadPosted.className = "blog-comment-content-head__posted";
	commentContentHeadPosted.innerHTML = ` Posted at ${item.date} `;
	let commentContentHeadEdted = document.createElement("span");
	commentContentHeadEdted.className = "blog-comment-content-head__edited";
	if (item.editDate)
		commentContentHeadEdted.innerHTML = ` Edited on ${item.editDate} `;
	commentContentHead.appendChild(commentContentHeadName);
	commentContentHead.appendChild(commentContentHeadPosted);
	commentContentHead.appendChild(commentContentHeadEdted);

	let commentContentText = document.createElement("div");
	commentContentText.className = "blog-comment-content__text";
	commentContentText.innerHTML = blog.content;

	commentContent.appendChild(commentContentHead);
	commentContent.appendChild(commentContentText);

	let commentButtons = document.createElement("div");
	commentButtons.className = "blog-comment-buttons";
	let commentButton0 = document.createElement("button");
	let commentButton1 = document.createElement("button");
	commentButton0.className = "btn btn-primary btn-outline btn-sm";
	commentButton0.innerHTML =
		"<span class='material-icons'>thumb_up</span> Like";
	commentButton1.className = "btn btn-primary btn-outline btn-sm";
	commentButton1.innerHTML =
		"<span class='material-icons'>forum</span> Comment";

	commentButtons.appendChild(commentButton0);
	commentButtons.appendChild(commentButton1);

	commentContainer.appendChild(commentContent);
	commentContainer.appendChild(commentButtons);

	comment.appendChild(commentImage);
	comment.appendChild(commentContainer);

	blogCoomentsBody.appendChild(comment);
});

socials.forEach((social) => {
	let shareSocial = document.createElement("div");
	shareSocial.className = "share-social";

	let socialLink = document.createElement("a");
	socialLink.className = "share-social__link";
	socialLink.setAttribute("href", social.link);

	let socialImg = document.createElement("img");
	socialImg.className = "share-social__img";
	socialImg.setAttribute("src", social.icon);

	socialLink.appendChild(socialImg);
	shareSocial.appendChild(socialLink);

	shareBody.appendChild(shareSocial);
});

trendingBlogs.forEach((item) => {
	let trendingPost = document.createElement("div");
	trendingPost.className = "trending-post";

	let trendingPostImage = document.createElement("a");
	trendingPostImage.className = "trending-post-image";
	trendingPostImage.style.backgroundImage = `url(${item.image})`;
	trendingPostImage.setAttribute("href", `/post/${_.kebabCase(item.title)}`);

	let trendingPostContent = document.createElement("div");
	trendingPostContent.className = "trending-post-content";

	let trendingPostTitle = document.createElement("div");
	trendingPostTitle.className = "trending-post__title";
	let trendingPostLink = document.createElement("a");
	trendingPostLink.setAttribute("href", `/post/${_.kebabCase(item.title)}`);
	trendingPostLink.innerHTML = item.title;
	trendingPostTitle.appendChild(trendingPostLink);

	let trendingPostAuthor = document.createElement("div");
	trendingPostAuthor.className = "trending-post__author";
	trendingPostAuthor.innerHTML = `By <a href="/user/${item.author.username}">${item.author.name}</a>`;

	let trendingPostPosted = document.createElement("div");
	trendingPostPosted.className = "trending-post__posted";
	trendingPostPosted.innerHTML = `<span class="material-icons">schedule</span> &nbsp;Posted on ${item.date}`;

	trendingPostContent.appendChild(trendingPostTitle);
	trendingPostContent.appendChild(trendingPostAuthor);
	trendingPostContent.appendChild(trendingPostPosted);

	trendingPost.appendChild(trendingPostImage);
	trendingPost.appendChild(trendingPostContent);

	trendingBody.appendChild(trendingPost);

	let Col = document.createElement("div");
	let newPost = document.createElement("div");
	newPost.className = "trending-post";
	newPost.appendChild(trendingPost.cloneNode(true));
	Col.className = "col-lg-33 col-md-50 col-sm-100";
	let morePost = document.createElement("div");
	morePost.className = "more-blogs-body-post";
	morePost.appendChild(newPost);
	Col.appendChild(morePost);
	console.log(Col);
	moreBlogsBody.appendChild(Col);
});

const fab = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	fab.style.display = window.scrollY > window.innerHeight ? "flex" : "none";
	header.style.position =
		window.scrollY > window.innerHeight ? "fixed" : "relative";
	header.style.boxShadow =
		window.scrollY > window.innerHeight ? "var(--shadow-3d)" : "none";
});
fab.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
