import { MetaTagsDto } from "~/application/dtos/seo/MetaTagsDto";

export async function getSeoMetaTags(request?: Request): Promise<MetaTagsDto> {
  const pathname = request ? new URL(request.url).pathname : "";
  return getSeoMetaTagsFromPathname(pathname);
}

async function getSeoMetaTagsFromPathname(pathname: string) {
  const title = "Geeks and Drinks";
  const description = "A function for San Antonio Coders";
  const keywords = "developer,meetup,san-antonio";
  const image = "https://geeksanddrinks.tech/favicon-32x32.png";
  const twitterImage = "https://geeksanddrinks.tech/favicon-32x32.png";
  const twitterCreator = "Geeks&&Drinks";
  const twitterSite = "Geeks&&Drin";

  const metaTags: MetaTagsDto = [
    {
      charset: "utf-8",
      title,
      description,
      keywords,
      "og:title": title,
      "og:type": "website",
      "og:url": pathname,
      "og:image": image,
      "og:card": "summary_large_image",
      "og:creator": twitterCreator,
      // "og:site": request ? new URL(request.url).host : "",
      "og:description": description,
      "twitter:image": twitterImage,
      "twitter:card": "summary_large_image",
      "twitter:creator": twitterCreator,
      "twitter:site": twitterSite,
      "twitter:title": title,
      "twitter:description": description,
    },
  ];

  return metaTags;
}
