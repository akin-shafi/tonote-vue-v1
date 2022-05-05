<template>
    <div>
        <div class="app-content content ">
		      <div class="content-overlay"></div>
		      <div class="header-navbar-shadow"></div>
		      <div class="content-wrapper">
		        <div class="content-header row">
		        </div>
		        <div class="content-body"><div class="auth-wrapper auth-basic px-2">
			  <div class="auth-inner my-2">
			    <!-- Login basic -->
			    <div class="card mb-0">
			      <div class="card-body">
			        <a href="#" class="brand-logo">
			          <img src="/app-assets/images/logo/logo-dark.pn" width="150">
			        </a>

			        <!-- <h4 class="card-title mb-1">Welcome to Vuexy! 👋</h4> -->
			        <!-- <p class="card-text mb-2">{{ message }}</p> -->

			        <form class="auth-login-form mt-2"  method="post">
			          <section class="first" v-if="isCurrent">
				          <div class="mb-1">
				            <label for="login-email" class="form-label">Email</label>
				            <input
				              type="text"
				              class="form-control"
				              id="login-email"
				              name="login-email"
				              placeholder="john@example.com"
				              aria-describedby="login-email"
				              tabindex="1"
				              autofocus
				              v-model="form.email"
				            />
				            <div class="login-error"></div>
				          </div>
				          <div>
				          	<button type="button" class="btn btn-primary w-100" v-on:click="warn()">Next</button>
				          </div>
			          </section>

			          <section class="second" v-if="isNext">
			          	  <div class="text-center h6 py-1">{{email}}</div>
				          <div class="mb-1">
				            <div class="d-flex justify-content-between">
				              <label class="form-label" for="login-password">Password</label>
				              <a href="auth-forgot-password-basic.html">
				                <small>Forgot Password?</small>
				              </a>
				            </div>
				            <div class="input-group input-group-merge form-password-toggle">
				              <input
				                type="password"
				                class="form-control form-control-merge"
				                id="login-password"
				                name="login-password"
				                tabindex="2"
				                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
				                aria-describedby="login-password"
				                v-model="form.password"
				              />
				              <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>

				              
				            </div>
				          </div>
				          <small>{{error}}</small>

				          <div class="mb-1">
				            <div class="form-check">
				              <input class="form-check-input" type="checkbox" id="remember-me" tabindex="3" />
				              <label class="form-check-label" for="remember-me"> Remember Me </label>
				            </div>
				          </div>

				          <button type="button"  class="btn btn-primary w-100" tabindex="4" v-on:click.prevent="login">Sign in</button>
			          </section>
			        </form>

			        <p class="text-center mt-2">
			          <span>New on our platform?</span>
			          <a href="auth-register-basic.html">
			            <span>Create an account</span>
			          </a>
			        </p>

			        <div class="divider my-2">
			          <div class="divider-text">or</div>
			        </div>

			        <div class="auth-footer-btn d-flex justify-content-center">
			          <a href="#" class="">
			            Login as a Notary
			          </a>
			         
			        </div>
			      </div>
			    </div>
			    <!-- /Login basic -->
			  </div>
			</div>
    </div>
</template>

<script>
    export default {
        name: 'signInPage'
    }
</script>

<style scoped>

</style>
