import useActiveTabUrl from "../hooks/useActiveTabUrll";
import Tracker from "./Tracker/Tracker";

const App = () => {
  const url = useActiveTabUrl();
  return (
    <main>
      <div>
        <Tracker siteName={url} siteCategory="Search" />
      </div>
    </main>
  );
};
export default App;
