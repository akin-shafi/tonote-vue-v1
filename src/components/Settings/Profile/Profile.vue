<template>
  <div>
    <main-layout>
      <template v-slot:default>
        <section class="modern-horizontal-wizard">
          <div class="bs-stepper wizard-modern modern-wizard-example">
            <div class="bs-stepper-header">
              <div
                class="step"
                data-target="#account-details-modern"
                role="tab"
                id="account-details-modern-trigger"
              >
                <button type="button" class="step-trigger">
                  <span class="bs-stepper-box"> 1 </span>
                  <span class="bs-stepper-label">
                    <span class="bs-stepper-title">Personal Info</span>
                    <!-- <span class="bs-stepper-subtitle">Add Personal Info</span> -->
                  </span>
                </button>
              </div>
              <div class="line">
                <i data-feather="chevron-right" class="font-medium-2"></i>
              </div>
              <div
                class="step"
                data-target="#personal-info-modern"
                role="tab"
                id="personal-info-modern-trigger"
              >
                <button type="button" class="step-trigger">
                  <span class="bs-stepper-box"> 2 </span>
                  <span class="bs-stepper-label">
                    <span class="bs-stepper-title">Identity Verification</span>
                    <!-- <span class="bs-stepper-subtitle">Setup ID</span> -->
                  </span>
                </button>
              </div>
              <div class="line">
                <i data-feather="chevron-right" class="font-medium-2"></i>
              </div>
              <div
                class="step"
                data-target="#address-step-modern"
                role="tab"
                id="address-step-modern-trigger"
              >
                <button type="button" class="step-trigger">
                  <span class="bs-stepper-box"> 3 </span>
                  <span class="bs-stepper-label">
                    <span class="bs-stepper-title">Digitise signature</span>
                    <span class="bs-stepper-subtitle"></span>
                  </span>
                </button>
              </div>
              <!-- <div class="line">
        <i data-feather="chevron-right" class="font-medium-2"></i>
      </div>
      <div class="step" data-target="#social-links-modern" role="tab" id="social-links-modern-trigger">
        <button type="button" class="step-trigger">
          <span class="bs-stepper-box">
            <i data-feather="link" class="font-medium-3"></i>
          </span>
          <span class="bs-stepper-label">
            <span class="bs-stepper-title">Social Links</span>
            <span class="bs-stepper-subtitle">Add Social Links</span>
          </span>
        </button>
      </div> -->
            </div>
            <div class="bs-stepper-content">
              <div
                id="account-details-modern"
                class="content"
                role="tabpanel"
                aria-labelledby="account-details-modern-trigger"
              >
                <div class="content-header">
                  <h5 class="mb-0">Personal Info</h5>
                  <small class="text-muted"
                    >Enter Your Personal Information.</small
                  >
                </div>
                <div class="row">
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="modern-first-name"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="modern-first-name"
                      class="form-control"
                      placeholder="John"
                    />
                  </div>
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="modern-last-name"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="modern-last-name"
                      class="form-control"
                      placeholder="Doe"
                    />
                  </div>

                  <div class="mb-1 col-md-12">
                    <label class="form-label" for="modern-email">Email</label>
                    <input
                      type="email"
                      id="modern-email"
                      class="form-control"
                      placeholder="john.doe@email.com"
                      aria-label="john.doe"
                    />
                  </div>

                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="country">Country</label>
                    <select class="select2 w-100" id="country">
                      <option label=" "></option>
                      <option>UK</option>
                      <option>USA</option>
                      <option>Spain</option>
                      <option>France</option>
                      <option>Italy</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="state">State</label>
                    <select class="select2 w-100" id="state">
                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-secondary btn-prev" disabled>
                    <i
                      data-feather="arrow-left"
                      class="align-middle me-sm-25 me-0"
                    ></i>
                    <span class="align-middle d-sm-inline-block d-none"
                      >Previous</span
                    >
                  </button>
                  <button class="btn btn-primary btn-next">
                    <span class="align-middle d-sm-inline-block d-none"
                      >Next</span
                    >
                    <i
                      data-feather="arrow-right"
                      class="align-middle ms-sm-25 ms-0"
                    ></i>
                  </button>
                </div>
              </div>
              <div
                id="personal-info-modern"
                class="content"
                role="tabpanel"
                aria-labelledby="personal-info-modern-trigger"
              >
                <div class="content-header">
                  <h5 class="mb-0">Identity Verification</h5>
                  <small>Verify your ID.</small>
                </div>
                <div class="row">
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="id_type"
                      >Identification Type</label
                    >
                    <select class="select2 w-100">
                      <option>National Identification Number</option>
                      <option>Driver's license</option>
                    </select>
                  </div>
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="id_number"
                      >Identification Number</label
                    >
                    <input
                      type="text"
                      id="id_number"
                      class="form-control"
                      placeholder="12345678910"
                    />
                  </div>
                </div>
                <div class="row"></div>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary btn-prev">
                    <i
                      data-feather="arrow-left"
                      class="align-middle me-sm-25 me-0"
                    ></i>
                    <span class="align-middle d-sm-inline-block d-none"
                      >Previous</span
                    >
                  </button>
                  <button class="btn btn-primary btn-next">
                    <span class="align-middle d-sm-inline-block d-none"
                      >Next</span
                    >
                    <i
                      data-feather="arrow-right"
                      class="align-middle ms-sm-25 ms-0"
                    ></i>
                  </button>
                </div>
              </div>
              <div
                id="address-step-modern"
                class="content"
                role="tabpanel"
                aria-labelledby="address-step-modern-trigger"
              >
                <div class="content-header">
                  <h5 class="mb-0">Digitise signature</h5>
                  <small>Create Your digital siganture.</small>
                </div>
                <div class="row">
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="modern-address"
                      >Address</label
                    >
                    <input
                      type="text"
                      id="modern-address"
                      class="form-control"
                      placeholder="98  Borough bridge Road, Birmingham"
                    />
                  </div>
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="modern-landmark"
                      >Landmark</label
                    >
                    <input
                      type="text"
                      id="modern-landmark"
                      class="form-control"
                      placeholder="Borough bridge"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="pincode3">Pincode</label>
                    <input
                      type="text"
                      id="pincode3"
                      class="form-control"
                      placeholder="658921"
                    />
                  </div>
                  <div class="mb-1 col-md-6">
                    <label class="form-label" for="city3">City</label>
                    <input
                      type="text"
                      id="city3"
                      class="form-control"
                      placeholder="Birmingham"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary btn-prev">
                    <i
                      data-feather="arrow-left"
                      class="align-middle me-sm-25 me-0"
                    ></i>
                    <span class="align-middle d-sm-inline-block d-none"
                      >Previous</span
                    >
                  </button>
                  <button class="btn btn-primary btn-next">
                    <span class="align-middle d-sm-inline-block d-none"
                      >Next</span
                    >
                    <i
                      data-feather="arrow-right"
                      class="align-middle ms-sm-25 ms-0"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "@/components/MainLayout.vue";
export default {
  name: "ProfilePage",
  components: { MainLayout },
};
</script>

<style scoped></style>
