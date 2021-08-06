<template>
  <section class="container-fluid flex-grow-1">
    <div class="row">
      <div class="col-md-3 py-3 fill">
        <aside class="row flex-column">
          <Sidebar />
        </aside>
      </div>
      <div class="col-md-9 px-0 fill">
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
