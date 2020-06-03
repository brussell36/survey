// UI logic

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const food = $("#food").val();
    const band = $("input:radio[name=music]:checked").val();
    const hobby = $("#hobby").val();
    const color = $("#color").val();
    const birthday = $("#birthday").val();
  });
});