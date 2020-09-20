import Vue from 'vue';
import Vuex from 'vuex';
import userData from '@/data/users.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: userData.users,
    sortButtons: [
      {
        title: 'Дата регистрации',
        sortId: 'registration',
        smallest: false,
        largest: false,
        default: true,
      },
      { title: 'ФИО' },
      {
        title: 'Дата рождения',
        sortId: 'date',
        smallest: false,
        largest: false,
      },
      { title: 'Email' },
      { title: 'Телефон' },
      {
        title: 'Дистанция, км',
        sortId: 'distance',
        smallest: false,
        largest: false,
      },
      {
        title: 'Сумма взноса, руб.',
        sortId: 'payment',
        smallest: false,
        largest: false,
      },
    ],
  },
  mutations: {
    updateUsers(state, upd) {
      state.users = upd;
    },
    sortNum(state, { upd, id, sortTo }) {
      const updUsers = state.users.sort((a, b) => a[id] - b[id]);
      if (sortTo) updUsers.reverse();
      state.sortButtons = upd;
      state.users = updUsers;
    },
    sortDate(state, { upd, id, sortTo }) {
      const updUsers = state.users.sort((a, b) => {
        let aa = a[id].split('.');
        let bb = b[id].split('.');
        aa = +aa[0] + +aa[1] * 100 + +aa[2] * 1000;
        bb = +bb[0] + +bb[1] * 100 + +bb[2] * 1000;
        return aa - bb;
      });
      if (sortTo) updUsers.reverse();
      state.sortButtons = upd;
      state.users = updUsers;
    },
  },
  getters: {

  },
  actions: {
    addUser(context, user) {
      const id = context.state.users.length + 1;
      const upd = [...context.state.users, { ...user, id }];
      context.commit('updateUsers', upd);
    },
    sortData(context, id) {
      const btn = context.state.sortButtons.filter((obj) => obj.sortId === id)[0];
      if (btn.smallest) {
        const upd = context.state.sortButtons.map((obj) => {
          if (obj.sortId === id) {
            return {
              ...obj,
              smallest: false,
              largest: true,
            };
          }
          return {
            ...obj,
            smallest: false,
            largest: false,
          };
        });
        if (typeof context.state.users[0][id] === 'string') {
          context.commit('sortDate', { upd, id, sortTo: 1 });
        } else {
          context.commit('sortNum', { upd, id, sortTo: 1 });
        }
      } else {
        const upd = context.state.sortButtons.map((obj) => {
          if (obj.sortId === id) {
            return {
              ...obj,
              smallest: true,
              largest: false,
            };
          }
          return {
            ...obj,
            smallest: false,
            largest: false,
          };
        });
        if (typeof context.state.users[0][id] === 'string') {
          context.commit('sortDate', { upd, id, sortTo: 0 });
        } else {
          context.commit('sortNum', { upd, id, sortTo: 0 });
        }
      }
    },

  },
});
