
export const chapters = [
  {
    id: 1,
    title: "React Fundamentals",
    topics: [
      { id: "reconciliation", title: "What is Reconciliation?" },
      { id: "virtualdom", title: "Virtual DOM vs Real DOM" },
      { id: "spa", title: "Single Page Application (SPA)" },
      { id: "whyreact", title: "Why React when we already have HTML, CSS, JS?" }
    ]
  },
  {
    id: 2,
    title: "Components",
    topics: [
      { id: "reactcomponents", title: "React Components" },
      { id: "hocvsloc", title: "Higher Order Components (HOC) vs Lower Order Components" },
      { id: "statelessvsstateful", title: "Stateless vs Stateful Components" },
      { id: "styledcomponents", title: "Styled Components" }
    ]
  },
  {
    id: 3,
    title: "JSX & Rendering",
    topics: [
      { id: "jsxvsjs", title: "JSX vs JS and their compiled output" },
      { id: "conditionalrendering", title: "Conditional Rendering" }
    ]
  },
  {
    id: 4,
    title: "Component Communication & Lists",
    topics: [
      { id: "componentcommunication", title: "Parent-to-Child and Child-to-Parent Communication" },
      { id: "listsandkeys", title: "Lists and Keys" }
    ]
  },
  {
    id: 5,
    title: "State & Props",
    topics: [
      { id: "state", title: "What is State?" },
      { id: "props", title: "What is Props?" },
      { id: "liftingstateup", title: "Lifting State Up" }
    ]
  },
  {
    id: 6,
    title: "Forms",
    topics: [
      { id: "controlledanduncontrolled", title: "Controlled vs Uncontrolled Components" }
    ]
  },
  {
    id: 7,
    title: "Async & Data Fetching",
    topics: [
      { id: "asyncawait", title: "Async/Await in React" },
      { id: "tanstackquery", title: "TanStack Query (React Query)" }
    ]
  },
  {
    id: 8,
    title: "Hooks",
    topics: [
      { id: "whatishook", title: "What is a Hook?" },
      { id: "typesofhooks", title: "Types of Hooks" },
      { id: "usestate", title: "useState()" },
      { id: "useeffect", title: "useEffect() – side effects & lifecycle mapping" },
      { id: "useref", title: "useRef()" },
      { id: "usereducer", title: "useReducer()" },
      { id: "uselayouteffect", title: "useLayoutEffect()" },
      { id: "usecallback", title: "useCallback()" },
      { id: "usememo", title: "useMemo()" },
      { id: "usecontext", title: "useContext()" },
      { id: "hookdifferences", title: "Differences Between Hook Types" }
    ]
  },
  {
    id: 9,
    title: "Context API – Deep Dive",
    topics: [
      { id: "createcontextconcept", title: "createContext() concept & state storage pattern" },
      { id: "contextapidemo", title: "Context API implementation using a demo API" }
    ]
  },
  {
    id: 10,
    title: "Browser Storage",
    topics: [
      { id: "localstorage", title: "Local Storage" },
      { id: "cachestorage", title: "Cache Storage" },
      { id: "sessionstorage", title: "Session Storage" },
      { id: "cookiestorage", title: "Cookie Storage" },
      { id: "storagedifferences", title: "Local vs Cache vs Cookie Storage — differences & best use cases" }
    ]
  },
  {
    id: 11,
    title: "Routing",
    topics: [
      { id: "reactrouterdom", title: "React Router DOM" },
      { id: "routes", title: "Routes" },
      { id: "privateroutes", title: "Private Routes" },
      { id: "publicroutes", title: "Public Routes" },
      { id: "privatevspublic", title: "Private vs Public Routes — differences" }
    ]
  },
  {
    id: 12,
    title: "Dashboard Layout",
    topics: [
      { id: "basicdashboard", title: "Basic Dashboard Setup (Header, Sidebar)" },
      { id: "sidebarcontentswitching", title: "Sidebar-Driven Content Switching" }
    ]
  },
  {
    id: 13,
    title: "Browser & Network Optimization",
    topics: [
      { id: "preload", title: "Preload" },
      { id: "prefetch", title: "Prefetch" },
      { id: "preflight", title: "Preflight" },
      { id: "preloadprefetchpreflight", title: "Preload vs Prefetch vs Preflight — differences" }
    ]
  },
  {
    id: 14,
    title: "HTTP Clients — Axios & Fetch",
    topics: [
      { id: "axiosfetchmethods", title: "Axios and Fetch API — methods" },
      { id: "axiosvsfetch", title: "Axios vs Fetch — differences" },
      { id: "axiosfetchpreflight", title: "How Axios & Fetch Trigger Preflight Requests" },
      { id: "fetcherrorhandling", title: "Handling Fetch API 400 & 500 Errors" }
    ]
  },
  {
    id: 15,
    title: "Lifecycle & Optimization",
    topics: [
      { id: "componentlifecycle", title: "Component Lifecycle" },
      { id: "reactmemo", title: "React.memo" }
    ]
  },
  {
    id: 16,
    title: "State Management Pattern",
    topics: [
      { id: "contextusereducer", title: "Context API + useReducer" }
    ]
  },
  {
    id: 17,
    title: "Performance — Code Splitting",
    topics: [
      { id: "lazyloading", title: "Lazy Loading" },
      { id: "codesplitting", title: "Code Splitting" }
    ]
  },
  {
    id: 18,
    title: "State Management Libraries",
    topics: [
      { id: "reduxtoolkit", title: "Redux Toolkit" },
      { id: "zustand", title: "Zustand" }
    ]
  },
  {
    id: 19,
    title: "Project Setup & Structure",
    topics: [
      { id: "environmentvariables", title: "Environment Variables" },
      { id: "folderstructures", title: "Folder Structures" }
    ]
  },
  {
    id: 20,
    title: "Rendering Strategies",
    topics: [
      { id: "ssr", title: "Server-Side Rendering (SSR)" },
      { id: "csr", title: "Client-Side Rendering (CSR)" },
      { id: "ssrvscsr", title: "SSR vs CSR — differences" }
    ]
  },
  {
    id: 21,
    title: "Component Architecture",
    topics: [
      { id: "smartdumbcomponents", title: "Smart Components vs Dumb Components" },
      { id: "serverclientcomponents", title: "Server Components vs Client Components" }
    ]
  },
  {
    id: 22,
    title: "API Layer",
    topics: [
      { id: "apiroutes", title: "API Routes" },
      { id: "apilayers", title: "API Layers" }
    ]
  },

];
