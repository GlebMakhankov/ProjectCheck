import { JetView } from "webix-jet";


export default class Activities_Datatable extends JetView {
  config() {
    return {
      view: "datatable",
      minWidth: 700,
      localId: "activitiesDatatable",
      hover: "movieTableRowHover",
      select: "row",
      columns: [
        {
          id: "checkbox",
          header: "",
          width: 30,
          sort: "text",
          css: "rank",
          template: "{common.checkbox()}",
			 on:{
				 onAfterSelect: (id) => console.log(id)
			 }
        },
        {
          id: "TypeID",
          header: ["Activity type", { content: "selectFilter" }],
          options: Storage.activityTypes,
          fillspace: true,
          sort: "text",
          template: function (obj, common, val, config) {
            const item = config.collection.getItem(obj.TypeID);
            return item.Value;
          },
        },
        {
          id: "DueDate",
          header: ["DueDate", { content: "textFilter" }],
          fillspace: true,
          sort: "text",
        },
        {
          id: "Details",
          header: ["Details", { content: "textFilter" }],
          width: 120,
          fillspace: true,
        },
        {
          id: "ContactID",
          header: ["Contact", { content: "selectFilter" }],
          collection: Storage.contacts,
          width: 120,
          sort: "text",
          fillspace: true,
          template: function (obj, common, val, config) {
            const item = config.collection.getItem(obj.ContactID);
            return `${item.FirstName} ${item.LastName}`;
          },
        },
        {
          header: "",
          template: "<span class='webix_icon wxi-pencil editActivity'></span>",
          width: 50,
          sort: "text",
        },
        {
          header: "",
          template: "<span class='webix_icon wxi-trash deleteActivity'></span>",
          width: 50,
          sort: "text",
        },
      ],
    };
  }

  init() {
    this.$$("activitiesDatatable").sync(Storage.activities);
  }
}
