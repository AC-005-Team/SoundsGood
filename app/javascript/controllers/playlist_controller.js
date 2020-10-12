import { Controller } from "stimulus";
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ["playlist", "addBtn"];
  addToPlaylist(e) {
    let song_id = this.data.get("song");
    let playlist_id = e.currentTarget.dataset.playlistId;
    let addBtn = e.currentTarget;
    let btnContent = addBtn.lastElementChild;
    console.log(e.currentTarget);
    Rails.ajax({
      url: `/songs/${song_id}/add_to_playlist?playlist_id=${playlist_id}.json`,
      type: "post",
      success: (result) => {
        if (result["status"] == true) {
          //愛心變實心
          addBtn.classList.remove("border-grey-400");
          addBtn.classList.add("text-red-600", "border-orange-500");
          btnContent.textContent = "Added";
        } else {
          //變空心
          addBtn.classList.remove("text-red-600", "border-orange-500");
          addBtn.classList.add("border-grey-400");
          btnContent.textContent = "Add to playlist";
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
