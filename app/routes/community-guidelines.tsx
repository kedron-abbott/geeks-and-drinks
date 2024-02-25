import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import ServerError from "~/components/ui/ServerError";
import MainHeading from "~/components/ui/MainHeading";
import logo from "~/assets/img/logo-icon.png";

export default function CommunityGuidelinesRoute() {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="bg-white dark:bg-slate-900">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
            
            <div className="text-center">              
              <MainHeading title="Community Guidelines" />
              <p className="mt-4 text-lg leading-6 text-slate-500">
                <span style={{color:"#fea614"}}>//</span> A Function for San Antonio Coders
              </p>
            </div>
            
            <div className="text-left mt-10">
                <div className="flex mx-auto max-w-4xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <p className="mx-auto mt-4 sm:mt-0 max-w-4xl sm:text-xl sm:leading-relaxed">
                        At Geeks and Drinks, our mission is to create a safe and inclusive space for developers and geeks to share ideas, get inspired and build community. We do this by creating and hosting events that are both social and educational. Our goal is to make sure everyone feels safe and welcomed at our events.
                      </p>
                    </div>
                    <div>
                      <div className="highlight-block ma-2">
                        <p className="mx-auto mt-4 sm:mt-0 max-w-4xl font-bold sm:text-xl sm:leading-relaxed">
                          If drinking, be responsible and have a safe plan to get home. Below are some options if you feel you’re unable to drive:
                        </p> 
                        <ul className="list-inside text-lg font-bold list-decimal mt-3 ml-3">
                          <li className="mb-1">Wait it out</li>
                          <li className="mb-1">Get an Uber</li>
                          <li>Get a ride from someone you trust</li>
                        </ul>
                      </div>
                    </div>                   
                  </div>

                </div>



                <p className="mx-auto mt-14 max-w-4xl text-lg font-semibold sm:text-xl sm:leading-relaxed">
                  We do not tolerate harassment or abuse of any kind.{" "}
                </p>

                <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">
                  Harassment includes but is not limited to offensive verbal or written comments related to gender, age, sexual orientation, disability,
                  physical appearance, body size, race, religion, social class, economic status, veteran status. Additional cases of harassment include but not
                  limited to sharing sexual images, deliberate intimidation, stalking, following, brigading, doxxing, harassing photography or recording,
                  sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.{" "}
                </p>

                <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">
                  If what you’re doing is making someone feel uncomfortable, that counts as harassment and is enough reason to stop doing it. If you are being
                  harassed, notice that someone else is being harassed, or have any other concerns, please contact a Geeks and Drinks admin via Discord or in
                  person.{" "}
                </p>



                <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">
                  Anyone who acts inappropriately will be given a one-time warning or banned from attending future events pending severity. Weapons and illegal
                  substances are not permitted in our events.
                </p>

                <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">❤️ We appreciate you being part of our Geeks and Drinks community! ❤️ </p>
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
