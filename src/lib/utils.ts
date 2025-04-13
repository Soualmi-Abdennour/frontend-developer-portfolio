import { Metadata } from "next/types"
import metaImage from "@/assets/images/memoji-computer.png"


export function constructMetadata({
    title = "Portfolio",
    description = "Portfolio of a frontend web developer",
    image = metaImage.src,
    icons =metaImage.src
}: {
    title?: string,
    description?: string,
    image?: string,
    icons?: string
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: image }]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image]
        },
        icons,
        metadataBase: new URL("https://casecobra-sa.vercel.app")
    }
}