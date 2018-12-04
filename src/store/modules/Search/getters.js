export default {
  getPhones: state => {
    return state.info.telephones ? state.info.telephones.split(';')
      .map(item => item.trim()) : []
  },
}
