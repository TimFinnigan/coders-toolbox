$(document).ready(function() {
  let data = [
    {
      icon: "fa fa-github",
      title: "GitHub",
      url: "https://www.github.com"
    },
    {
      icon: "fa fa-stack-overflow",
      title: "Stack Overflow",
      url: "https://www.stackoverflow.com"
    }
  ];

  // TODO check for cookie / local storage indicating icons to load

  $("textarea").html(JSON.stringify(data, null, 2));

  $("#settings-icon").click(function() {
    console.log(data);
    $("#form-container").show();
  });
  $("form").submit(function() {
    alert("Submitted");
  });
});
