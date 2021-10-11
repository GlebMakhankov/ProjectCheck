import { JetView } from "webix-jet";
import Activities_Form from "./Activities_Form";

export default class Activities_Window extends JetView {
  config() {
    return {
      view: "window",
      localId: "Activities_Window",
      height: 500,
      width: 650,
      position: "center",
      head: "My window",
      body: Activities_Form,
    };
  }

  showWindow() {
    this.getRoot().show();
  }

  hideWindow() {
    this.getRoot().hide();
  }
}
