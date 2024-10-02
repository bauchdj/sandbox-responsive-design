<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import APIImage from "$lib/components/APIImage.svelte";

	let posts = [
		{
			title: "About Functional Programming",
			author: "Jim Robert",
			published: "2024-03-14",
			readingTime: "5 min",
			tags: ["Functional Programming", "Coding"],
			likes: 25,
			body: `Functional programming is a paradigm of programming that has been growing in popularity in recent years. It is based on the idea that functions are first-class citizens in the language, meaning that they can be passed around as arguments to other functions, returned as values from other functions, and assigned to variables.`,
		},
		{
			title: "Intro to Vue",
			author: "Bobby Boy",
			published: "2024-03-14",
			readingTime: "5 min",
			tags: ["Vue", "JavaScript", "Coding"],
			likes: 12,
			body: `Vue is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning that you can start using it for small parts of your application and gradually scale up to a full-fledged single-page application if needed.
With Vue, you can easily create reusable components, handle data binding, and manage the state of your application. It provides a simple and intuitive syntax that allows you to declaratively define your UI and easily compose complex UIs from smaller components.
Vue also has a rich ecosystem of libraries and tools that can help you with tasks such as routing, state management, and testing. It has a vibrant community and extensive documentation, making it easy to find support and resources.
If you're new to Vue, this post will serve as a gentle introduction to the framework, covering the basics and giving you a taste of what Vue can do. By the end of this post, you'll have a good understanding of the core concepts of Vue and be ready to start building your own Vue applications.`,
		},
		{
			title: "The Basics of JavaScript",
			author: "Jeremy Clarkson",
			published: "2024-03-14",
			readingTime: "5 min",
			tags: ["JavaScript", "Coding"],
			likes: 254,
			body: `JavaScript is a high-level, interpreted programming language that is widely used for front-end and back-end web development. It is known for its versatility and flexibility, allowing developers to build a wide range of applications, from simple websites to complex web applications.
JavaScript is a core technology of the web, and it is supported by all modern web browsers. It is used to add interactivity and dynamic behavior to web pages, enabling features such as form validation, animations, and real-time updates.
In this post, we'll cover the basics of JavaScript, including its syntax, data types, control flow, and functions. By the end of this post, you'll have a good understanding of the fundamental concepts of JavaScript and be ready to start writing your own JavaScript code.`,
		},
		{
			title: "Understanding Asynchronous JavaScript",
			author: "Alice Johnson",
			published: "2024-08-22",
			readingTime: "7 min",
			tags: ["JavaScript", "Async", "Web Development"],
			likes: 178,
			body: `Asynchronous JavaScript is a crucial concept for developers looking to create efficient and responsive web applications. Unlike synchronous code, which executes line by line, asynchronous code allows certain operations to run in the background, freeing up the main thread to continue executing other tasks.
This post will explore the various methods of handling asynchronous operations in JavaScript, including callbacks, promises, and async/await syntax. We'll discuss the advantages and challenges of each method, along with practical examples to illustrate their use cases. By the end of this article, you'll gain a solid understanding of how to work with asynchronous JavaScript and enhance your web development skills.`,
		},
		{
			title: "A Guide to JavaScript ES6 Features",
			author: "Emma Smith",
			published: "2024-06-10",
			readingTime: "6 min",
			tags: ["JavaScript", "ES6", "Programming"],
			likes: 312,
			body: `JavaScript ES6 (ECMAScript 2015) introduced several powerful features that make coding more efficient and expressive. From arrow functions to template literals, these new additions have revolutionized how developers write JavaScript code.
In this post, we'll delve into the key features of ES6, explore their syntax, and provide examples of how they can improve your code. Whether you're a beginner or a seasoned developer, understanding these features is essential for modern JavaScript development. By the end of this post, you'll be equipped to utilize ES6 in your projects confidently.`,
		},
		{
			title: "Debugging JavaScript: Tips and Tools",
			author: "Michael Brown",
			published: "2024-09-05",
			readingTime: "8 min",
			tags: ["JavaScript", "Debugging", "Development"],
			likes: 145,
			body: `Debugging is an essential skill for any JavaScript developer. It involves identifying and resolving errors in your code to ensure your applications run smoothly. With the right tools and techniques, you can streamline your debugging process and become more effective in your development work.
In this article, we'll cover various debugging methods, including using browser developer tools, console logging, and popular debugging libraries. We will also discuss common pitfalls and how to avoid them. By the end of this post, you’ll have a toolbox of debugging strategies to help you tackle issues in your JavaScript code.`,
		},
		{
			title: "JavaScript and the Document Object Model (DOM)",
			author: "Sarah White",
			published: "2024-07-15",
			readingTime: "5 min",
			tags: ["JavaScript", "DOM", "Web Development"],
			likes: 210,
			body: `The Document Object Model (DOM) is a crucial concept in web development that allows JavaScript to interact with HTML and CSS. Understanding the DOM is essential for creating dynamic and interactive web pages.
In this post, we’ll explain what the DOM is, how it represents web pages, and how you can manipulate it using JavaScript. We will cover common DOM methods and properties, as well as best practices for working with the DOM efficiently. By the end of this article, you'll be able to use JavaScript to enhance the interactivity of your web applications.`,
		},
	];
</script>

<svelte:head>
	<title>My Blog Site</title>
</svelte:head>

<h1 class="text-center text-3xl font-bold mb-6">Welcome to My Blog</h1>

<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(700px,1fr))] gap-6"
>
	{#each posts as post}
		<Card.Root class="flex flex-col">
			<Card.Header>
				<Card.Title>{post.title} by {post.author}</Card.Title>
				<Card.Description>
					Published: {post.published} | Reading Time: {post.readingTime}
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex-1">
				<div class="flex justify-center pt-4">
					<p>{post.body}</p>
				</div>
				<div class="flex justify-center pt-4">
					<APIImage />
				</div>
			</Card.Content>
			<Card.Footer class="flex justify-between">
				<div>
					<p>Tags: {post.tags.join(", ")}</p>
				</div>
				<div>
					<p>Likes: {post.likes}</p>
				</div>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>

<style>
	p {
		max-width: 65ch;
	}
</style>
