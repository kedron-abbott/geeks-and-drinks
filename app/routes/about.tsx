import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { i18nHelper } from "~/locale/i18n.utils";
import ServerError from "~/components/ui/ServerError";
import { useLoaderData } from "@remix-run/react";
import WarningBanner from "~/components/ui/WarningBanner";
import Community from "~/components/front/blocks/Community"
import PageBlockUtils from "~/utils/pages/PageBlockUtils";
import TestimonialsSimple from "~/components/front/blocks/variants/testimonials/TestimonialsSimple";
type LoaderData = {
  title: string;
  formUrl: string;
};
export const loader: LoaderFunction = async ({ request }) => {
  let { t } = await i18nHelper(request);
  const data: LoaderData = {
    title: `${t("contact.headline")} | ${process.env.APP_NAME}`,
    formUrl: process.env.CONTACT_FORMSPREE?.toString() ?? "",
  };
  return json(data);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => [{ title: data?.title }];

export default function ContactRoute() {
  const { t } = useTranslation();
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="bg-white dark:bg-gray-900">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-slate-200 sm:text-4xl">About Us</h1>
              <p className="mt-4 text-lg leading-6 text-gray-500">{t("contact.subheadline")}</p>
            </div>
            <Community item={PageBlockUtils.defaultBlocks.community!} />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return <ServerError />;
}