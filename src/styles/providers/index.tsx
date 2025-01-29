"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { DirectionProvider } from "@radix-ui/react-direction"
import { PhotoProvider } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

const Providers = ({ children, locale }: { children: React.ReactNode; locale: string }) => {
    const queryClient = new QueryClient()
    return (
        <DirectionProvider dir="ltr">
            <QueryClientProvider client={queryClient}>
                <PhotoProvider>{children} </PhotoProvider>
            </QueryClientProvider>
        </DirectionProvider>
    )
}

export default Providers
