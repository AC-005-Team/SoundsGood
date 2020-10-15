import { Controller } from "stimulus";
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ["heart", "likeBtn", "repostBtn"];
  like() {
    let song_id = this.data.get("song");
    Rails.ajax({
      url: `/songs/${song_id}/like.json`,
      type: "post",
      success: (result) => {
        let btnContent = this.likeBtnTarget.lastElementChild;
        let liked_count = document.querySelector('.liked-count')
        let liked_count_number = Number(liked_count.innerText)
        if (result["status"] == true) {
          //愛心變實心
          this.heartTarget.classList.remove("far");
          this.heartTarget.classList.add("fas");
          this.likeBtnTarget.classList.remove("border-grey-400");
          this.likeBtnTarget.classList.add("text-red-600", "border-orange-500");
          btnContent.textContent = "Liked";
          liked_count.textContent = liked_count_number + 1

        } else {
          //變空心
          this.heartTarget.classList.remove("fas");
          this.heartTarget.classList.add("far");
          this.likeBtnTarget.classList.remove(
            "text-red-600",
            "border-orange-500"
          );
          this.likeBtnTarget.classList.add("border-grey-400");
          btnContent.textContent = "Like";
          liked_count.textContent = liked_count_number - 1
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  repost() {
    let song_id = this.data.get("song");
    Rails.ajax({
      url: `/songs/${song_id}/repost.json`,
      type: "post",
      success: (result) => {
        let btnContent = this.repostBtnTarget.lastElementChild;
        if (result["status"] == true) {
          this.repostBtnTarget.classList.remove("border-grey-400");
          this.repostBtnTarget.classList.add(
            "text-red-600",
            "border-orange-500"
          );
          btnContent.textContent = "Reposted";
        } else {
          this.repostBtnTarget.classList.remove(
            "text-red-600",
            "border-orange-500"
          );
          this.repostBtnTarget.classList.add("border-grey-400");
          btnContent.textContent = "Repost";
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
