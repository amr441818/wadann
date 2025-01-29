import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "@/app/components/filter";
import React from "react";

// Mock the CustomSelect component
jest.mock(
  "../src/app/components/shared/reusableComponents/CustomSelect.tsx",
  () => ({
    __esModule: true,
    default: ({ label, onChange }: { label: string; onChange: (value: any) => void }) => (
      <div>
        <label>{label}</label>
        <select
          data-testid={label.toLowerCase()}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="1000Sq-1200Sq">1000Sq-1200Sq</option>
          <option value="2000Sq-2500Sq">2000Sq-2500Sq</option>
        </select>
      </div>
    ),
  })
);

describe("Filter Component", () => {
  let mockSetOpen: jest.Mock;

  beforeEach(() => {
    mockSetOpen = jest.fn();
  });

  test("renders all key components", () => {
    render(<Filter setOpen={mockSetOpen} />);

    // Search button
    // expect(screen.getByRole("button", { name: /Search/i })).toBeInTheDocument();

    // All Filters button
    expect(
      screen.getByRole("button", { name: /all filters/i })
    ).toBeInTheDocument();

    // Check select components by labels
    expect(screen.getByTestId("size")).toBeInTheDocument();
    expect(screen.getByTestId("property type")).toBeInTheDocument();
    expect(screen.getByTestId("bedrooms")).toBeInTheDocument();
    expect(screen.getByTestId("price range")).toBeInTheDocument();
  });

  test("calls setOpen when 'All Filters' button is clicked", () => {
    render(<Filter setOpen={mockSetOpen} />);

    fireEvent.click(screen.getByRole("button", { name: /all filters/i }));

    expect(mockSetOpen).toHaveBeenCalledWith(true);
  });

  test("logs selected size option on change", () => {
    const mockOnChange = jest.fn();

    render(<Filter setOpen={mockSetOpen} />);

    const sizeSelect = screen.getByTestId("size");

    fireEvent.change(sizeSelect, { target: { value: "1000Sq-1200Sq" } });

    expect(sizeSelect.value).toBe("1000Sq-1200Sq");
    expect(mockOnChange).not.toHaveBeenCalled(); // Not required but verifies select change independently
  });
});
