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
import MatrialPegination from "./MatrialPegination";

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
const CustomHook = lazy(() => import("./CustomHook"));
const CustomDataShow = lazy(() => import("./CustomDataShow"));
const FetchComment = lazy(() => import("./FetchComment"));
const FindLargeNumber = lazy(() => import("./FIndLargeNumber"));
const CountFrequancy = lazy(() => import("./CountFrequancy"));
const ShowCustomData2 = lazy(() => import("./ShowCustomData2"));
const FirstNonRepeat = lazy(() => import("./FirstNonRepeat"));
const ZeroLast = lazy(() => import("./ZeroLast"));
const LeanerSearch = lazy(() => import("./LinearSearch"));
const CheckArrySorted = lazy(() => import("./CheckArrySorted"));
const CustomHook3 = lazy(() => import("./CustomHook3"));
const Custom3dataShow = lazy(() => import("./Custom3dataShow"));
const MergeArray = lazy(() => import("./MergeTwoArray"));
const FlattenArray = lazy(() => import("./FlattenArray"));
const NewCustomHookData = lazy(() => import("./NewCustomHookData"));
const NewCustomHook = lazy(() => import("./NewCustomHook"));
const CompairTwoString = lazy(() => import("./CompairTwoString"));
const Toggle = lazy(() => import("./Toggle"));
const FindProduct = lazy(() => import("./FindProduct"));
const CustomHook1 = lazy(() => import("./CustomHook1"));
const CustomHook1Data = lazy(() => import("./CustomHook1Data"));
const Factorial = lazy(() => import("./Factorial"));
const Search = lazy(() => import("./Search"));
const FindLongestSubString = lazy(() => import("./FindLongestSubString"));
const FindAnagram = lazy(() => import("./FindAnagram"));
const FindCommonElement = lazy(() => import("./FindCommonElement"));
function App() {
  return (
    <>
      <Suspense fallback={<p> Loadings...</p>}>
        <CheckArrySorted />
      </Suspense>
    </>
  );
}

export default App;
