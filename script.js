const app = Vue.createApp({
    data() {
      return {
        contacts: [
          { name: 'Pippo', lastAccess: '2 hours ago', avatar: 'img/avatar_1.jpg' },
          { name: 'Pluto', lastAccess: '1 day ago', avatar: 'img/avatar_2.jpg' },
          { name: 'Plutino', lastAccess: '1 week ago', avatar: 'img/avatar_3.jpg' },
          { name: 'Plutarco', lastAccess: '1 month ago', avatar: 'img/avatar_4.jpg' },
          { name: 'Plutin', lastAccess: '3 weeks ago', avatar: 'img/avatar_8.jpg' },
          { name: 'Plauto', lastAccess: '1 week ago', avatar: 'img/avatar_5.jpg' },
          { name: 'Aran', lastAccess: '2 minutes ago', avatar: 'img/avatar_2.jpg' },
          { name: 'Cino', lastAccess: '4 days ago', avatar: 'img/avatar_7.jpg' },
          { name: 'Plaola', lastAccess: 'Online', avatar: 'img/avatar_6.jpg' },
          { name: 'Plalutena', lastAccess: '2 weeks ago', avatar: 'img/avatar_io.jpg' },
        ],
        chats: [
            { message: 'Pippo', date: '2 hours ago', status: 'img/avatar_1.jpg' },
            { message: 'Pluto', date: '1 day ago', status: 'img/avatar_2.jpg' },
            { message: 'Plutino', date: '1 week ago', status: 'img/avatar_3.jpg' },
            { message: 'Plutarco', date: '1 month ago', status: 'img/avatar_4.jpg' },
            { message: 'Plutin', date: '3 weeks ago', status: 'img/avatar_8.jpg' },
            { message: 'Plauto', date: '1 week ago', status: 'img/avatar_5.jpg' },
            { message: 'Aran', date: '2 minutes ago', status: 'img/avatar_2.jpg' },
            { message: 'Cino', date: '4 days ago', status: 'img/avatar_7.jpg' },
            { message: 'Plaola', date: 'Online', status: 'img/avatar_6.jpg' },
            { message: 'Plalutena', date: '2 weeks ago', status: 'img/avatar_io.jpg' },
          ],
      };
    }, methods: {
        showContact(contact) {
            const changeContactElement = document.getElementById("switch");
            changeContactElement.innerHTML = `
            <img class="avatar" src="${contact.avatar}" alt="${contact.name}">
                <div class="column-container">
                <span class="m-4">${contact.name}</span>
                <span class="last-show m-4">${contact.lastAccess}</span>
                </div>
            `;
        }
    }
});

app.mount('#app');