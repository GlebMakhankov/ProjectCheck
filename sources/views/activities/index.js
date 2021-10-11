import { JetView } from "webix-jet";
import { Storage } from "../../models/Storage";
import Activities_Header from "./Activities_Toolbar";

export default class ActivitiesView extends JetView {
  config() {
    const table = {
      view: "datatable",
      minWidth: 700,
      localId: "activitiesDatatable",
      hover: "movieTableRowHover",
      select: "row",

      columns: [
        {
          id: "State",
          header: "",
          width: 30,
          sort: "text",
          css: "rank",
          template: "{common.checkbox()}",
          checkValue: "Open",
          uncheckValue: "Close",
        },
        {
          id: "TypeID",
          header: ["Activity type", { content: "selectFilter" }],
          options: Storage.activityTypes,
          fillspace: true,
          sort: "text",
          //  template: function (obj, common, val, config) {
          //    const item = config.collection.getItem(obj.TypeID);
          //    return item.Value;
          //  },
         //  template: "#TypeID#",
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
      onClick: {
        deleteActivity: (e, id) => {
          console.log(id);
          webix
            .confirm({
              title: "Delete activity?",
              text: "Are you sure about that?",
            })
            .then(() => {
              Storage.activity.remove(id);
            });
        },
      },
    };

    const ui = {
      rows: [Activities_Header, table],
    };

    return ui;
  }

  init() {
    this.$$("activitiesDatatable").sync(Storage.activities);
    Storage.contacts.waitData.then(() => {
      // console.log(Storage.activities.data);
    });

    //  fetch("http://localhost:8096/api/v1/activitytypes/")
    //    .then((response) => {
    //      return response.json();
    //    })
    //    .then((data) => {
    //      console.log(data);
    //    });
    //  fetch("http://localhost:8096/api/v1/activities/")
    //    .then((response) => {
    //      return response.json();
    //    })
    //    .then((data) => {
    //      console.log(data);
    //    });
    //  fetch("http://localhost:8096/api/v1/contacts/")
    //    .then((response) => {
    //      return response.json();
    //    })
    //    .then((data) => {
    //      console.log(data);
    //    });
  }
}
