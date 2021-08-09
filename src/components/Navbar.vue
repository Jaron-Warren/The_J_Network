<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
      </div>
    </router-link>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'Home' }" class="nav-link">
          Home
        </router-link>
      </li>
      <li class="ml-5 mt-1">
        <form @submit.prevent="submitSearch(state.query)">
          <input v-model="state.query" type="text" placeholder="search...">
          <button type="submit" class="ml-1 mdi mdi-magnify">
          </button>
        </form>
      </li>
    </ul>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { router } from '../router'
import Pop from '../utils/Notifier'
export default {
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },
      async submitSearch(query) {
        // REVIEW Hacky solution? passing params with router doesn't work
        AppState.query = query
        // REVIEW query doesn't reset, can't search again from search page
        query = ''
        try {
          router.push({ name: 'Search' })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
