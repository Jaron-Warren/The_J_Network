import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  activeUserProfile: {},
  activeUserPosts: [],
  account: {},
  userProfile: {},
  posts: [],
  profiles: [],
  ads: [],
  postsInfo: {
    page: 0,
    newer: '',
    older: ''
  },
  query: ''
})
