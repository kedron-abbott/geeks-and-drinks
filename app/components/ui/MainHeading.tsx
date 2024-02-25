export default function MainHeading({ title }: { title: string }) {
  return (
    <h1 className="flex flex-col text-2xl font-extrabold sm:text-5xl md:text-5xl lg:text-7xl">
      <div>
        <span style={{ color: "#fea614" }}> &#65371; </span>
        {title}
        <span style={{ color: "#fea614" }}> &#65373; </span>
      </div>
    </h1>
  );
}
