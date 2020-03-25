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
    } ,
    {
      icon: "fa fa-jsfiddle",
      title: "JSFiddle",
      url: "https://www.jsfiddle.net"
    }
  ];

  let row = 0; // 4 icons per row
  let count = 0;
  let itemsInRow = 0;

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (row === 0 || count % 4 === 0) {
      itemsInRow = 0;
      console.log("new row")
      row++;
      $(".modal-icons").append(
        "<div class='flex-container row-" + row + "'></div>"
      );
    }
    console.log(item.title);

    count++;
    itemsInRow++;

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

  // If itemsInRow < 4, add blank items to fill up flexbox
  for (let i = 0; i < 4 - itemsInRow; i++) {
    $(".row-" + row).append(
      "<div class='flex'></div>"
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
