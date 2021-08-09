<template>
  <!-- Modal -->
  <div class="modal fade"
       :id="'profile-modal-' + profile.id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="create-profile"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Edit Profile
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editAccount(state.modifiedProfile)">
            <div class="form-group">
              <label class="pr-2" for="bio">Bio</label>
              <input type="text"
                     id="bio"
                     class="form-control"
                     placeholder="bio..."
                     v-model="state.modifiedProfile.bio"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="github">github</label>
              <input type="text"
                     id="github"
                     class="form-control"
                     placeholder="github..."
                     v-model="state.modifiedProfile.github"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="linkedin">linkedin</label>
              <input type="text"
                     id="linkedin"
                     class="form-control"
                     placeholder="linkedin..."
                     v-model="state.modifiedProfile.linkedin"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="resume">resume</label>
              <input type="text"
                     id="resume"
                     class="form-control"
                     placeholder="resume..."
                     v-model="state.modifiedProfile.resume"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="class">class</label>
              <input type="text"
                     id="class"
                     class="form-control"
                     placeholder="class..."
                     v-model="state.modifiedProfile.class"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="graduated">graduated?</label>
              <input type="checkbox"
                     id="graduated"
                     class="form-control"
                     v-model="state.modifiedProfile.graduated"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="imgUrl">Profile Image</label>
              <input type="text"
                     id="imgUrl"
                     class="form-control"
                     placeholder="Image Url..."
                     v-model="state.modifiedProfile.picture"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="photos">Banner Image</label>
              <input type="text"
                     id="bPhoto"
                     class="form-control"
                     placeholder="Single Image Url"
                     v-model="state.modifiedProfile.coverImg"
              >
            </div>
            <div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import Pop from '../utils/Notifier'
import { logger } from '../utils/Logger'
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      modifiedProfile: {
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      editAccount(modifiedaccount) {
        logger.log('attempting to edit your account')
        try {
          accountService.editAccount(modifiedaccount)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.modal-backdrop.show{
  opacity: 1!important;
  background:  var(--fade);
  backdrop-filter: blur(30px) brightness(.5) contrast(.85);
}

.modal-body{
  height: 50vh;
  overflow-y: auto;
}

.cover {
  object-fit: cover;
}
</style>
