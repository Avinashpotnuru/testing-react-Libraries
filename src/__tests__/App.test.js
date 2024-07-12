/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./AuthProvider";

// Create a mock store
const mockStore = configureStore([]);
const initialState = { name: "John Doe", count: 0 };
const store = mockStore(initialState);

describe("App Component", () => {
  it("renders the heading", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders the home page", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );
    expect(screen.getByText("home")).toBeInTheDocument();
  });

  it("navigates to the about page", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );

    screen.getByText("about").click();
    expect(screen.getByText("about")).toBeInTheDocument();
  });

  it("navigates to the details page", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );

    screen.getByText("Details").click();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it("navigates to the login page if not authenticated", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );

    screen.getByText("login").click();
    expect(screen.getByText("login")).toBeInTheDocument();
  });

  it("renders the team page", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );

    screen.getByText("team").click();
    expect(screen.getByText("team")).toBeInTheDocument();
  });

  it("renders the task page", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );

    screen.getByText("task").click();
    expect(screen.getByText("task")).toBeInTheDocument();
  });

  it("navigates to product details page", () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    );

    screen.getByText("Product ID: 1").click();
    expect(screen.getByText("Product ID: 1")).toBeInTheDocument();
  });
});
