export const state = () => ({
  sidebar: false,
  menuitems: {},
  projects: [],
  bio: {},
  teaching: {},
  videos: {},
  currentPage: 'About',
  generalConfig: {}
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  replaceMenu (state, newState) {
    state.menuitems = newState
  },
  replaceBio (state, newState) {
    state.bio = newState
  },
  replaceProjects (state, newState) {
    state.projects = newState
  },
  replaceTeaching (state, newState) {
    state.teaching = newState
  },
  replaceVideos (state, newState) {
    state.videos = newState
  },
  replaceConfig (state, newState) {
    state.generalConfig = newState
  },
  toggleSubmenu (state, info) {
    state.menuitems[info.name].open = !state.menuitems[info.name].open
  },
  changePage (state, page) {
    state.currentPage = page
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    console.log('calling nuxtServerInit')
    const apiUrl = process.env.cockpit.apiUrl
    const token = process.env.cockpit.apiToken
    const bio = await $axios.$get(`${apiUrl}/singletons/get/bio?token=${token}`)
    const projects = await $axios.$get(`${apiUrl}/collections/get/projects?token=${token}`)
    const teaching = await $axios.$get(`${apiUrl}/singletons/get/teaching?token=${token}`)
    const videos = await $axios.$get(`${apiUrl}/collections/get/videos?token=${token}`)
    const config = await $axios.$get(`${apiUrl}/singletons/get/config?token=${token}`)
    const menuitems = {
      about: {
        name: 'about',
        link: '/',
        submenu: []
      },
      video: {
        name: 'video',
        link: '/video',
        submenu: []
      },
      teaching: {
        name: 'teaching',
        link: '/teaching',
        submenu: []
      },
      projects: {
        name: 'projects',
        link: '',
        submenu: projects.entries,
        open: false
      },
      gigs: {
        name: 'gigs',
        link: '/gigs',
        submenu: []
      },
      contact: {
        name: 'contact',
        link: '/contact',
        submenu: []
      }
    }
    commit('replaceMenu', menuitems)
    commit('replaceBio', bio)
    commit('replaceVideos', videos)
    commit('replaceProjects', projects.entries)
    commit('replaceTeaching', teaching)
    commit('replaceConfig', config)
  }
}
