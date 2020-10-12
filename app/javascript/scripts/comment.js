export function renderComments(song) {
  console.log("start");
  const songId = song.dataset.id;
  const hostPath = window.location.origin;
  const player = document.querySelector("#player1");
  const commentArea = document.querySelector(
    `.song-main-comment[data-id="${songId}"]`
  );
  let commentForm;
  if (commentArea) {
    commentForm = document.querySelector(
      `.song-main-comment[data-id="${songId}"]`
    ).parentNode;
  }
  let userAvatar = document.querySelector(".current_user-avatar");
  let userAvatarUrl;
  if (userAvatar) {
    userAvatarUrl = userAvatar.getAttribute("src");
  }
  const waveCommentSpace = document.querySelector(
    `.waveform-comment-space[data-id="${songId}"]`
  );
  fetch(`${hostPath}/api/v1/songs/${songId}/comments`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }
      return res.json();
    })
    .then((songAndComments) => {
      let duration = songAndComments.song.duration;
      let comments = songAndComments.comments;
      appendCommentsToSong(waveCommentSpace, comments, duration);
      if (commentArea) {
        getReadyForNewComment(waveCommentSpace, duration);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  function getReadyForNewComment(song, duration) {
    let commentInput = commentForm.querySelector(".song-main-comment");
    commentInput.addEventListener("focus", (event) => {
      let focusedSongId = event.target.dataset.id;
      let playingTargetDuration = mmssToSecond(
        document.querySelector("span.aplayer-dtime").textContent
      );
      let timePercent, timepoint;
      if (isNowPlaying(event)) {
        timepoint = mmssToSecond(
          document.querySelector("span.aplayer-ptime").textContent
        );
        timePercent = timepoint / playingTargetDuration;
      } else {
        timepoint = getRandomInt(duration);
        timePercent = timepoint / duration;
      }
      let actionValue = commentForm.getAttribute("action");
      readyForComment(userAvatarUrl, timePercent, focusedSongId);
      commentForm.setAttribute(
        "action",
        actionValue.split("?")[0].concat(`?timepoint=${timepoint}`)
      );
      const appendWhenSubmit = () => {
        let comment = {
          content: commentForm.querySelector(".song-main-comment").textContent,
          user_img: userAvatarUrl,
          timepoint: timepoint,
        };
        appendCommentToSong(song, comment, duration);
        commentInput.blur();
      };
      const removeWhenBlur = () => {
        let removeTarget = document.querySelector(
          `.waveform-comment-space[data-id="${focusedSongId}"]>.comment-on-save`
        );
        if (removeTarget) {
          removeTarget.remove();
          commentForm.removeEventListener("submit", appendWhenSubmit);
        }
        commentInput.removeEventListener("blur", removeWhenBlur);
      };
      commentForm.addEventListener("submit", appendWhenSubmit);
      commentInput.addEventListener("blur", removeWhenBlur);
    });
    // commentShowOnWave.addEventListener('click', () => {
    //   // @todo: record time, append avatar, cursor to comment text field, other comment avatar
    // })
  }
  // @todo: hover avatar and show comment

  function appendCommentsToSong(song, comments, duration) {
    comments.forEach((comment) => {
      appendCommentToSong(song, comment, duration);
    });
  }
  function appendCommentToSong(song, comment, duration) {
    var domEl = document.createElement("div");
    domEl.classList.add("comment-avatar");
    domEl.setAttribute(
      "style",
      `left: ${(comment.timepoint / duration) * 100}%`
    );
    song.appendChild(domEl);
    if (comment.user_img == null) {
      domEl.innerHTML = `<img src='https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg' width="20" style="overflow:">`;
    } else {
      domEl.innerHTML = `<img src='${comment.user_img}' width="20">`;
    }
  }
  function readyForComment(imgUrl, timePercent, songId) {
    var domEl = document.createElement("div");
    let song = document.querySelector(
      `.waveform-comment-space[data-id="${songId}"]`
    );
    domEl.classList.add("comment-avatar", "comment-on-save");
    domEl.setAttribute("style", `left: ${timePercent * 100}%`);
    song.insertAdjacentElement("beforeend", domEl);
    if (imgUrl == "") {
      domEl.innerHTML = `<img src='https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg' width="20">`;
    } else {
      domEl.innerHTML = `<img src='${imgUrl}' width="20">`;
    }
  }

  function isNowPlaying(e) {
    return player.dataset.playing
      ? player.dataset.playing == e.target.dataset.id
      : false;
  }

  function mmssToSecond(mmss) {
    let mmssAry = mmss.split(":");
    if (mmssAry.length == 3) {
      return (
        parseInt(mmssAry[0], 10) * 60 * 60 +
        parseInt(mmssAry[1], 10) * 60 +
        parseInt(mmssAry[2], 10)
      );
    } else {
      return parseInt(mmssAry[0], 10) * 60 + parseInt(mmssAry[1], 10);
    }
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  return;
}
