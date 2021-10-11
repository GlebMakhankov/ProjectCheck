class StorageConstructor {
  constructor() {
    this.contacts = new webix.DataCollection({
      url: "http://localhost:8096/api/v1/contacts/",
      save: "rest->http://localhost:8096/api/v1/contacts/",
    });
    this.activities = new webix.DataCollection({
      url: "http://localhost:8096/api/v1/activities/",
      save: "rest->http://localhost:8096/api/v1/activities/",
    });
    this.activityTypes = new webix.DataCollection({
      url: "http://localhost:8096/api/v1/activitytypes/",
      save: "rest->http://localhost:8096/api/v1/activitytypes/",
      scheme: {
        $init: function (item) {
			item.TypeID = item.id;
        },
      },
    });
    this.statuses = new webix.DataCollection({
      url: "http://localhost:8096/api/v1/statuses/",
      save: "rest->http://localhost:8096/api/v1/statuses/",
    });
  }
}

export const Storage = new StorageConstructor();
