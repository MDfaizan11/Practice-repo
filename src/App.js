import logo from "./logo.svg";
import "./App.css";
import Pegination from "./Pegination";
import Newpegination from "./Newpegination";
import ExcelExport from "./ExcelExport";
import ExcelExportComponent from "./ExcelExportComponent";
import Select from "./Select";
import Find from "./Find";
import CustomSelect from "./CustomSelect";
import Myselect from "./Myselect";
import { lazy, Suspense } from "react";
// import WIndow from "./WIndow";
import Virtualized from "./Virtualized";
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
function App() {
  return (
    <>
      <Suspense fallback={<p> Loadings...</p>}>
        <CapitalWord />
      </Suspense>
    </>
  );
}

export default App;
