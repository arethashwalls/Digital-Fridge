$(document).ready(function() {
    $("#logOutBtn").on("click", function() {
        window.location.href = "../../../";
    })

    $(".shoppingCheck").on("click", function() {
        var parent = $(this).parent().parent().data("id");

        $(`tr[data-id="${parent}"]`).children().toggleClass("bg-light");
        $(`tr[data-id="${parent}"]`).children().toggleClass("text-muted");
        $(`tr[data-id="${parent}"]`).children().toggleClass("checked");
    })

    $("#goToInventory").on("click", function() {
        window.location.href = `../ingredients`;
    })

    $("#addItemLink").on("click", function() {
        $("#addItemLink").css("display", "none");
        $("#addItem").toggleClass("expand", 250);
        $("addItem").delay(250).toggleClass("container")
    });
});
