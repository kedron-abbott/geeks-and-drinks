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
        <div className="bg-white dark:bg-gray-900">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
            
            <div className="text-center">              
              <MainHeading title="Community Guidelines" />
              <p className="mt-4 text-lg leading-6 text-gray-500">
                  <span style={{color:"#fea614"}}>//</span> A Function for San Antonio Coders
                </p>
            </div>
            
            <div className="text-left mt-14">
                <div className="flex mx-auto max-w-4xl">
                  <div>
                    <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">
                      At Geeks and Drinks, our mission is [INSERT MISSION HERE], and this includes making sure everyone feels safe and welcomed at our events.{" "}
                    </p>
                    <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">
                      If drinking, be responsible and have a safe plan to get home. Below are some options if you feel you’re unable to drive:
                      <ul className="list-inside list-decimal mt-3">
                        <li>Wait it out</li>
                        <li>Get an Uber</li>
                        <li>Get a ride from someone you trust</li>
                      </ul>
                    </p>                    
                  </div>
                  <div>
                    <img src={logo} alt="geeks and drinks"/>
                  </div>
                </div>



                <p className="mx-auto mt-4 max-w-4xl text-lg font-semibold sm:text-xl sm:leading-relaxed">
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
