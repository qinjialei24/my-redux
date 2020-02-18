class ReactX {
  constructor({ modules = [] }) {
    this.modulesNames = modules.map(module => module.name)
    this.installModule(modules)
    this.bindContext('reducer', 'state')
    this.bindContext('effect', 'reducer')
  }

  installModule(modules) {
    modules.forEach(module => {
      this[module.name] = module
    })
  }

  bindContext(moduleKey, context) {
    this.modulesNames.forEach(moduleName => {
      const currentModule = this[moduleName]
      Object.keys(currentModule[moduleKey]).forEach(key => {
        const fn = currentModule[moduleKey][key]
        currentModule[moduleKey][key] = fn.bind(currentModule[context])
      })
    })
  }
}

export default ReactX