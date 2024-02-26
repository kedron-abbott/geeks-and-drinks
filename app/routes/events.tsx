import Header from "~/components/front/Header";
import { useLoaderData } from "@remix-run/react";
import MainHeading from "~/components/ui/MainHeading";

const MAX_EVENTS = 12;

export async function loader() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.EVENTBRITE_BEARER_TOKEN}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(
    `https://www.eventbriteapi.com/v3/organizations/${process.env.EVENTBRITE_ORG_ID}/events/?time_filter=current_future&expand=venue,logo`,
    requestOptions
  );

  if (!response.ok) {
    // render "unable to fetch events or something"
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data;
}

function Title (series:{series: boolean}): "Monthly Meetup" | "Special Event" {
  return series.series ? "Monthly Meetup" : "Special Event";
}

export default function Events() {
  const { events } = useLoaderData<typeof loader>();
  //need some sort of null state here for when there are no events
  return (
    <div>
      <div className="relative">
        <Header />
      </div>

      <div className="bg-white dark:bg-slate-900">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
          <div className="text-center">
            <MainHeading title="Events" />
            <p className="mt-4 text-lg leading-6 text-slate-500">
              <span style={{ color: "#fea614" }}>//</span> Functions for San Antonio Coders
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 ">
            <ul className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {events
                .slice(0, MAX_EVENTS)
                .map(
                  (event: {
                    id: string;
                    logo: { url: string };
                    url: string;
                    start: { local: string };
                    name: { text: string };
                    description: { text: string };
                    venue: { name: string };
                    is_series: boolean;
                  }) => (
                    <li
                      key={event.id}
                      className="event-card-container relative flex flex-col  justify-between overflow-hidden rounded-sm border border-slate-700 dark:bg-slate-900 bg-white"
                    >
                      <div>
                        <div className="dark:bg-slate-900 text-center py-10">
                        <h1 className="my-10 flex flex-col text-2xl font-extrabold sm:text-2xl md:text-5xl">
                          <p>
                            <span style={{ color: "#fea614" }}> &#65371; </span>
                            <Title series={event.is_series}/>
                            <span style={{ color: "#fea614" }}> &#65373; </span>
                          </p>
                        </h1>
                        <p className="comment text-xl  text-slate-500">
                          {" " + event.name.text}
                        </p>
                        </div>

                        <div className="p-4">
                          <a href={event.url}>
                            <h1 className="text-gray-900 text-xl font-bold sm:text-2xl dark:text-slate-200">{event.name.text}</h1>
                          </a>
                          <p className="mt-2 text-lg sm:text-lg sm:leading-relaxed text-slate-500">{event.description.text}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between p-4">
                        <div className="flex md:col-span-2">
                          <div className="chip bg-slate-950 flex items-center">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 -960 960 960">
                              <g>
                                <circle cx="128" cy="128" r="128"></circle>
                                <path
                                  d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
                                  fill="#e2e8f0"
                                  fillRule="nonzero"
                                ></path>
                              </g>
                            </svg>
                            <p className="ml-1 text-xs text-slate-200">{new Date(event.start.local).toDateString()}</p>
                          </div>
                          <div className="chip bg-slate-950 ml-1 flex items-center">
                            <a href={event.url} className="flex items-center">
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 -960 960 960">
                                <g>
                                  <circle cx="128" cy="128" r="128"></circle>
                                  <path
                                    d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                                    fill="#e2e8f0"
                                    fillRule="nonzero"
                                  ></path>
                                </g>
                              </svg>
                              <p className="ml-1 text-xs text-slate-200">{event.venue.name}</p>
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-end mt-10 sm:mt-0">
                          <a
                            href={event.url}
                            target="_blank"
                            className="btn-md btn w-full sm:w-auto self-end btn-primary"
                          >
                            Register
                          </a>
                        </div>
                      </div>
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
