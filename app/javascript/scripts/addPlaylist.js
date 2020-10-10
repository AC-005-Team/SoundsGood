document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".addplaylist-btn").addEventListener("click", () => {
    const addBtn = document.querySelector("#addplaylist-modal")
      .firstElementChild;
    const createBtn = document.querySelector("#addplaylist-modal")
      .lastElementChild;
    createBtn.addEventListener("click", () => {
      addBtn.classList.remove("text-red-600");
      createBtn.classList.add("text-red-600");
      document.querySelector("#addplaylist-content").classList.add("hidden");
      document
        .querySelector("#createplaylist-content")
        .classList.remove("hidden");
    });

    addBtn.addEventListener("click", () => {
      addBtn.classList.add("text-red-600");
      createBtn.classList.remove("text-red-600");
      document.querySelector("#addplaylist-content").classList.remove("hidden");
      document.querySelector("#createplaylist-content").classList.add("hidden");
    });
  });
});
