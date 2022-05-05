<template>
  <div class="auth-wrapper auth-cover">
    <div class="auth-inner row m-0">
      <!-- Brand logo--><router-link class="brand-logo" to="/">
        <img
          src="/app-assets/images/logo/main.svg"
          class="img-fluid mt-2"
          width="100"
        />
      </router-link>
      <!-- /Brand logo-->
      <!-- Left Text-->
      <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <img
            class="img-fluid"
            src="/app-assets/images/pages/register-v2.svg"
            alt="Register V2"
          />
        </div>
      </div>
      <!-- /Left Text-->
      <!-- Register-->
      <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
        <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
          <h2 class="card-title fw-bold mb-1">Adventure starts here 🚀</h2>
          <p class="card-text mb-2">Get more things done the easy way!</p>
          <form class="auth-register-form mt-2 row">
            <div class="mb-1 col-6">
              <label class="form-label" for="first-name">First Name</label>
              <input
                class="form-control"
                id="first-name"
                type="text"
                name="first-name"
                placeholder="Thomas"
                aria-describedby="first-name"
                autofocus=""
                tabindex="1"
              />
            </div>

            <div class="mb-1 col-6">
              <label class="form-label" for="last-name">Last name</label>
              <input
                class="form-control"
                id="last-name"
                type="text"
                name="last-name"
                placeholder="Edison"
                aria-describedby="last-name"
                autofocus=""
                tabindex="1"
              />
            </div>

            <div class="mb-1 col-12">
              <label class="form-label" for="register-email">Email</label>
              <input
                class="form-control"
                id="register-email"
                type="text"
                name="register-email"
                placeholder="john@example.com"
                aria-describedby="register-email"
                tabindex="2"
              />
            </div>
            <div class="mb-1 col-12">
              <label class="form-label" for="phone-number">Phone Number</label>
              <input
                class="form-control"
                id="phone-number"
                type="text"
                name="phone-number"
                placeholder="080123456789"
                aria-describedby="phone-number"
                tabindex="2"
              />
            </div>

            <div class="mb-1 col-6">
              <label class="form-label" for="register-password">Password</label>
              <div class="input-group input-group-merge form-password-toggle">
                <input
                  class="form-control form-control-merge"
                  id="register-password"
                  type="password"
                  name="register-password"
                  placeholder="············"
                  aria-describedby="register-password"
                  tabindex="3"
                /><span class="input-group-text cursor-pointer"
                  ><i data-feather="eye"></i
                ></span>
              </div>
            </div>

            <div class="mb-1 col-6">
              <label class="form-label" for="confirm-password"
                >Confirm Password</label
              >
              <div class="input-group input-group-merge form-password-toggle">
                <input
                  class="form-control form-control-merge"
                  id="confirm-password"
                  type="password"
                  name="confirm-password"
                  placeholder="············"
                  aria-describedby="confirm-password"
                  tabindex="3"
                /><span class="input-group-text cursor-pointer"
                  ><i data-feather="eye"></i
                ></span>
              </div>
            </div>
            <div class="mb-1 col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  id="register-privacy-policy"
                  type="checkbox"
                  tabindex="4"
                />
                <label class="form-check-label" for="register-privacy-policy"
                  >I agree to<a href="#">&nbsp;privacy policy & terms</a></label
                >
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary w-100" tabindex="5">
                Sign up
              </button>
            </div>
          </form>
          <p class="text-center mt-2">
            <span>Already have an account?</span
            ><router-link to="/"
              ><span>&nbsp;Sign in instead</span></router-link
            >
          </p>
          <div class="divider my-2">
            <div class="divider-text">or</div>
          </div>
          <div class="auth-footer-btn d-flex justify-content-center">
            <a class="btn btn-outline-primary" href="#"> As a business </a>
            <a class="btn btn-primary" href="#"> As a Notary Public</a>
          </div>
        </div>
      </div>
      <!-- /Register-->
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style lang="scss" scoped></style>
