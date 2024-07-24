import Head from "./components/head";
import ConceptData from "./components/concept/conceptData";
import Ifjs from "./components/if/if-js";
import Switch from "./components/switch/switch ";
import Functions from "./components/function/functions";

const Home = () => {
  return (
    <section className="text-white w-[75vw] mx-auto">
      <Head />
      <ConceptData />
      <Ifjs />
      <Switch />
      <Functions />

    </section>
  );
};

export default Home;
