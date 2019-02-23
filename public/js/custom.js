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
});
