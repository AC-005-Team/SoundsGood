// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus";
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ["output"];
  favorite() {
    let song_id = this.data.get("song");
    // console.log(this.data.get("song"));
    Rails.ajax({
      url: `/songs/${song_id}/like.json`,
      type: "post",
      success: (result) => {
        console.log(result);
        if (result["status"] == true) {
          //愛心變實心
          this.outputTarget.classList.remove("far");
          this.outputTarget.classList.add("fas");
          this.outputTarget.textContent = "Liked";
        } else {
          //變空心
          this.outputTarget.classList.remove("fas");
          this.outputTarget.classList.add("far");
          this.outputTarget.textContent = "Like";
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // connect() {
  //   this.outputTarget.textContent = 'Hello, Stimulus!'
  // }
}
