const tasksStore = {
  state: {
    tasks: [
      { name: "uno", content: "otro", date: "03/04/20" },
      { name: "dos", content: "algo", date: "03/03/20" },
      { name: "dos", content: "algo", date: "03/03/20" }
    ],
    filter: "all",
    keyword: "",
    loading: false,
    selectedTask: {}
  },
  mutations: {
    FETCH_LOADING(state) {
      state.loading = true;
    },
    FETCH_DONE(state) {
      state.loading = false;
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks = [...state.tasks, task];
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    TOGGLE_TASK_DONE(state, { id, done }) {
      state.tasks = state.tasks.map(task =>
        task.id === id ? { ...task, done } : task
      );
    },
    UPDATE_TASK_NAME(state, { id, name }) {
      state.tasks = state.tasks.map(task =>
        task.id === id ? { ...task, name } : task
      );
    },
    UPDATE_TASK_CONTENT(state, { id, content }) {
      state.tasks = state.tasks.map(task =>
        task.id === id ? { ...task, content } : task
      );
    },
    FILTER_TASKS(state, { filter, keyword }) {
      (state.filter = filter), (state.keyword = keyword);
    },
    SELECT_TASK(state, id) {
      state.selectedTask = state.tasks.filter(task => task.id === id);
    },
    ALL_TODO(state) {
      state.tasks = state.tasks.map(task => ({ ...task, done: false }));
    },
    ALL_DONE(state) {
      state.tasks = state.tasks.map(task => ({ ...task, done: true }));
    },
    DELETE_ALL_TASKS(state) {
      state.tasks = [];
      state.filter = "all";
      state.keyword = "";
      state.loading = false;
      state.selectedTask = {};
    }
  }
};

export default tasksStore;
