$(document).ready(function() {
  // New User Modal
  $("#newUserBtn").on("click", function() {
    $("#newUserModal").modal("show");
  });

  // New User Submit
  $("#newSubmitBtn").on("click", function() {
    var newUser = $("input#newUserName")
      .val()
      .trim();
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      url: "/api/users",
      data: JSON.stringify({ username: newUser }),
      success: function(data) {
        console.log(data);
        console.log("New user submitted!");
        $("input#newUserName").val("");
        $("#dropdownMenu").append(
          `<option value="${newUser}" data-id="${
            data[0].id
          }">${newUser}</option>`
        );
      }
    });
  });

  // Username Select
  $("#loginBtn").on("click", function() {
    var userSelect = $("#dropdownMenu option:selected").data("id");

    if (userSelect === 0) {
      return false;
    } else {
      window.location.href = userSelect + "/inventory";
    }
  });
});
