import {
  createRouter,
  createWebHistory
} from "vue-router";
import loginPage from "../views/auth/login/loginPage.vue";
import RegisterPage from "../views/auth/signUp/registerPage.vue";
import AdminPage from "../views/admin/Admin.vue";

const AdminDashboard = () =>
  import( /* webpackChunkName: "dashboard" */ "@/components/Admin/Dashboard.vue");

const TeamPage = () =>
  import( /* webpackChunkName: "team" */ "@/components/Teams/Team.vue");

const TemplatePage = () =>
  import( /* webpackChunkName: "template" */ "@/components/Templates/Template.vue");

const DocumentPage = () =>
  import( /* webpackChunkName: "document" */ "@/components/Documents/Document.vue");

const RequestPage = () =>
  import( /* webpackChunkName: "requests" */ "@/components/Requests/Request.vue");

const CompanyPage = () =>
  import( /* webpackChunkName: "document" */ "@/components/Documents/Document.vue");

// const SettingPage = () =>
//   import( /* webpackChunkName: "settings" */ "@/components/Settings/Setting.vue");

const BillingsPage = () =>
  import( /* webpackChunkName: "Billings" */ "@/components/Settings/Billings/Billings.vue");

const HistoryPage = () =>
  import( /* webpackChunkName: "History" */ "@/components/Settings/Billings/History.vue");

const ProfilePage = () =>
  import( /* webpackChunkName: "Profile" */ "@/components/Settings/Profile/Profile.vue");

const NotificationSettingsPage = () =>
  import( /* webpackChunkName: "NotificationSetupPage" */ "@/components/Settings/Notification/Setup.vue");
const routes = [{
  path: "/",
  name: "login",
  component: loginPage,
},
{
  path: "/register",
  name: "register",
  component: RegisterPage,
},
{
  path: "/admin",
  name: "admin",
  component: AdminPage,
  meta: {
    title: "Admin - ToNote",
  },
  children: [{
    path: "",
    name: "admin.dashboard",
    component: AdminDashboard,
    meta: {
      title: "ToNote | Dashboard",
    },
  },
  {
    path: "companies",
    name: "admin.companies",
    component: CompanyPage,
    meta: {
      title: "ToNote | Companies",
    },
  },
  {
    path: "documents",
    name: "admin.documents",
    component: DocumentPage,
    meta: {
      title: "ToNote | Documents",
    },
  },
  {
    path: "requests",
    name: "admin.requests",
    component: RequestPage,
    meta: {
      title: "ToNote | Requests",
    },
  },
  {
    path: "teams",
    name: "admin.teams",
    component: TeamPage,
    meta: {
      title: "ToNote | Team",
    },
  },
  {
    path: "template",
    name: "admin.templates",
    component: TemplatePage,
    meta: {
      title: "ToNote | Template",
    },
  },
  {
    path: "billings",
    name: "admin.billings",
    component: BillingsPage,
    meta: {
      title: "ToNote | Billings",
    },
  },
  {
    path: "history",
    name: "admin.history",
    component: HistoryPage,
    meta: {
      title: "ToNote | History",
    },
  },
  {
    path: "profile",
    name: "admin.profile",
    component: ProfilePage,
    meta: {
      title: "ToNote | Profile",
    },
  },

  {
    path: "notificationSettings",
    name: "admin.notificationSettings",
    component: NotificationSettingsPage,
    meta: {
      title: "ToNote | Notification Settings",
    },
  },


  ],
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'router-link-exact-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: 'smooth'
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title)

  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags)

  // const previousNearestWithMeta = from.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else {
    // document.title = previousNearestWithMeta.meta.title
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).foreEach((key) => {
      tag.setAttribute(key, tagDef[key])
    });

    tag.setAttribute('data-vue-router-controlled', '')

    return tag;

  }).forEach(tag => document.head.appendChild(tag));

  next()
});

export default router;