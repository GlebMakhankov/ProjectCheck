import { JetView } from "webix-jet";
import { Storage } from "../../models/Storage";

export default class Contacts_List extends JetView {
  config() {
    return {
      view: "list",
      localId: "contactsList",
      maxWidth: 300,
      select: true,
      type: {
        height: 60,
      },
      template: (obj) => `
										<img src="http://simpleicon.com/wp-content/uploads/user1.svg"></img>
									 <div>
										 <div>${obj.FirstName} ${obj.LastName}</div>
										 <span>${obj.Company}</span>
									 </div>
								 `,
      on: {
        onAfterSelect: (id) => this.setContactInfoToTemplate(id),
      },
    };
  }

  init() {
	this.$$("contactsList").sync(Storage.contacts);
	Storage.contacts.waitData.then(() => {
		this.getParentView().initialSelection();
	  // this.initialSelection();
	});
 }
}
