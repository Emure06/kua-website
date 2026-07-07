import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://kua-parungpanjang.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        }
    ];
}