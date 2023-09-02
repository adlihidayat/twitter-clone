import Feed from "./_components/feed";
import Widget from "./_components/widget";

export default function Home() {
  return (
    <main className="lg:flex sm:ml-20">
      <Feed />
      <Widget />
    </main>
  );
}
