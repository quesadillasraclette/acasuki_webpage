var options = {
  valueNames: ["id", "name", "trick"]
};

// Init list
var contactList = new List("contacts", options);

var idField = $("#id-field"),
  nameField = $("#name-field"),
  trickField = $("#trick-field"),
  addBtn = $("#add-btn"),
  editBtn = $("#edit-btn").hide(),
  removeBtns = $(".remove-item-btn"),
  editBtns = $(".edit-item-btn");

// Sets callbacks to the buttons in the list
refreshCallbacks();

addBtn.click(function() {
  contactList.add({
    id: Math.floor(Math.random() * 110000),
    name: nameField.val(),
    trick: trickField.val()
  });
  clearFields();
  refreshCallbacks();
});

editBtn.click(function() {
  var item = contactList.get("id", idField.val())[0];
  item.values({
    id: idField.val(),
    name: nameField.val(),
    trick: trickField.val()
  });
  clearFields();
  editBtn.hide();
  addBtn.show();
});

function refreshCallbacks() {
  // Needed to add new buttons to jQuery-extended object
  removeBtns = $(removeBtns.selector);
  editBtns = $(editBtns.selector);

  removeBtns.click(function() {
    var itemId = $(this)
      .closest("tr")
      .find(".id")
      .text();
    contactList.remove("id", itemId);
  });

  editBtns.click(function() {
    var itemId = $(this)
      .closest("tr")
      .find(".id")
      .text();
    var itemValues = contactList.get("id", itemId)[0].values();
    idField.val(itemValues.id);
    nameField.val(itemValues.name);
    trickField.val(itemValues.trick);

    editBtn.show();
    addBtn.hide();
  });
}

function clearFields() {
  nameField.val("");
  trickField.val("");
}
