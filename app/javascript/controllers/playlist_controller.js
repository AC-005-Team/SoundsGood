import { Controller } from "stimulus";
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ["playlist", "addBtn"];
  addToPlaylist() {
    let song_id = this.data.get("song");
    let playlist_id = this.addBtnTarget.dataset.playlistId;
    Rails.ajax({
      url: `/songs/${song_id}/add_to_playlist?playlist_id=${playlist_id}.json`,
      type: "post",
      success: (result) => {
        let btnContent = this.addBtnTarget.lastElementChild;
        if (result["status"] == true) {
          //愛心變實心
          this.addBtnTarget.classList.remove("border-grey-400");
          this.addBtnTarget.classList.add("text-red-600", "border-orange-500");
          btnContent.textContent = "Added";
        } else {
          //變空心
          this.addBtnTarget.classList.remove(
            "text-red-600",
            "border-orange-500"
          );
          this.addBtnTarget.classList.add("border-grey-400");
          btnContent.textContent = "Add to playlist";
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
