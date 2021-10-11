import { JetView } from "webix-jet";
import { Storage } from "../../models/Storage";

export default class Activities_Form extends JetView {
  config() {
    return {
      view: "form",
      localId: "Activities_Form",
      elements: [
        { view: "textarea", id:"Details", label: "Details", width: 650, height: 100 },
        {
          view: "richselect",
          id: "richSelectActivitiesTypes",
          name: "id",
          label: "Type",
          options: Storage.activityTypes,
        },
        {
          view: "richselect",
          id: "richSelectContacts",
          name: "id",
          body: {
            template: "#id#",
          },
          label: "Contact",
          options: Storage.activityTypes,
        },
        {
          cols: [
            {
              view: "datepicker",
              label: "Date",
              width: 300,
            },
            {
              view: "datepicker",
              label: "Time",
              type: "time",
              width: 300,
            },
          ],
        },
        {
          view: "checkbox",
          labelRight: "Completed",
          labelWidth: 0,
        },
        {
          cols: [
            {},
            {
              view: "button",
              value: "Save",
              width: 130,
              align: "center",
              css: "webix_primary",
              click: () => this.saveEntry(),
            },
            {
              view: "button",
              value: "Cancel",
              width: 130,
              align: "center",
              click: () => this.hideWindow(),
            },
          ],
        },
      ],
    };
  }

  saveEntry() {
    const form = this.$$("Activities_Form");
    const entry = form.getValues();
    console.log(entry);
  }

  hideWindow() {
    this.getParentView().hideWindow();
  }
}
