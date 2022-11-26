import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActionFunction, json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { Language } from "remix-i18next";
import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import { i18nHelper } from "~/locale/i18n.utils";
import OpenSuccessModal from "~/components/ui/OpenSuccessModal";
import OpenErrorModal from "~/components/ui/OpenErrorModal";

type LoaderData = {
  title: string;
  i18n: Record<string, Language>;
};
export let loader: LoaderFunction = async ({ request }) => {
  let { t, translations } = await i18nHelper(request);
  const data: LoaderData = {
    title: `${t("newsletter.headline")} | ${process.env.APP_NAME}`,
    i18n: translations,
  };
  return json(data);
};

export const meta: MetaFunction = ({ data }) => ({
  title: data?.title,
});

export const action: ActionFunction = async ({ request }) => {
  const { t } = await i18nHelper(request);
  await new Promise((res) => setTimeout(res, 1000));
  const formData = await request.formData();
  const firstName = formData.get("first_name")?.toString() ?? "";
  const lastName = formData.get("last_name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";

  if (!firstName || !lastName || !email) {
    return json({ error: "Missing fields" }, { status: 400 });
  }

  const API_KEY = process.env.CONVERTKIT_APIKEY;
  const FORM_ID = process.env.CONVERTKIT_FORM;

  if (!API_KEY || !FORM_ID) {
    return { error: "Set the CONVERTKIT_ .env variables" };
  }
  const API = "https://api.convertkit.com/v3";

  const res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({ email, firstName, lastName, api_key: API_KEY }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  try {
    const response = await res.json();
    if (response.error) {
      return { error: response.message };
    } else {
      return json({ success: t("newsletter.subscribed") }, { status: 200 });
    }
  } catch (e: any) {
    return { error: e.message };
  }
};

export default function NewsletterRoute() {
  const { t } = useTranslation();
  const actionData = useActionData();
  const transition = useTransition();
  const isSubscribing = transition.state === "submitting" && transition.submission.formData.get("action") === "subscribe";
  const state: "idle" | "success" | "error" | "submitting" = transition.submission
    ? "submitting"
    : actionData?.subscription
    ? "success"
    : actionData?.error
    ? "error"
    : "idle";

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isSubscribing && actionData?.success) {
      formRef.current?.reset();
    }
  }, [actionData?.success, isSubscribing]);

  const [actionResult, setActionResult] = useState<{ error?: string; success?: string }>();

  useEffect(() => {
    setActionResult(actionData);
  }, [actionData]);

  return (
    <div>
      <div>
        <Header />
        <div className="bg-white dark:bg-gray-900">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:align-center sm:flex sm:flex-col">
              <div className="relative mx-auto w-full max-w-2xl overflow-hidden py-12 px-2 sm:py-6">
                <svg className="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                  <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-black" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                  className="absolute right-full bottom-0 -translate-x-1/2 transform"
                  width="404"
                  height="404"
                  fill="none"
                  viewBox="0 0 404 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-black" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div className="text-center">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-slate-200 sm:text-4xl">{t("newsletter.headline")}</h1>
                  <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">{t("newsletter.subheadline")}</p>
                </div>
                <div className="mx-auto mt-12 max-w-xl">
                  <Form ref={formRef} replace method="post" aria-hidden={state === "success"} className="mt-9 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <input name="action" type="hidden" value="subscribe" readOnly hidden />
                    <input name="source" type="hidden" value="newsletter" readOnly hidden />
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                        {t("newsletter.form.firstName")}
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                        {t("newsletter.form.lastName")}
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                        {t("newsletter.form.email")}
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          aria-label="Email address"
                          aria-describedby="error-message"
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between space-x-2 sm:col-span-2">
                      <div>
                        {state === "success" ? (
                          <div>
                            <p>{t("newsletter.checkEmail")}</p>
                          </div>
                        ) : state === "error" ? (
                          <p>{actionData.message}</p>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <button
                        type="submit"
                        disabled={state === "submitting"}
                        className={clsx(
                          "inline-flex justify-center rounded-sm border border-transparent bg-theme-500 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none",
                          state === "submitting"
                            ? "cursor-not-allowed opacity-80"
                            : "hover:bg-theme-600 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-600"
                        )}
                      >
                        {state === "submitting" ? t("newsletter.subscribing") + "..." : t("newsletter.subscribe")}
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>

      <OpenSuccessModal
        title={t("shared.success")}
        description={actionResult?.success?.toString() ?? ""}
        open={!!actionResult?.success}
        onClose={() => setActionResult(undefined)}
      />

      <OpenErrorModal
        title={t("shared.error")}
        description={actionResult?.error?.toString() ?? ""}
        open={!!actionResult?.error}
        onClose={() => setActionResult(undefined)}
      />
    </div>
  );
}