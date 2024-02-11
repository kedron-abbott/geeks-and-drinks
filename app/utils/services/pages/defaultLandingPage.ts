import { TFunction } from "i18next";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";

export function defaultLandingPage({ t }: { t: TFunction }) {
  const blocks: PageBlockDto[] = [
    {
      header: {
        style: "simple",
        withLogo: true,
        withSignInAndSignUp: false,
        withThemeSwitcher: true,
        withLanguageSwitcher: false,
        links: [
          {
            path: "/events",
            title: "blocks.header.events",
            id: "7050",
          },
          {
            path: "/contact",
            title: "Contact",
            id: "2844",
          },
          {
            path: "/about",
            title: "blocks.header.about",
            id: "6663",
          },
          {
            id: "1003",
            title: "blocks.header.community-guidelines",
            path: "/community-guidelines",
          },
        ],
      },
    },
    {
      hero: {
        style: "simple",
        headline: "Geeks && Drinks",
        subheadline:
          "Our mission is to create a safe and inclusive space for developers and geeks to share ideas, get inspired and build community. We do this by creating and hosting events that are both social and educational. ",
        image: "https://via.placeholder.com/720x600?text=Your%20Hero%20Image",
        topText: {
          text: "// a function for san antonio coders",
        },
        cta: [
          {
            text: "Join Mailing List",
            href: "https://app.us20.list-manage.com/subscribe?u=c9cb2077e410a0c23be6409e3&id=5cc26c1303",
            target: "_blank",
            isPrimary: true,
          },
          {
            text: "View Events",
            href: "/events",
            isPrimary: false,
          },
        ],
        bottomText: {
          text: "",
          link: {
            text: "",
            href: "",
          },
        },
      },
    },
  ];
  return blocks;
}
