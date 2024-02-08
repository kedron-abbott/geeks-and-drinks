import Header from "~/components/front/Header";
import { useLoaderData } from "@remix-run/react";
import MainHeading from "~/components/ui/MainHeading";

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
  console.log(data)
  return data;
}

export default function Events() {
  const { events } = useLoaderData<typeof loader>();
  //need some sort of null state here for when there are no events
  return (
    <div>
      <div className="relative">
        <Header />
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
          <div className="text-center">
            <MainHeading title="Events" />
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {events.map((event: 
              {
                id: string, 
                logo: {url: string}, 
                url: string, 
                start: {local: string},
                name: {text: string},
                description: {text: string},
                venue: {name: string}
              }) => (
              <div key={event.id} className="event-card-container group relative flex flex-col overflow-hidden rounded-sm border border-gray-200 bg-white">
                <div className="event-card-image__aspect-container">
                  <img src={event.logo.url} className="event-card-image" />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h1 className="text-gray-900">
                    <a href={event.url}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {event.name.text}
                    </a>
                  </h1>
                  <p className="text-sm text-gray-500">{event.description.text}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{new Date(event.start.local).toDateString()}</p>
                    <p className="text-base font-medium text-gray-900">{event.venue.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
