import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import Page from "@/app/[locale]/(Legacy-engine)/page"
import { act } from "react-dom/test-utils"

describe("MainHeader", () => {
    it("should render the MainHeader component", async () => {
        await act(async () => {
            render(<Page params={Promise.resolve({ locale: "en" })} />)
        })

        expect( await screen.findByText('home page')).toBeInTheDocument();

        // waitFor(() => expect(screen.getByText("home page")).toBeInTheDocument(), { timeout: 5000 })
    })
})