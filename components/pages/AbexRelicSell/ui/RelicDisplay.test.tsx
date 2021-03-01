import { fireEvent, render } from "@testing-library/react";
import React from "react";
import HeroClass from "../../../../types/HeroClass";
import RelicDisplay from "./RelicDisplay";

describe("Test RelicDisplay component", () => {
  it("Should give the right level on click", async () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <RelicDisplay
        relic={1106}
        position={1}
        level={5}
        theClass={HeroClass.ranger}
        isActive
        onClick={onClick}
      />
    );

    fireEvent.click(getByRole("button", {}));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(1, "ranger", 1106);
  });

  it("Should display the check if active", () => {
    const { rerender, getByTestId } = render(
      <RelicDisplay
        relic={1106}
        position={1}
        level={5}
        theClass={HeroClass.ranger}
        isActive
        onClick={jest.fn()}
      />
    );

    expect(() => getByTestId("check")).not.toThrow();

    rerender(
      <RelicDisplay
        relic={1106}
        position={1}
        level={5}
        theClass={HeroClass.ranger}
        onClick={jest.fn()}
      />
    );

    expect(() => getByTestId("check")).toThrow();
  });
});
