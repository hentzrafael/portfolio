import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://hentzrafael.com",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...services.map(({ slug }) => ({
			url: `https://hentzrafael.com/servicos/${slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
