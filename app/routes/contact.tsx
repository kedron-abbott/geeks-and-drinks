import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { i18nHelper } from "~/locale/i18n.utils";
import ServerError from "~/components/ui/ServerError";
import { useLoaderData } from "@remix-run/react";
import WarningBanner from "~/components/ui/WarningBanner";
import MainHeading from "~/components/ui/MainHeading";

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
  const contactLinks = [
    {
      name: "Email",
      description: "Contact us through email",
      icon: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z",
      viewBox: "0 -960 960 960",
      href: "mailto:sharon@prettysimple.app"
    },
    {
      name: "Discord",
      description: "Join us on discortd",
      icon: "M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z",
      viewBox: "0 -28.5 256 256",
      href: "https://discord.gg/EccBgwzWXq"
    },
    {
      name: "Meetup",
      description: "Our meetup page",
      icon: "M6.9805.5547a.518.518 0 00-.1055.0117c-.2873.0619-.4704.3437-.4082.6309.0619.2868.344.47.6309.4082a.5327.5327 0 00.4082-.6328c-.0542-.251-.2782-.4206-.5254-.418zm6.455.6387a.9836.9836 0 00-.5136.1425c-.4698.2818-.6237.8898-.3418 1.3594.2822.4696.8919.6216 1.3613.3399.4698-.2821.6217-.8901.3399-1.3594a.9919.9919 0 00-.8458-.4824zm-3.0292 2.2363c-.9744.0047-1.9565.292-2.8204.8887-.8745.6041-1.4965 1.436-1.8476 2.3593-.5085.0689-1.0096.239-1.461.5508-1.4918 1.0307-1.886 3.0391-.9394 4.5625-1.2846 1.1762-1.5815 3.1356-.6055 4.6485.579.897 1.4882 1.437 2.4649 1.5976.018.732.238 1.466.6855 2.1133 1.224 1.7709 3.6526 2.2157 5.4238.9922.0677-.047.1198-.1061.1836-.1563.9872.8809 2.4708 1.0255 3.6075.2403.6065-.4189.9929-1.0292 1.162-1.6914.8895.0326 1.7956-.1935 2.584-.7383 1.8916-1.3067 2.3995-3.8615 1.1895-5.789.9713-.819 1.1798-2.2514.4336-3.3087-.3327-.4718-.8028-.7806-1.3164-.9336.0752-.984-.1704-1.9979-.7754-2.873-1.1792-1.7058-3.3327-2.3315-5.1953-1.6563a5.1058 5.1058 0 00-2.7735-.8066zm-5.6036.8164a.7589.7589 0 00-.4238.1348c-.3447.2383-.4317.7097-.1934 1.0546.2384.3447.7116.4317 1.0567.1934a.7574.7574 0 00.1933-1.0547.7581.7581 0 00-.6328-.3281zM20.797 6.617a.8419.8419 0 00-.4707.1505.8453.8453 0 101.1758.2148.8452.8452 0 00-.7051-.3652zm-8.1504 1.0274c.0629.0004.1244.0053.1816.0137.2286.0336.3655.119.4512.1875.1682.1342.2726.2412.4316.3926.2394.2275.4132.089.5332.0195.208-.1209.3692-.2181.9844-.207.6332.011 1.3626.2366 1.5137 1.3164.1682 1.1994-1.9656 4.2891-1.8164 5.7226.1054 1.0103 1.8146.2987 1.959 1.2207.1872 1.197-2.1353.752-2.666.4922-.832-.4077-1.337-1.3399-1.1211-2.2597.1612-.6882 1.7-3.4979 1.7578-3.9297.0587-.4404-.1773-.477-.3242-.4844-.1895-.0098-.3394.0808-.5254.3613-.1692.2558-2.082 4.0856-2.248 4.3985-.2969.5594-.6698.6938-1.045.6738-.5472-.0285-.7978-.3206-.7188-.8477.0467-.31 1.2594-3.0491 1.3223-3.4765.0387-.2643-.0132-.5452-.2754-.6797-.2625-.1346-.5713.0704-.664.2266-.128.2154-1.8482 4.7065-2.0313 5.039-.3168.576-.6508.7594-1.1523.7832-1.1862.0562-2.0656-.919-1.6778-2.1152.173-.5328 1.3159-4.5716 1.8946-5.5996C7.799 8.2015 8.8782 7.676 9.627 8c.3878.1679.9252.4377 1.084.5078.366.1622.7594-.2776.914-.4121.1549-.1345.3017-.2765.4902-.3574.1412-.0605.3426-.0947.5313-.0938zm10.8808 2.0567a.4683.4683 0 00-.0937.0117.4671.4671 0 00-.3594.5547.4696.4696 0 00.5567.3594c.2523-.0546.414-.3044.3593-.5567a.4696.4696 0 00-.4629-.3691zm-22.5195.8105a.9972.9972 0 00-.832.4336c-.3123.4553-.1977 1.0784.2578 1.3906.4555.3123 1.0783.1956 1.3906-.2597s.1977-1.0765-.2578-1.3887a.9992.9992 0 00-.5586-.1758zm21.295 2.0938a.635.635 0 00-.127.0136.6268.6268 0 00-.4805.7461.6278.6278 0 00.7461.4825c.3393-.0733.5558-.407.4824-.7461a.6295.6295 0 00-.621-.4961zM4.0624 18.703a.453.453 0 00-.0918.0117c-.2507.0543-.4117.3018-.3574.5528.054.251.302.4097.5527.3554a.4644.4644 0 00.3555-.5527.4655.4655 0 00-.459-.3672zm13.6758 1.5508a1.0444 1.0444 0 00-.584.1856c-.4758.3287-.5945.9813-.2656 1.457.3288.4756.9809.5943 1.457.2656.4758-.3287.5945-.9814.2656-1.457a1.0444 1.0444 0 00-.873-.4512zm-6.338 1.9004a.6427.6427 0 00-.3593.1152.6456.6456 0 00-.164.8985.6457.6457 0 00.8984.164.6456.6456 0 00.164-.8984.646.646 0 00-.539-.2793Z",
      viewBox: "0 0 24 24",
      href: "https://www.meetup.com/meetup-group-umecjcqo/"      
    },
    {
      name: "EventBrite",
      description: "Our meetup page",
      icon: "m117.475323 82.7290398c19.297105-4.2882455 38.594209 3.5735379 49.314823 18.5823972l-85.2884381 19.297105c2.8588303-18.344162 16.6765102-33.5912567 35.9736151-37.8795022zm49.791295 70.7560502c-6.670604 9.767671-16.914746 16.676511-28.588304 19.297105-19.297104 4.288246-38.8324448-3.573538-49.5530586-18.820633l85.5266736-19.297105 13.81768-3.097066 26.682417-5.955896c-.238236-5.717661-.952944-11.435322-2.144123-16.914746-10.720614-45.9795215-57.653078-74.8060606-104.585543-64.0854469-46.9324644 10.7206138-76.2354752 56.4618989-65.2766256 102.6796559 10.9588495 46.217757 57.6530786 74.80606 104.5855426 64.085446 27.63536-6.194132 49.076587-24.776529 60.035437-48.361879z",
      viewBox: "0 0 256 256",
      href: "https://www.eventbrite.com/o/geeks-and-drinks-45213976753"      
    }      
  ]
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="bg-white dark:bg-gray-900">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
            <div className="text-center">
              <MainHeading title="Contact Us" />
              <p className="mt-4 text-lg leading-6 text-gray-500">Let’s connect!  </p>
            </div>
            <div className="mx-auto mt-14 max-w-xl">
            <ul>
              {contactLinks.map((link) => (
                <li key={link.name} className="mb-3 contact-list-container">
                  <a href={link.href} target="_blank" className="contact-list-layout">

                      <svg className="h-12 w-12" viewBox={link.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <path
                          d={link.icon}
                        
                        />
                      </svg>
  
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold leading-8">{link.name}</h3>
                      <p>{link.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            </div>
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
