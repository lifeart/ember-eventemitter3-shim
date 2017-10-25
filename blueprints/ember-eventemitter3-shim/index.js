module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'eventemitter3', target: '2.0.3'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}