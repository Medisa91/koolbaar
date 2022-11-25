import { render } from "test";

import { Banner } from "./index";

describe("Main component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<Banner />);

    expect(component).toBeTruthy();
  });

  it("renders texts successfuly", () => {
    const { getByText } = render(<Banner />);

    getByText("superplate");
    getByText(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    );
  });

  it("renders button successfuly", () => {
    const { getByText } = render(<Banner />);

    getByText("Docs");
  });
});
