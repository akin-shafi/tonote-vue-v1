<template>
  <div
    class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
    data-scroll-to-active="true"
  >
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item me-auto">
          <a class="navbar-brand" href="#">
            <span class="brand-logo">
              <img src="/app-assets/images/logo/logo.png" />
            </span>
            <h2 class="brand-text">ToNote</h2></a
          >
        </li>
        <li class="nav-item nav-toggle">
          <a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"
            ><i
              class="d-block d-xl-none text-primary toggle-icon font-medium-4"
              data-feather="x"
            ></i
            ><i
              class="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary"
              data-feather="disc"
              data-ticon="disc"
            ></i
          ></a>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content pt-2">
      <ul
        class="navigation navigation-main"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li class="nav-item">
          <router-link
            class="d-flex align-items-center"
            :to="{ name: 'admin.dashboard' }"
            exact
            ><i data-feather="home"></i
            ><span class="menu-title text-truncate" data-i18n="Email"
              >Dashboard
            </span></router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            class="d-flex align-items-center"
            :to="{ name: 'admin.documents' }"
            exact
          >
            <i data-feather="layers"></i>
            <span class="menu-title text-truncate" data-i18n="Email"
              >My Documents</span
            ></router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            class="d-flex align-items-center"
            :to="{ name: 'admin.templates' }"
            exact
          >
            <i data-feather="bookmark"></i>
            <span class="menu-title text-truncate" data-i18n="Email"
              >My Templates</span
            ></router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            class="d-flex align-items-center"
            :to="{ name: 'admin.requests' }"
            exact
          >
            <i data-feather="file-text"></i
            ><span class="menu-title text-truncate" data-i18n="Email"
              >My Request</span
            ></router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            class="d-flex align-items-center"
            :to="{ name: 'admin.teams' }"
            exact
          >
            <i data-feather="users"></i
            ><span class="menu-title text-truncate" data-i18n="Email"
              >Team</span
            ></router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            class="d-flex align-items-center"
            :to="{ name: 'admin.companies' }"
            exact
          >
            <i data-feather="sliders"></i
            ><span class="menu-title text-truncate" data-i18n="Email"
              >Company</span
            ></router-link
          >
        </li>

        <li class="nav-item">
          <a class="d-flex align-items-center">
            <i data-feather="settings"></i
            ><span class="menu-title text-truncate" data-i18n="Settings"
              >Settings</span
            >
          </a>
          <ul class="menu-content">
            <li class="">
              <router-link
                class="d-flex align-items-center"
                :to="{ name: 'admin.profile' }"
                exact
                ><i data-feather="circle"></i
                ><span class="menu-item text-truncate" data-i18n="List"
                  >Profile Management</span
                ></router-link
              >
            </li>

            <li class="">
              <router-link
                class="d-flex align-items-center"
                :to="{ name: 'admin.billings' }"
                ><i data-feather="circle"></i
                ><span class="menu-item text-truncate" data-i18n="List"
                  >Billing &amp; Plans</span
                ></router-link
              >
            </li>

            <li>
              <router-link
                class="d-flex align-items-center"
                :to="{ name: 'admin.notificationSettings' }"
                ><i data-feather="circle"></i
                ><span class="menu-item text-truncate" data-i18n="List"
                  >Notifications</span
                ></router-link
              >
            </li>
          </ul>
        </li>
      </ul>

      <hr />
      <div class="help-box help-box-light text-center">
        <a href="javascript: void(0);" class="float-end close-btn text-body">
          <i class="mdi mdi-close"></i>
        </a>
        <div class="text-center">
          <img
            src="/app-assets/images/illustration/help-icon.svg"
            height="90"
            alt="Helper Icon Image"
          />
        </div>
        <h5 class="mt-3">
          Your current plan is
          <span class="text-primary font-weight-bold">Basic</span>
        </h5>
        <hr />
        <div>Sends remaining: 3</div>
        <hr />
        <p class="mb-2">
          Upgrade to <span class="text-primary font-weight-bold">Pro</span> to
          share more documents.
        </p>
        <div class="text-center">
          <a href="javascript: void(0);" class="btn btn-primary btn-sm"
            >Upgrade</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminMenu",
};
</script>

<style scoped>
/* .main-menu.menu-light .navigation>li.active> */
a.router-link-exact-active {
  background: #003bb3;
  box-shadow: 0 0 10px 1px rgba(110, 138, 244, 0.7);
  color: #fff !important;
  font-weight: 400;
  border-radius: 4px;
}
</style>
