import Toast from "../lib/index";

test('create toast container', () => {
  Toast("success", "success");
  const container = document.getElementById("toast-container");
  expect(container).toBeDefined();
});