import logo from "./logo.svg";
import "./App.css";

import ExcelExport from "./ExcelExport";
import ExcelExportComponent from "./ExcelExportComponent";
import Select from "./Select";
import Find from "./Find";
import CustomSelect from "./CustomSelect";
import Myselect from "./Myselect";
import { lazy, Suspense } from "react";
// import WIndow from "./WIndow";
import Virtualized from "./Virtualized";
import VirtualizedImages from "./VirtualizedImages";

const City = lazy(() => import("./City"));
const Debouncing = lazy(() => import("./Debouncing"));
const Chart = lazy(() => import("./Chart"));
const ServerPagination = lazy(() => import("./ServerPagination"));
const MaterialPegination = lazy(() => import("./MatrialPegination"));
const Todo = lazy(() => import("./Todo"));
const SmallFunction = lazy(() => import("./SmallFunction"));
const NewSelect = lazy(() => import("./NewSelect"));
const FileUplode = lazy(() => import("./FileUplode"));
const CapitalWord = lazy(() => import("./CapitalWord"));
const ImageVirtualization = lazy(() => import("./VirtualizedImages"));
const StopWatch = lazy(() => import("./StopWatch"));
const RemoveDub = lazy(() => import("./RemoveDub"));
const ReverseString = lazy(() => import("./ReverseString"));
const FindMissElement = lazy(() => import("./FindMissElement"));
const CountWovel = lazy(() => import("./CountWovel"));
const FindLargestString = lazy(() => import("./FindLargestSting"));
const Palindrom = lazy(() => import("./Palindrom"));
const Parent = lazy(() => import("./Parent"));
const Child = lazy(() => import("./Child"));
const Header = lazy(() => import("./Header"));
function App() {
  return (
    <>
      <Suspense fallback={<p> Loadings...</p>}>
        <Header />
      </Suspense>
    </>
  );
}

export default App;
