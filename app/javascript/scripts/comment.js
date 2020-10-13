export function renderComments(song, ap) {
  const songId = song.dataset.id;
  const hostPath = window.location.origin;
  const player = document.querySelector("#player1");
  const commentArea = document.querySelector(
    `.song-main-comment[data-id="${songId}"]`
  );
  let parentWidth, commentForm, currentUserName, currentUserUrl, playtimeNow;
  let isCommentShowing = false;
  if (commentArea) {
    commentForm = commentArea.parentNode;
  }
  let userAvatar = document.querySelector(".current_user-avatar");
  let userAvatarUrl;
  if (userAvatar) {
    userAvatarUrl = userAvatar.getAttribute("src");
  }
  const waveCommentSpace = document.querySelector(
    `.waveform-comment-space[data-id="${songId}"]`
  );
  parentWidth = waveCommentSpace.offsetWidth;
  // get the comments of this song
  fetch(`${hostPath}/api/v1/songs/${songId}/comments`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }
      return res.json();
    })
    .then((songAndComments) => {
      currentUserName = songAndComments.current_user.user_name;
      currentUserUrl = songAndComments.current_user.user_url;
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
  // add eventListener to comment input field: focus -> append, blur -> remove, submit -> blur and append
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
        timePercent = Math.floor(timepoint / playingTargetDuration);
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
      const appendWhenSubmit = (e) => {
        let comment = {
          content: commentForm.querySelector(".song-main-comment").value,
          user_img: userAvatarUrl,
          user_name: currentUserName,
          user_url: currentUserUrl,
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
  }
  function appendCommentsToSong(song, comments, duration) {
    comments.forEach((comment) => {
      appendCommentToSong(song, comment, duration);
    });
  }
  // append comment to the correct place and add eventListener: pop when the progress is same as timepoint
  function appendCommentToSong(song, comment, duration) {
    var domEl = document.createElement("div");
    domEl.classList.add("comment-avatar");
    domEl.setAttribute("data-id", comment.comment_id);
    domEl.setAttribute(
      "style",
      `left: ${Math.floor((comment.timepoint / duration) * parentWidth)}px`
    );
    song.appendChild(domEl);
    if (comment.timepoint / duration > 0.5) {
      domEl.innerHTML = `<img class ='comment-img' src='${comment.user_img}' style=''><div class="flex flex-row-reverse comment-on-wave-wrap opacity-0 absolute hidden" style="right:0px;min-width:max-content"><div class="comment-line comment-line-reverse" style="margin-right:28px;margin-left:1px"></div><p class="comment-user pr-1 pt-1">${comment.user_name}</p><p class="pr-1 pt-1 comment-content">${comment.content}</p></div>`;
    } else {
      domEl.innerHTML = `<img class ='comment-img' src='${comment.user_img}' style=''><div class="flex comment-on-wave-wrap opacity-0 hidden absolute" style="min-width: max-content"><div class="comment-line"></div><p class="comment-user pl-1 pt-1">${comment.user_name}</p><p class="pl-1 pt-1 comment-content">${comment.content}</p></div>`;
    }
    let commentAvatar = domEl.querySelector("img");
    let commentWrap = domEl.querySelector(".comment-on-wave-wrap");
    commentAvatar.addEventListener("mouseenter", (e) => {
      let target = e.currentTarget.parentNode.querySelector(
        ".comment-on-wave-wrap"
      );
      target.classList.remove("hidden");
      setTimeout(() => {
        target.classList.add("opacity-100");
      }, 10);
    });
    commentWrap.addEventListener("mouseenter", (e) => {
      e.currentTarget.classList.remove("hidden");
      e.currentTarget.classList.add("opacity-100");
    });
    commentAvatar.addEventListener("mouseleave", (e) => {
      e.currentTarget.parentNode
        .querySelector(".comment-on-wave-wrap")
        .classList.remove("opacity-100");
      e.currentTarget.parentNode
        .querySelector(".comment-on-wave-wrap")
        .classList.add("hidden");
    });
    commentWrap.addEventListener("mouseleave", (e) => {
      e.currentTarget.classList.remove("opacity-100");
      e.currentTarget.classList.toggle("hidden");
    });
    // click on user name of comments on wave, redirect to user show
    domEl.querySelector(".comment-user").addEventListener("click", (e) => {
      e.stopPropagation();
      window.location.href = `${window.location.origin}${comment.user_url}`;
    });
    // click on user img of comments on wave, redirect to user reply
    commentAvatar.addEventListener("click", (e) => {
      let commentId = e.currentTarget.parentNode.dataset.id;
      let replyForm = document.querySelector(`input[data-id="${commentId}"]`);
      e.stopPropagation();
      replyForm.focus();
    });
    // when second same, let comment appear for 2s
    ap.on("timeupdate", () => {
      playtimeNow = document.querySelector(".aplayer-ptime").textContent;
      if (
        mmssToSecond(playtimeNow) == comment.timepoint &&
        isCommentShowing == false
      ) {
        commentWrap.classList.remove("hidden");
        isCommentShowing = true;
        setTimeout(() => {
          commentWrap.classList.add("opacity-100");
        }, 10);
        setTimeout(() => {
          commentWrap.classList.remove("opacity-100");
          commentWrap.classList.toggle("hidden");
          isCommentShowing = false;
        }, 2000);
      }
    });
  }
  function readyForComment(imgUrl, timePercent, songId) {
    var domEl = document.createElement("div");
    let song = document.querySelector(
      `.waveform-comment-space[data-id="${songId}"]`
    );
    domEl.classList.add("comment-avatar", "comment-on-save");
    console.log(parentWidth);
    domEl.setAttribute(
      "style",
      `left: ${Math.floor(timePercent * parentWidth)}px`
    );
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
  // convert mmss to second, in order to update db
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
  // if the song is not playing, return a random timepoint
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  return;
}
