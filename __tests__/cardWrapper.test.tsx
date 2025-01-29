// import { render, screen } from "@testing-library/react";

// import { CardWrwpper } from "@/app/components/shared/card";
// import { ReactNode } from "react";

// jest.mock("../src/app/components/shared/main-link", () => ({
//   __esModule: true,
//   default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
// }));

// jest.mock("next/image", () => ({
//   __esModule: true,
//   default: ({ alt, src }: { alt: string; src: string }) => (
//     <img alt={alt} src={src} />
//   ),
// }));
// describe("CardWrwpper", () => {
//   const mockPlace = {
//     id: "1",
//     titlec: "Cozy Villa",
//     name: "Villa in Bali",
//     price: 200,
//     currency: "USD",
//   };

//   const props = {
//     imgUrl: "https://example.com/image.jpg",
//     locale: "en",
//     place: mockPlace,
//   };

//   it("renders the CardWrwpper with the correct props", () => {
//     render(<CardWrwpper {...props} />);

//     expect(screen.getByText(mockPlace.title)).toBeInTheDocument();

//     expect(screen.getByText(mockPlace.name)).toBeInTheDocument();

//     expect(
//       screen.getByText(`${mockPlace.price}${mockPlace.currency}`)
//     ).toBeInTheDocument();

//     const image = screen.getByAltText("property image");
//     expect(image).toBeInTheDocument();
//     expect(image).toHaveAttribute("src", "https://example.com/image.jpg");

//     expect(screen.getByText("View Property")).toBeInTheDocument();
//   });

//   it("renders children if passed", () => {
//     render(
//       <CardWrwpper {...props}>
//         <div>Custom Child</div>
//       </CardWrwpper>
//     );

//     expect(screen.getByText("Custom Child")).toBeInTheDocument();
//   });

//   it("does not render children if not passed", () => {
//     render(<CardWrwpper {...props} />);

//     const customChild = screen.queryByText("Custom Child");
//     expect(customChild).not.toBeInTheDocument();
//   });
// });
