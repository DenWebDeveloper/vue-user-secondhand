export default {
  getPhones: state => {
    return state.info.telephones ? state.info.telephones.split(';')
      .map(item => item.trim())
      .filter(item => item.length) : []
  },
  getMapLocation: state => {
    return state.info.mapLocation ? state.info.mapLocation.split(';')
      .map(item => Number(item)) : []
  },
  getSocials: state => state.socials,
  getAdditionalData: state => state.additionalData,
  isSocials: state => state.socials.telegram && state.socials.facebook && state.socials.twitter && state.socials.instagram
}
