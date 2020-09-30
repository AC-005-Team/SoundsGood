// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
require("@rails/ujs").start()
// require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("scripts")
require("styles")

// require("aplayer")

// require("fron-end")
// require("functions.js")
require("stylesheets");

const images = require.context("../images", false);
const imagePath = (name) => images(name, false);
import "./preview";
import "tailwindcss/base";
import "tailwindcss/components";
import "tailwindcss/utilities";
// import "@fortawesome/fontawesome-free/js/all";
import '@fortawesome/fontawesome-svg-core';
// config.autoReplaceSvg = false
import WaveSurfer from "wavesurfer.js";
// require('./style.css')
// import "bootstrap/dist/css/bootstrap.css"

import "select2/dist/css/select2.css"
import "./tag"
import "./search"
import "./upload_button"
import "./navbar_button"





// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.

import "controllers";
