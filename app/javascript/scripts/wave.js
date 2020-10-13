import { renderComments } from "./comment";
import WaveSurfer from "wavesurfer.js";
import CursorPlugin from "wavesurfer.js/src/plugin/cursor.js";
export function waveShow(ap) {
  // document.addEventListener('DOMContentLoaded', () => {
  const wavePlace = document.querySelector(".waveform-wrap"); // see if at least a waveform div is present
  const peakStorageRoot =
    "https://peaks.soundsgood.world/api/v1/getjson/song_peaks/";
  const ctx = document.createElement("canvas").getContext("2d");
  const waveDarkSmall = ctx.createLinearGradient(900, 0, 900, 100);
  waveDarkSmall.addColorStop(0.88, "rgb(96, 96, 96)");
  waveDarkSmall.addColorStop(0.89, "rgb(255, 255, 255)");
  waveDarkSmall.addColorStop(0.9, "rgb(215, 215, 215)");
  const waveProgressSmall = ctx.createLinearGradient(900, 0, 900, 100);
  waveProgressSmall.addColorStop(0.88, "rgb(255,118,38)");
  waveProgressSmall.addColorStop(0.89, "rgb(255, 255, 255)");
  waveProgressSmall.addColorStop(0.9, "#ffcfb5");
  const waveLightLarge = ctx.createLinearGradient(900, 0, 900, 120);
  waveLightLarge.addColorStop(0.88, "rgba(255, 255, 255, 1)");
  waveLightLarge.addColorStop(0.89, "rgba(255, 255, 255, 0)");
  waveLightLarge.addColorStop(0.9, "rgba(215, 215, 215, 1)");
  const waveProgressLarge = ctx.createLinearGradient(900, 0, 900, 120);
  waveProgressLarge.addColorStop(0.88, "rgb(255,118,38)");
  waveProgressLarge.addColorStop(0.89, "rgba(255, 255, 255, 0)");
  waveProgressLarge.addColorStop(0.9, "#ffcfb5");

  if (wavePlace) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // for accessing s3
    const playingNowPath = document.querySelectorAll(".waveform-wrap");
    const isLight = (el) => {
      return el.classList.contains("waveform-light");
    };
    const isSmall = (el) => {
      return el.classList.contains("waveform-small");
    };
    playingNowPath.forEach((songEl) => {
      if (isLight(songEl) && !isSmall(songEl)) {
        renderWaveForm(
          songEl.dataset.path,
          songEl.dataset.filename,
          songEl,
          waveLightLarge,
          waveProgressLarge,
          0.7,
          120
        );
        createCommentSpace(songEl, "large");
      } else {
        console.log("Dark, small");
        renderWaveForm(
          songEl.dataset.path,
          songEl.dataset.filename,
          songEl,
          waveDarkSmall,
          waveProgressSmall,
          0.5,
          100
        );
        createCommentSpace(songEl, "small");
      }
      renderComments(songEl, ap);
    });
    function getPeak(url, songDataName, wavesurfer) {
      fetch(peakStorageRoot + songDataName)
        .then((response) => {
          if (!response.ok) {
            loadDefaultPeak(url, wavesurfer); // if no peak data, load default
            return;
          }
          return response.json();
        })
        .then((peaks) => {
          if (peaks.length == 0) {
            loadDefaultPeak(url, wavesurfer); // if peak data contains error, load default
            return;
          }
          console.log("------------------------------");
          console.log("peaks loaded! sample_rate: " + peaks.sample_rate);
          console.log("------------------------------");
          // load peaks into wavesurfer.js
          // wavesurferDummy.load(proxyurl+url, peaks.data)
          wavesurfer.load(proxyurl + url, peaks.data);
        })
        .catch((e) => {
          console.log(songDataName);
          console.error("error", e);
        });
    }

    function loadDefaultPeak(url, wavesurfer) {
      fetch(peakStorageRoot + "default")
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response.json();
        })
        .then((peaks) => {
          console.log("------------------------------");
          console.log("default loaded! sample_rate: " + peaks.sample_rate);
          console.log("------------------------------");
          // load peaks into wavesurfer.js
          // wavesurferDummy.load(proxyurl+url, peaks.data)
          wavesurfer.load(proxyurl + url, peaks.data);
        })
        .catch((e) => {
          console.error("error", e);
          wavesurfer.load(proxyurl + url);
        });
    }

    function renderWaveForm(
      url,
      songDataName,
      parentSelector,
      waveColor,
      waveProgress,
      size,
      height
    ) {
      var domEl = document.createElement("div");
      domEl.classList.add("waveform");
      parentSelector.appendChild(domEl);

      var wavesurfer = WaveSurfer.create({
        container: domEl,
        waveColor: waveColor,
        progressColor: waveProgress,
        cursorColor: "",
        barWidth: 3,
        barHeight: size,
        height: height,
        barRadius: 2,
        cursorWidth: 1,
        barGap: 2,
        plugins: [
          CursorPlugin.create({
            showTime: true,
            opacity: 0,
            customShowTimeStyle: {
              "background-color": "#000",
              color: "#fff",
              padding: "2px",
              "font-size": "10px",
            },
          }),
        ],
      });
      getPeak(url, songDataName, wavesurfer);
      return wavesurfer;
    }

    function createCommentSpace(song, size) {
      var domEl = document.createElement("div");
      domEl.classList.add("waveform-comment-space");
      domEl.classList.add("w-full");
      domEl.setAttribute("data-id", song.dataset.id);
      if (size == "small") {
        domEl.style.top = "56px";
      } else {
        domEl.style.top = "68px";
      }
      song.appendChild(domEl);
    }
  }
  // })
}
