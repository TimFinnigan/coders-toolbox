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
    },
    {
      icon: "fa fa-codepen",
      title: "CodePen",
      url: "https://www.codepen.io"
    },
    {
      icon: "fa fa-twitter",
      title: "Twitter",
      url: "https://www.stackoverflow.com"
    },
    {
      icon: "fa fa-hacker-news",
      title: "Hacker News",
      url: "https://news.ycombinator.com/"
    },
    {
      icon: "fa fa-reddit",
      title: "Reddit",
      url: "https://www.reddit.com"
    }
  ];

  let row = 0; // 4 icons per row

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    console.log(item);
    if (row === 0 || item % 4 === 0) {
      row++;
      $(".modal-icons").append(
        "<div class='flex-container row-" + row + "'></div>"
      );
    }

    let icon = "<i class='" + item.icon + "'></i>";

    $(".row-" + row).append(
      "<div class='flex'><a href='" +
        item.url +
        "' target='_blank' title='" +
        item.title +
        "'>" +
        icon +
        "</a></div>"
    );
  }

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
