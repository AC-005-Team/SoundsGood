document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".replyBtn").forEach((replyBtn) => {
    replyBtn.addEventListener("click", (e) => {
      const commentId = e.currentTarget.dataset.id;
      let replyForms = document.querySelectorAll(".replyForm");
      let replyForm = document.querySelector(`.comment-id-${commentId}`)
        .lastElementChild;
      replyForms.forEach((form) => {
        form.classList.add("hidden");
      });
      replyForm.classList.remove("hidden");
    });
  });
});
