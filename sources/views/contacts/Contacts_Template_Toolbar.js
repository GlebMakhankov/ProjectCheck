const Contacts_Template_Toolbar = {
  view: "toolbar",
  elements: [
    {
      localId: "contactsTemplateUsername",
      template: (obj) =>
        `${obj.name ?? "Firstname"} ${obj.surname ?? "Lastname"}`,
      inputWidth: 100,
      borderless: true,
      css: "contactsTemplateUsername",
    },
    {
      view: "button",
      label: "Delete",
      width: 100,
      align: "right",
      type: "icon",
      icon: "mdi mdi-delete",
      click: () => console.log("click"),
    },
    {
      view: "button",
      label: "Edit",
      width: 100,
      align: "right",
      type: "icon",
      icon: "mdi mdi-square-edit-outline",
      click: () => console.log("click"),
    },
  ],
};

export default Contacts_Template_Toolbar;
