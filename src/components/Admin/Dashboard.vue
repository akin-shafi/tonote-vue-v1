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
                <a class="dropdown-item" href="app-todo.html"
                  ><i class="me-1" data-feather="check-square"></i
                  ><span class="align-middle">Todo</span></a
                ><a class="dropdown-item" href="app-chat.html"
                  ><i class="me-1" data-feather="message-square"></i
                  ><span class="align-middle">Chat</span></a
                ><a class="dropdown-item" href="app-email.html"
                  ><i class="me-1" data-feather="mail"></i
                  ><span class="align-middle">Email</span></a
                ><a class="dropdown-item" href="app-calendar.html"
                  ><i class="me-1" data-feather="calendar"></i
                  ><span class="align-middle">Calendar</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-body">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-warning" role="alert">
              <div
                class="alert-body animate__animated animate__flash animate__infinite"
              >
                <i data-feather="alert-circle"></i> Please
                <a class="text-primary" href="settings/" target="_blank"
                  >Click here</a
                >&nbsp; to complete your profile.
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card">
              <div class="card-header">
                <div>
                  <h2 class="fw-bolder mb-0">0</h2>
                  <p class="card-text">Sent</p>
                </div>
                <div class="avatar bg-light-primary p-50 m-0">
                  <div class="avatar-content">
                    <i data-feather="send"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card">
              <div class="card-header">
                <div>
                  <h2 class="fw-bolder mb-0">0</h2>
                  <p class="card-text">Viewed</p>
                </div>
                <div class="avatar bg-light-success p-50 m-0">
                  <div class="avatar-content">
                    <i data-feather="eye"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card">
              <div class="card-header">
                <div>
                  <h2 class="fw-bolder mb-0">0</h2>
                  <p class="card-text">Completed</p>
                </div>
                <div class="avatar bg-light-danger p-50 m-0">
                  <div class="avatar-content">
                    <i data-feather="check-square"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-12">
            <div class="card">
              <div class="card-header">
                <div>
                  <h2 class="fw-bolder mb-0">0</h2>
                  <p class="card-text">Notarised</p>
                </div>
                <div class="avatar bg-light-warning p-50 m-0">
                  <div class="avatar-content">
                    <i data-feather="file-text"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- List DataTable -->
        <div class="row">
          <div class="col-12">
            <h4 class="card-title">What will you like to do?</h4>
            <div class="demo-inline-spacing pt-0">
              <button
                type="button"
                class="btn btn-outline-primary waves-effect"
              >
                Get an affidavit
              </button>
              <button
                type="button"
                class="btn btn-outline-primary waves-effect"
              >
                Request a Notary
              </button>
              <button
                type="button"
                class="btn btn-outline-primary waves-effect"
              >
                Sign a document
              </button>
            </div>
          </div>

          <div class="col-12 mt-2">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Document Lists</h5>
              </div>
              <div class="card invoice-list-wrapper">
                <div class="card-datatable table-responsive">
                  <table class="invoice-list-table table">
                    <thead>
                      <tr>
                        <th>Document name</th>
                        <th>Status</th>
                        <th>Last Edited</th>
                        <th class="cell-fit">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="i in 5" :key="i">
                        <td>
                          Sprint Planning .pdf
                          <p>To: John Doe, Daniel</p>
                        </td>
                        <td>
                          <span
                            class="badge rounded-pill badge-light-secondary"
                            text-capitalized=""
                          >
                            draft
                          </span>
                        </td>
                        <td>about 1 month ago</td>

                        <td>
                          <!-- <div class="btn-group"> -->

                          <i
                            data-feather="more-vertical"
                            class="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></i>

                          <div class="dropdown-menu dropdown-menu-start">
                            <a class="dropdown-item border-bottom" href="#"
                              >Edit</a
                            >

                            <a class="dropdown-item border-bottom" href="#"
                              >Save as template</a
                            >

                            <a class="dropdown-item border-bottom" href="#"
                              >Retract</a
                            >

                            <a class="dropdown-item" href="#">Delete</a>
                          </div>
                          <!-- </div> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>

<style scoped>
.feather,
[data-feather] {
  height: 1.5rem;
  width: 1.5rem;
  display: inline-block;
}
</style>
