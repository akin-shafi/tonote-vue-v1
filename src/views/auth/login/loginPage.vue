<template>
  <div class="auth-wrapper auth-cover">
    <div class="auth-inner row m-0">
      <router-link class="brand-logo" to="/">
        <img
          src="/app-assets/images/logo/main.svg"
          class="img-fluid mt-2"
          width="100"
        />
        <h2 class="brand-text text-primary ms-1"></h2>
      </router-link>

      <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <img
            class="img-fluid"
            src="/app-assets/images/pages/login-v2.svg"
            alt="Login V2"
          />
        </div>
      </div>

      <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
        <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
          <h2 class="card-title fw-bold mb-1">Welcome to ToNote! 👋</h2>
          <p class="card-text mb-2">
            Please sign-in to your account and start the adventure
          </p>
          <form class="auth-login-form mt-2">
            <div class="mb-1">
              <label class="form-label" for="login-email">Email</label>
              <input
                class="form-control"
                id="login-email"
                type="text"
                name="login-email"
                placeholder="john@example.com"
                aria-describedby="login-email"
                autofocus=""
                tabindex="1"
              />
            </div>
            <div class="mb-1">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="login-password">Password</label
                ><a href="#"><small>Forgot Password?</small></a>
              </div>
              <div class="input-group input-group-merge form-password-toggle">
                <input
                  class="form-control form-control-merge"
                  id="login-password"
                  type="password"
                  name="login-password"
                  placeholder="············"
                  aria-describedby="login-password"
                  tabindex="2"
                /><span class="input-group-text cursor-pointer"
                  ><i data-feather="eye"></i
                ></span>
              </div>
            </div>
            <div class="mb-1">
              <div class="form-check">
                <input
                  class="form-check-input"
                  id="remember-me"
                  type="checkbox"
                  tabindex="3"
                />
                <label class="form-check-label" for="remember-me">
                  Remember Me</label
                >
              </div>
            </div>
            <button class="btn btn-primary w-100" tabindex="4">Sign in</button>
          </form>
          <p class="text-center mt-2">
            <span>New on our platform?</span
            ><router-link to="/register"
              ><span>&nbsp;Create an account</span></router-link
            >
          </p>
          <div class="divider my-2">
            <div class="divider-text">or</div>
          </div>
          <div class="auth-footer-btn d-flex justify-content-center">
            <a class="btn btn-dark" href="#"> Login as a Notary Public</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped></style>
