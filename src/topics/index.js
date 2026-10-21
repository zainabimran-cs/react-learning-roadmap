import { lazy } from "react";

const AsyncAwait = lazy(() => import("./AsyncAwait"));
const BasicDashboard = lazy(() => import("./BasicDashboard"));
const CacheStorage = lazy(() => import("./CacheStorage"));
const ComponentCommunication = lazy(() => import("./ComponentCommunication"));
const ConditionRending = lazy(() => import("./ConditionRending"));
const ContextApiDemo = lazy(() => import("./ContextApiDemo"));
const ControlAndUncontrol = lazy(() => import("./ControlAndUncontrol"));
const CookieStorage = lazy(() => import("./CookieStorage"));
const CreateContextConcept = lazy(() => import("./CreateContextConcept"));
const Diffbthooks = lazy(() => import("./Diffbthooks"));
const HOCvsLOC = lazy(() => import("./HOCvsLOC"));
const Hooks = lazy(() => import("./Hooks"));
const JSXvsJS = lazy(() => import("./JSXvsJS"));
const LiftingStateUp = lazy(() => import("./LiftingStateUp"));
const ListsAndKeys = lazy(() => import("./ListsAndKeys"));
const Localstorage = lazy(() => import("./Localstorage"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const PrivateVsPublic = lazy(() => import("./PrivateVsPublic"));
const Props = lazy(() => import("./Props"));
const PublicRoutes = lazy(() => import("./PublicRoutes"));
const ReactComponents = lazy(() => import("./ReactComponents"));
const ReactRouterDom = lazy(() => import("./ReactRouterDom"));
const Reconciliation = lazy(() => import("./Reconciliation"));
const RoutesTopic = lazy(() => import("./RoutesTopic"));
const SessionStorage = lazy(() => import("./SessionStorage"));
const Sidebarcontentswitching = lazy(() => import("./Sidebarcontentswitching"));
const SinglePageApplication = lazy(() => import("./SinglePageApplication"));
const State = lazy(() => import("./State"));
const StatelessvsStatefull = lazy(() => import("./StatelessvsStatefull"));
const StorageDifferences = lazy(() => import("./StorageDifferences"));
const StyledComponent = lazy(() => import("./StyledComponent"));
const TanstackQuery = lazy(() => import("./TanstackQuery"));
const TypesOfHooks = lazy(() => import("./TypesOfHooks"));
const Usecallback = lazy(() => import("./Usecallback"));
const Usecontext = lazy(() => import("./Usecontext"));
const Useeffect = lazy(() => import("./Useeffect"));
const Uselayouteffect = lazy(() => import("./Uselayouteffect"));
const usememo = lazy(() => import("./usememo"));
const Usereducer = lazy(() => import("./Usereducer"));
const Useref = lazy(() => import("./Useref"));
const Usestate = lazy(() => import("./Usestate"));
const VirtualDom = lazy(() => import("./VirtualDom"));
const Whyreact = lazy(() => import("./Whyreact"));
const Preload = lazy(() => import("./Preload"));
const Prefetch = lazy(() => import("./Prefetch"));
const Preflight = lazy(() => import("./Preflight"));
const PreloadPrefetchPreflight = lazy(() => import("./PreloadPrefetchPreflight"));
const Axiosfetchmethods = lazy(() => import("./Axiosfetchmethods"));
const Axiosvsfetch = lazy(() => import("./Axiosvsfetch"));
const Axiosfetchpreflight = lazy(() => import("./Axiosfetchpreflight"));
const Fetcherrorhandling = lazy(() => import("./Fetcherrorhandling"));
const Componentlifecycle = lazy(() => import("./Componentlifecycle"));
const Reactmemo = lazy(() => import("./Reactmemo"));
const Contextusereducer = lazy(() => import("./Contextusereducer"));
const Lazyloading = lazy(() => import("./Lazyloading"));
const Codesplitting = lazy(() => import("./Codesplitting"));
const Reduxtoolkit = lazy(() => import("./Reduxtoolkit"));
const Zustand = lazy(() => import("./Zustand"));
const Environmentvariables = lazy(() => import("./Environmentvariables"));
const Folderstructures = lazy(() => import("./Folderstructures"));
const Ssr = lazy(() => import("./Ssr"));
const Csr = lazy(() => import("./Csr"));
const SsrvsCsr = lazy(() => import("./SsrvsCsr"));
const Smartdumbcomponents = lazy(() => import("./Smartdumbcomponents"));
const Serverclientcomponents = lazy(() => import("./Serverclientcomponents"));
const Apiroutes = lazy(() => import("./Apiroutes"));
const Apilayers = lazy(() => import("./Apilayers"));

const topicDemos = {
  reconciliation: Reconciliation,
  virtualdom: VirtualDom,
  spa: SinglePageApplication,
  whyreact: Whyreact,
  reactcomponents: ReactComponents,
  hocvsloc: HOCvsLOC,
  statelessvsstateful: StatelessvsStatefull,
  styledcomponents: StyledComponent,
  jsxvsjs: JSXvsJS,
  conditionalrendering: ConditionRending,
  componentcommunication: ComponentCommunication,
  listsandkeys: ListsAndKeys,
  state: State,
  props: Props,
  liftingstateup: LiftingStateUp,
  controlledanduncontrolled: ControlAndUncontrol,
  asyncawait: AsyncAwait,
  tanstackquery: TanstackQuery,
  whatishook: Hooks,
  typesofhooks: TypesOfHooks,
  usestate: Usestate,
  useeffect: Useeffect,
  useref: Useref,
  usereducer: Usereducer,
  uselayouteffect: Uselayouteffect,
  usecallback: Usecallback,
  usememo: usememo,
  usecontext: Usecontext,
  hookdifferences: Diffbthooks,
  createcontextconcept: CreateContextConcept,
  contextapidemo: ContextApiDemo,
  localstorage: Localstorage,
  cachestorage: CacheStorage,
  sessionstorage: SessionStorage,
  cookiestorage: CookieStorage,
  storagedifferences: StorageDifferences,
  reactrouterdom: ReactRouterDom,
  routes: RoutesTopic,
  privateroutes: PrivateRoutes,
  publicroutes: PublicRoutes,
  privatevspublic: PrivateVsPublic,
  basicdashboard: BasicDashboard,
  sidebarcontentswitching: Sidebarcontentswitching,
  preload: Preload,
  prefetch: Prefetch,
  preflight: Preflight,
  preloadprefetchpreflight: PreloadPrefetchPreflight,
  axiosfetchmethods: Axiosfetchmethods,
  axiosvsfetch: Axiosvsfetch,
  axiosfetchpreflight: Axiosfetchpreflight,
  fetcherrorhandling: Fetcherrorhandling,
  componentlifecycle: Componentlifecycle,
  reactmemo: Reactmemo,
  contextusereducer: Contextusereducer,
  lazyloading: Lazyloading,
  codesplitting: Codesplitting,
  reduxtoolkit: Reduxtoolkit,
  zustand: Zustand,
  environmentvariables: Environmentvariables,
  folderstructures: Folderstructures,
  ssr: Ssr,
  csr: Csr,
  ssrvscsr: SsrvsCsr,
  smartdumbcomponents: Smartdumbcomponents,
  serverclientcomponents: Serverclientcomponents,
  apiroutes: Apiroutes,
  apilayers: Apilayers,
};

export default topicDemos;