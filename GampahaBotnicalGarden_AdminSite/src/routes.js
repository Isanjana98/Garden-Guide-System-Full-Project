
import Dashboard from "views/Dashboard.js";
import PlantView from "views/PlantView.jsx";
import AreaView from "views/AreaView.jsx";
import CategoryView from "views/CategoryView.jsx";
import UserView from "views/UserView.jsx";
import WebAdmin from "./views/WebAdmin";
// import Maps from "views/Maps.js";
// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
    {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/plant-view",
    name: "Plant Manager",
    icon: "nc-icon nc-circle-09",
    component: PlantView,
    layout: "/admin"
  },
  {
    path: "/area-view",
    name: "Area Manager",
    icon: "nc-icon nc-notes",
    component: AreaView,
    layout: "/admin"
  },
  {
    path: "/category-view",
    name: "Category Manager",
    icon: "nc-icon nc-paper-2",
    component: CategoryView,
    layout: "/admin"
  },
  {
    path: "/user-view",
    name: "User Manager",
    icon: "nc-icon nc-atom",
    component: UserView,
    layout: "/admin"
  },
  {
    path: "/web-admin",
    name: "Web Admin",
    icon: "nc-icon nc-bell-55",
    component: WebAdmin,
    layout: "/admin"
  }
];

export default dashboardRoutes;
