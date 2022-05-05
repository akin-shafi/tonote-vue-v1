<template>
  <div>
    <main-layout>
      <template v-slot:default>
        <div class="row">
          <div class="col-12">
            <div class="card text-center">
              <div class="card-body">
                <h1>Welcome to your Billing area!</h1>
              </div>
            </div>
          </div>
        </div>
      </template>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "@/components/MainLayout.vue";
export default {
  name: "BillingPage",
  components: { MainLayout },
};
</script>

<style scoped></style>
