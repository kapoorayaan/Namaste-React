import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MenuData } from "../../mocks/Data.js";
import ResMenu from "../ResMenu.js";
import Header from "../Header.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MenuData);
    },
  });
});

test("Update Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <ResMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("btn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart- 2 items");
});
