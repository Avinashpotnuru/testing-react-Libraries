/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../AuthProvider";
import ChildComponent from "./ChildComponent";

// eslint-disable-next-line no-undef
describe("ChildComponent", () => {
  // eslint-disable-next-line no-undef
  it('should render "hai" when auth is false', () => {
    render(
      <AuthContext.Provider value={[false, "John"]}>
        <ChildComponent />
      </AuthContext.Provider>
    );

    expect(screen.getByText("hai John")).toBeInTheDocument();
  });

  it('should render "get lost" when auth is true', () => {
    render(
      <AuthContext.Provider value={[true, "John"]}>
        <ChildComponent />
      </AuthContext.Provider>
    );

    expect(screen.getByText("get lost")).toBeInTheDocument();
  });
});
