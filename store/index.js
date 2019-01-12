export const state = () => ({
  menuitems: {},
  projects: [],
  bio: '',
  teaching: '',
  currentPage: 'About'
})

export const mutations = {
  replaceMenu (state, newState) {
    state.menuitems = newState;
  },
  replaceBio (state, newState) {
    state.bio = newState;
  },
  replaceProjects (state, newState) {
    state.projects = newState
  },
  replaceTeaching (state, newState) {
    state.teaching = newState;
  },
  toggleSubmenu (state, info) {
    state.menuitems[info.name].open = !state.menuitems[info.name].open
  },
  changePage (state, page) {
    state.currentPage = page;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    console.log('calling nuxtServerInit')
    const apiUrl = process.env.cockpit.apiUrl
    const token = process.env.cockpit.apiToken
    const bio = await $axios.$get(`${apiUrl}/singletons/get/bio/text?token=${token}`)
    const projects = await $axios.$get(`${apiUrl}/collections/get/projects?token=${token}`)
    const teaching = await $axios.$get(`${apiUrl}/singletons/get/teaching/text?token=${token}`)
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
      },
    }
    commit('replaceMenu', menuitems)
    commit('replaceBio', bio)
    commit('replaceProjects', projects.entries)
    commit('replaceTeaching', teaching)
  }
}
