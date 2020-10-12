import './page-04.css'
import $ from "jquery"
const $circle = $('.circle');

$circle.on("click", () => {
    $circle.addClass('active')
})