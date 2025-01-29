import { render, screen, waitFor } from "@testing-library/react" // Use act from testing-library
import "@testing-library/jest-dom"

import BlogTags from "@/app/components/blogs/BlogTags"

describe("MainHeader", () => {
    it("should render the MainHeader component", () => {
        // Resolve params before rendering
        render(<BlogTags tags={[]} />)
        // Uncomment the following line if a text check is required

        expect(screen.getByText("ddd")).toBeInTheDocument()
    })
})
