const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
  coding: ["01-01", "01-02", "01-06", "01-07","01-08"],
  chess: ["01-01", "01-02", "01-08"],
  gaming: ["01-01", "01-02", "01-08"],
  hydrating: ["01-01", "01-02", "01-05"]
}

nlwSetup.setData(data);
nlwSetup.load();