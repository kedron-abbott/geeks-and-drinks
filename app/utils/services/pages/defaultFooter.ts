import { TFunction } from "i18next";
import { FooterBlockDto, FooterBlockStyle } from "~/application/dtos/marketing/FooterBlockDto";

export function defaultFooter({ t }: { t: TFunction }): FooterBlockDto {
  return {
    style: FooterBlockStyle.columns,
    sections: [
      {
        name: "Site",
        items: [
          { name: t("blocks.footer.application.home"), href: "/" },
          { name: t("blocks.footer.application.contact"), href: "/contact" },
          { name: t("blocks.footer.application.about"), href: "/about" },
        ],
      },
      {
        name: "Info",
        items: [

          { name: t("blocks.footer.application.about"), href: "/about" },
          { name: t("blocks.footer.application.events"), href: "/events" },
          { name: t("blocks.footer.application.community-guidelines"), href: "/community-guidelines" },
        ],
      },      
    ],
    socials: {
      meetup: ".",
      eventbrite: ".",
      discord: ".",
    },
  };
}
