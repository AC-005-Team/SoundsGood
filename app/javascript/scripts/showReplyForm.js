document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".replyBtn").forEach((replyBtn) => {
    replyBtn.addEventListener("click", (e) => {
      const commentId = e.currentTarget.dataset.id;
      let replyForm = document.querySelector(`.comment-id-${commentId}`)
        .lastElementChild;
      replyForm.classList.remove("hidden");
    });
  });
});
