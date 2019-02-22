$(document).ready(function() {
  $("#logOutBtn").on("click", function() {
    window.location.href = "../../../";
  });

  $("#addItemBtn").on("click", function() {
    var userIdNum = $("#goToInventory").data("id");

    console.log(userIdNum);

    var newItem = {
      name: $("#newItemName").val().trim(),
      quantityNeeded: $("#newItemQuantity").val().trim(),
      UserId: userIdNum
    };

    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      url: `/api/${userIdNum}/ingredients`,
      data: JSON.stringify(newItem)
    }).then(function() {
      console.log("New item added!");
      location.reload();
    });
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
    }).done(function() {
      console.log("Update successful!");
    });
  });

  $("#goToInventory").on("click", function() {
    window.location.href = `./inventory`;
  });

  $(".removeItemBtn").on("click", function() {
    var userIdNum = $("#goToInventory").data("id");
    var itemID = $(this).data("id");

    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
      url: `/api/${userIdNum}/ingredients/${itemID}`,
      data: JSON.stringify({ id: itemID })
    }).done(function() {
      console.log("Item deleted!");
      location.reload();
    });
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
