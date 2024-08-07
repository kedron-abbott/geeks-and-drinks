import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import ServerError from "~/components/ui/ServerError";
import MainHeading from "~/components/ui/MainHeading";
import NataliePic from "~/assets/img/natalie.png";
import MontyPic from "~/assets/img/monty.jpeg";
import SharonPic from "~/assets/img/sharon.jpeg";
import KedronPic from "~/assets/img/kedron.jpeg";

export default function AboutRoute() {
  const people = [
    {
      name: "Sharon Guiterrez",
      role: "Co-Founder / CEO",
      linkedin: "https://www.linkedin.com/in/sharonegutierrez",
      imagePath: SharonPic,
      bio: "Sharon Gutierrez is a highly passionate entrepreneur who is known for getting things done. She is the Co-Founder of Geeks & Drinks as well as the SaaS company, Pretty Simple: #1 Affordable Leads Tracking App. Her vision for Geeks & Drinks to create a safe and inclusive space for developers and other Geeks from all backgrounds to share meaningful conversations and support each other in career development.",
    },
    {
      name: "Monty Morgan",
      role: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/michaelmmorgan",
      imagePath: MontyPic,
      bio: "I'm a self-taught front end developer and currently work at Cognitive Space. I started Geeks & Drinks to meet new people when I moved to San Antonio.  I love how many cool people I've met through Geeks & Drinks. I'm a foodie and love to surf.",
    },
    {
      name: "Kedron Abbott",
      role: "Tech Community Director",
      linkedin: "http://linkedin.com/in/kedron-abbott",
      imagePath: KedronPic,
      bio: "I'm passionate about helping underrepresented folks get their next opportunity, especially when it's in tech. For work I've been a fullstack software engineer for the past 5 years, and serve as a mentor to undergrad students. When I'm not working I enjoy cooking, playing video games (PS5 and Switch), and collecting more houseplants - one could never have too many houseplants 🪴.",
    },
    {
      name: "Natalie Gonzalez",
      role: "Growth & Logistics Coordinator",
      linkedin: "https://www.linkedin.com/in/natalieangelinagonzalez",
      imagePath: NataliePic,
      bio: "Hey y’all, Natalie here. I’m a full stack developer (React, PL/SQL, .Net, and reluctantly Java) in healthcare tech. I’ve been a part of Geeks and Drinks for about two years and I’m excited to see it growing into what it is today and to keep the momentum going to make it even better for our community. I’m interested in helping grow the professional development and mentorship aspects of our meetup community, so reach out with ideas or feedback or thoughts around that!",
    },
  ];
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="bg-white dark:bg-slate-900">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
            <div className="text-center">
              <MainHeading title="About Us" />
              <p className="mt-4 text-lg leading-6 text-slate-500">
                <span style={{ color: "#fea614" }}>//</span> Just a Bunch of Geeks!{" "}
              </p>

              <p className="mx-auto mt-10 max-w-4xl sm:text-xl sm:leading-relaxed">
                Driven by our passion for tech, creating safe and inclusive spaces, and fostering community in San Antonio, our team is committed to making tech
                accessible for everyone.
              </p>
              <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">
                Geeks & Drinks was founded in 2021 when Sharon and Monty moved to San Antonio and wanted a way to meet other geeky/techy friends. The first
                meetups were often just 4 or 5 people talking about projects they were working on and as it grew they recognized there is a huge network of
                remote workers in software engineering, cybersecurity and IT that didn’t have a community. Over the years that community has grown to over 1,700
                and become not only a social outlet, but a support system and opportunity to find jobs. {" "}
              </p>
            </div>

            <div className="mt-14">
              <div className="text-center">
                <MainHeading title="Committee" />
                <p className="mt-4 text-lg leading-6 text-slate-500">
                  <span style={{ color: "#fea614" }}>//</span> Meet the Team!{" "}
                </p>
              </div>

              <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
                <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
                  {people.map((person) => (
                    <li key={person.name}>
                      <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imagePath} alt="" />
                      <h3 className="mt-6 text-lg font-semibold leading-8">{person.name}</h3>
                      <p className="comment text-base leading-7 text-slate-500"> {person.role}</p>
                      <p className="mt-4 text-base leading-7 sm:text-xl sm:leading-relaxed">{person.bio}</p>
                      <ul className="mt-6 flex gap-x-6">
                        <li>
                          <a href={person.linkedin} target="_blank" className="text-gray-400 hover:text-blue-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                fill="#fea614"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 flex text-left">
              <a href="/contact" className="btn-primary btn-lg btn w-full sm:w-auto">
                Interested in Volunteering? Contact Us <span aria-hidden="true"> &rarr;</span>
              </a>
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
