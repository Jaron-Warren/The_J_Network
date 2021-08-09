import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  activeUserProfile: {},
  activeUserPosts: [],
  account: {},
  // REVIEW how to keep track of logged on user
  userProfile: {},
  posts: [],
  profiles: [],
  profilesquery: [],
  ads: [],
  postsInfo: {
    page: 0,
    newer: '',
    older: ''
  },
  query: ''
})
