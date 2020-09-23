import { Controller } from "stimulus";
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ["follow", "followBtn"];
  follow() {
    let user_id = this.data.get("user");
    let song_id = this.followBtnTarget.dataset.songId;
    Rails.ajax({
      url: `/users/${user_id}/follow?song_id=${song_id}.json`,
      type: "post",
      success: (result) => {
        let btnContent = this.followBtnTarget.lastElementChild;
        if (result["status"] == true) {
          this.followBtnTarget.classList.remove("bg-white", "text-orange-500");
          this.followBtnTarget.classList.add("bg-orange-500", "text-white");
          btnContent.textContent = "Following";
        } else {
          this.followBtnTarget.classList.remove("bg-orange-500", "text-white");
          this.followBtnTarget.classList.add("bg-white", "text-orange-500");
          btnContent.textContent = "Follow";
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
