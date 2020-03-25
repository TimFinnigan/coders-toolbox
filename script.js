$(document).ready(function() {
  let data = {
    icon: "fa fa-github",
    title: "GitHub",
    url: "https://www.github.com"
  };
  $("#settings-icon").click(function() {
    console.log(data);
    // var tData = JSON.parse("icons.json");
    // alert(tData);
  });
});
