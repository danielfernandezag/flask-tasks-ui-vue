import tasksStore from "./tasksStore";

export default {
  state: {
    ...tasksStore.state
  },
  mutations: {
    ...tasksStore.mutations
  }
};
