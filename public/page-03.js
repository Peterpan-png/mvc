import './page-03.css'
import $ from "jquery";
const $box = $('.box');

$box.on("click", () => {
    $box.toggleClass("move")
})