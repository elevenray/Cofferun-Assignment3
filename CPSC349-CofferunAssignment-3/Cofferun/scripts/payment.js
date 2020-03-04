(function(window) {
  "use strict";
  var FORM_SELECTOR_PAYMENT = "[data-payment='form']";
  var FormHandler = App.FormHandler;
  var payment = new FormHandler(FORM_SELECTOR_PAYMENT);

  payment.addSubmitHandlerPayment(function(data) {});

})(window);
