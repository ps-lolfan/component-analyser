const ComponentTracker = {
  components: new Map(),

  add(name, props) {
    this.components.set(name, props);
    console.log(`[Tracker] ${name}`, props);
  },

  getAll() {
    return Array.from(this.components.entries()).map(([name, props]) => ({
      name,
      props,
    }));
  },
};

export default ComponentTracker;
