sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        const oData = {
          recipient: {
            name: "World",
          },
          lang: "SAP UI5",
        };
        const data = new JSONModel(oData);
        this.getView().setModel(data, "datamodel");

        //set i18a model on view
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n"
        });

        this.getView().setModel(i18nModel, "i18n");

      },
      onShowHello() {

        const i18text = this.getView().getModel("i18n").getResourceBundle().getText("showHelloButtonText");
        console.log(i18text);

        MessageToast.show("i18text", {
          duration: 3000,
          my: sap.ui.core.Popup.Dock.CenterBottom,
          at: sap.ui.core.Popup.Dock.CenterBottom,
          of: window,
        });
      },
    });
  }
);
