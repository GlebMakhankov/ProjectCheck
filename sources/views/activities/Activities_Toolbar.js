import { JetView } from "webix-jet";
import Activities_Window from "./Activities_Window";

export default class Activities_Header extends JetView {
  config() {
    return {
      view: "toolbar",
      elements: [
        {},
        {
          view: "button",
          label: "Add activity",
          width: 150,
          type: "icon",
          icon: "mdi mdi-plus-circle",
          click: () => this.window.showWindow(),
        },
      ],
    };
  }

  init(){
	  this.window = this.ui(Activities_Window);
  }
}
