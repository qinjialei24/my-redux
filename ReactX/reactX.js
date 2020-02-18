class ReactX {
  constructor({ modules = [] }) {
    this.modulesNames = modules.map(module => module.name)
    this.installModule(modules)
    this.bindContext('reducer', 'state')
    this.bindContext('effect', 'reducer')
  }

  listeners = []


  subscribe(listener) {
    this.listeners.push(listener);
    console.log("TCL: subscribe ->  this.listeners", this.listeners)
  }

  notify() {
    const allModuleState = this.getAllModuleState()
    this.listeners.forEach(listener => {
      listener(allModuleState)
    })
  }

  installModule(modules) {
    modules.forEach(module => {
      this[module.name] = module
    })
  }

  getAllModuleState() {
    return this.modulesNames.reduce((state, moduleName) => ({
      ...state,
      [moduleName]: this[moduleName].state
    }), {})
  }


  bindContext(moduleKey, context) {

    this.modulesNames.forEach(moduleName => {
      const currentModule = this[moduleName]
      Object.keys(currentModule[moduleKey]).forEach(key => {

        const fn = currentModule[moduleKey][key]
        if (moduleKey === 'reducer') {
          currentModule[moduleKey][key] = (payload) => {
            fn.call(currentModule[context], payload)
            this.notify()
            // this.notify(this.getAllModuleState())
          }
        } else {
          currentModule[moduleKey][key] = (payload) => {
            fn.call(currentModule[context], payload)
          }
        }
      })
    })
  }
}

export default ReactX