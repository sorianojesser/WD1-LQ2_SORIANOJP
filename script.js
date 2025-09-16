document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".post-actions button:first-child");
  likeButtons.forEach(button => {
    let liked = false;
    let count = 0;
    button.addEventListener("click", () => {
      liked = !liked;
      if (liked) {
        count++;
        button.style.color = "#1877f2"; // fb blue
      } else {
        count--;
        button.style.color = "gray";
      }
      button.textContent = `👍 Like (${count})`;
    });
  });

  const commentButtons = document.querySelectorAll(".post-actions button:nth-child(2)");
  commentButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const post = button.closest(".post");
      if (!post.querySelector(".comment-box")) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Write a comment...";
        input.className = "comment-box";
        input.style.width = "100%";
        input.style.marginTop = "8px";
        post.appendChild(input);
      }
    });
  });

  const shareButtons = document.querySelectorAll(".post-actions button:nth-child(3)");
  shareButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Post shared to your timeline!");
    });
  });
});