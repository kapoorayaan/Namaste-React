import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Footer from "../Footer";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe(
    "https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
  );
});

test("Online status should be green on rendering the head", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const OnlineStatus = header.getByTestId("online-status");
  expect(OnlineStatus.innerHTML).toBe("🟢");
});
test("Cart should have 0 items on rendering head", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-0 items");
});
test("Footer should be present on rendering head", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );
  const footer = header.getByTestId("footer");
  expect(footer.innerHTML).toBe("This Site is developed by Ayaan");
});
