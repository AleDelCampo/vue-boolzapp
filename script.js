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
        };
    },
});
app.mount('#app');