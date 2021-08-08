<template>
  <section class="container-fluid flex-grow-1">
    <div class="row">
      <div class="col-md-2 py-3 bg-dark border border-dark vh-80 rounded-bottom">
        <aside class="row flex-column">
          <Sidebar />
        </aside>
      </div>
      <div class="col-md-10 px-0">
        <header>
          <Navbar />
        </header>
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Sidebar from './components/Sidebar.vue'
export default {
  components: { Sidebar },
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
