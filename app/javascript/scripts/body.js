const location = window.location.pathname;
document.addEventListener("DOMContentLoaded", () => {
  // console.log(location);
  if (location == "/") {
    // console.log('11111')
    document.body.classList.remove("bg-gray-900");
  }
});
