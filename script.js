$(document).ready(function() {
  let defaultData = [
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
    },
    {
      icon: "fa fa-jsfiddle",
      title: "JSFiddle",
      url: "https://www.jsfiddle.net"
    }
  ];

  const addIcons = function(data) {
    let row = 0; // 4 icons per row
    let count = 0;
    let itemsInRow = 0;

    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (row === 0 || count % 4 === 0) {
        itemsInRow = 0;
        row++;
        $(".modal-icons").append(
          "<div class='flex-container row-" + row + "'></div>"
        );
      }

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
      $(".row-" + row).append("<div class='flex'></div>");
    }
  };

  const populateList = function(data) {
    for (let i = 0; i < data.length; i++) {
      let listItem = "<li>" + data[i].title;

      // Add unique IDs using index values
      let pencilIcon =
        "<i id=item-" +
        i +
        " class='fa fa-pencil-square-o' aria-hidden='true'></li>";

      listItem += pencilIcon + "</li>";

      $("#sortable").append(listItem);
    }
  };

  if (localStorage.getItem("userData")) {
    console.log(localStorage.getItem("userData"));
    let data = localStorage.getItem("userData");
    $("textarea").html(data, null, 2);
    addIcons(JSON.parse(data));
    populateList(JSON.parse(data));
  } else {
    addIcons(defaultData);
    populateList(defaultData);
    $("textarea").html(JSON.stringify(defaultData, null, 2));
  }

  // const isValidJSONString = function(str) {
  //   try {
  //     JSON.parse(str);
  //   } catch (e) {
  //     alert("Invalid JSON");
  //     return false;
  //   }
  //   return true;
  // };

  $("#settings-icon").click(function() {
    $("#form-container").show();
  });

  $("#close-icon").click(function() {
    $("#form-container").hide();
  });

  const readList = function() {
    $("#sortable li").each(function(index) {
      console.log(index + ": " + $(this).text());
    });
  };

  $(".fa-pencil-square-o").click(function(e) {
    console.log(e.target.id);
  });

  $("form").submit(function(e) {
    e.preventDefault(); // prevent page refresh
    // Read list and get order
    readList();

    // let userData = $("textarea").val();
    // if (isValidJSONString(userData)) {
    //   localStorage.setItem("userData", userData);
    //   $(".flex-container").remove();
    //   console.log(userData);
    //   addIcons(JSON.parse(userData));
    // }
  });

  $(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
  });
});
