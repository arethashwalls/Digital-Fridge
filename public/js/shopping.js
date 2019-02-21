$(document).ready(function() {
  $("#logOutBtn").on("click", function() {
    window.location.href = "../../../";
  });

  $(".shoppingCheck").on("click", function() {
    var parent = $(this)
      .parent()
      .parent()
      .data("id");

    $(`tr[data-id="${parent}"]`)
      .children()
      .toggleClass("bg-light");

    $(`tr[data-id="${parent}"]`)
      .children()
      .toggleClass("text-muted");

    $(`tr[data-id="${parent}"]`)
      .children()
      .toggleClass("checked");

    $.ajax({
      headers: {
          "Content-Type": "application/json"
        },
        method: "PUT",
        url: `/api/${$(this).data("userid")}/ingredients`,
        data: JSON.stringify({ id: $(this).data("itemid") })
      }).then(function() {
        console.log("Update successful!");
      });
  });

  $("#goToInventory").on("click", function() {
    window.location.href = `../ingredients`;
  });

  $("#addItemLink").on("click", function() {
      $("#addItemLink").css("display", "none");
      $("#addItem").toggleClass("expand", 250);
      $("#addItemBody").delay(250).toggleClass("container");
      $("#addItemBody").delay(250).fadeIn(400);
  });

  $("#cancelBtn").on("click", function() {
      $("#addItemBody").toggleClass("container");
      $("#addItemBody").fadeOut(400);
      $("#addItemLink").css("display", "block");
      $("#addItem").toggleClass("expand", 250);
  });
});
