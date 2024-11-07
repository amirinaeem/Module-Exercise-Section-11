export default class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  // Add a method to log the content and title
  publish() {
    console.log(
      `Post title is: ${this.title} and  content is: ${this.content}`
    );
  }
}
