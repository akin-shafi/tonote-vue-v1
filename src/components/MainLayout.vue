<template>
  <div class="app-content content">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>

    <div class="content-wrapper container-xxl p-0">
      <div class="content-header row d-none">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-start mb-0">insert page</h2>
              <div class="breadcrumb-wrapper">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="dashboard/">page title</a>
                  </li>
                  <li class="breadcrumb-item active">insert page</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div
          class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none"
        >
          <div class="mb-1 breadcrumb-right">
            <div class="dropdown">
              <button
                class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="grid"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#"
                  ><i class="me-1" data-feather="calendar"></i
                  ><span class="align-middle">Calendar</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style scoped></style>
