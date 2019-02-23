$(document).ready(function() {
  $("#logOutBtn").on("click", function() {
    window.location.href = "../../../";
  });
  $("#goToShoppinglist").on("click", function() {
    window.location.href = "./shoppinglist";
  });
  $(".deleteBtn").on("click", function() {
    var userIdNum = $("#goToInventory").data("id");
    var userIdNum = $("#goToSoppinglist").data("id");
    var itemID = $(this).data("id");
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
      url: `/api/${userIdNum}/ingredients/${itemID}`,
      data: JSON.stringify({ id: itemID })
    }).done(function() {
      console.log("Items have been deleted!");
      location.reload();
    });
  });

  // New Item Menu
  $("#addItemLink").on("click", function() {
    $("#addItemLink").css("display", "none");
    $("#addItem").toggleClass("expand", 250);
    $("#addItemBody")
      .delay(250)
      .toggleClass("container");
    $("#addItemBody")
      .delay(250)
      .fadeIn(400);
  });

  $("#cancelBtn").on("click", function() {
    $("#addItemBody").toggleClass("container");
    $("#addItemBody").fadeOut(400);
    $("#addItemLink").css("display", "block");
    $("#addItem").toggleClass("expand", 250);
  });

  // Add New Item
  $("#addItemBtn").on("click", function() {
    var userIdNum = $("#goToShoppinglist").data("id");
    var newItem = {
      name: $("#newItemName")
        .val()
        .trim(),
      quantityNeeded: $("#newItemQuantity")
        .val()
        .trim(),
      UserId: userIdNum
    };

    // POST request for new item
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      url: `/api/${userIdNum}/ingredients`,
      data: JSON.stringify(newItem)
    }).then(function() {
      console.log("New item added!");
      setTimeout(function() {
        location.reload();
      }, 100);
    });
  });
});
