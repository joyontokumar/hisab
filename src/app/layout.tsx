"use client";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../app/globals.css";
import { persistor, store } from "../state-management/store";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <title>Hishabee</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="description" content="Hishabee - E-commerce"></meta>
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
