const app = Vue.createApp({
    data() {
      return {
        contacts: [
            { name: 'Pippo', lastAccess: '2 hours ago', avatar: 'img/avatar_1.jpg',
            messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Pluto', lastAccess: '1 day ago', avatar: 'img/avatar_2.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plutino', lastAccess: '1 week ago', avatar: 'img/avatar_3.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plutarco', lastAccess: '1 month ago', avatar: 'img/avatar_4.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plutin', lastAccess: '3 weeks ago', avatar: 'img/avatar_8.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plauto', lastAccess: '1 week ago', avatar: 'img/avatar_5.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Aran', lastAccess: '2 minutes ago', avatar: 'img/avatar_2.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Cino', lastAccess: '4 days ago', avatar: 'img/avatar_7.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plaola', lastAccess: 'Online', avatar: 'img/avatar_6.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plalutena', lastAccess: '2 weeks ago', avatar: 'img/avatar_io.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plalutena', lastAccess: '2 weeks ago', avatar: 'img/avatar_io.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Plalutena', lastAccess: '2 weeks ago', avatar: 'img/avatar_io.jpg', messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                time: '12:00',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                time: '12:00',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                time: '12:00',
                status: 'sent'
            }
        ],},
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
            const messageElement = document.getElementById("messages");
            let messagesHTML = '';
            contact.messages.forEach(message => {
                const messageClass = message.status === 'sent' ? 'sent-message' : 'received-message';
                messagesHTML += 
                `<div id="disappear" class="column-container ${messageClass}">
                <span class="m-4">${message.message} <i class="column-container my-accordion fa-solid fa-chevron-down"><div class="my-accordion">
                <button id="deleteButton">Elimina Contenuto</button>
                <button id="showTimeButton" onclick="showDateTime('${message.time}')">Mostra Data e Ora</button>
                </div></i></span>
                <span class="m-4 msg-time">${message.time}</span>
                </div>`;
          });
            messageElement.innerHTML = messagesHTML;

            
}}});

app.mount('#app');

document.addEventListener("DOMContentLoaded", function() {
    let messageSent = false;

    const messageInput = document.getElementById("message-input");
    const chatInterface = document.getElementById("messages");

    messageInput.addEventListener("keypress", function(answer) {
        if (answer.key === 'Enter') {
            const messageContent = this.value.trim();
            if (messageContent !== '') {
                appendMessage(messageContent, 'sent');
                this.value = '';
                messageSent = true;

                setTimeout(function() {
                    if (messageSent) {
                        appendMessage('OK', 'received');
                        messageSent = false;
                    }
                }, 1000);
            }
        }
    });

    function appendMessage(message, status) {
        const messageClass = status === 'sent' ? 'sent-message' : 'received-message';
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const messageHTML = `<div id="disappear" class="column-container ${messageClass}">
            <span class="m-4">${message} <i class="column-container my-accordion fa-solid fa-chevron-down"><div class="my-accordion">
            <button id="deleteButton">Elimina Contenuto</button>
            <button id="showTimeButton" onclick="showDateTime('${currentTime}')">Mostra Data e Ora</button>
            </div></i></span>
            <span class="m-4 msg-time">${currentTime}</span>
            </div>`;

        chatInterface.innerHTML += ('beforeend', messageHTML);

        const deleteButtons = document.querySelectorAll('#deleteButton');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const messageContainer = this.closest('.column-container');
                messageContainer.style.display = 'none';
            });
        });
    }

    document.querySelectorAll('.contact').forEach(contact => {
        contact.addEventListener('click', function() {
            setTimeout(function() {
                messageSent = false;
            }, 100);
        });
    });
});

function filterContacts(searchTerm) {
    const contacts = document.querySelectorAll('.contact');
    contacts.forEach(contact => {
        const name = contact.querySelector('.contact-name').innerText.toLowerCase();
        if (name.includes(searchTerm.toLowerCase())) {
            contact.style.display = 'flex';
        } else {
            contact.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(cancel) {
        if (cancel.target.id === 'deleteButton') {
            const deleteButton = cancel.target;
            const messageContainer = deleteButton.closest('#disappear');
            messageContainer.style.display = 'none';
        }
    });
});

function showDateTime(time) {
    const dateTimeString = new Date(`01/01/2022 ${time}`).toLocaleString('it-IT', { timeZone: 'Europe/Rome' });
    
    alert(`Data e ora del messaggio:\n${dateTimeString}`);
}

document.addEventListener("DOMContentLoaded", function() {
    let mySelectedContact = null;

    const myContacts = document.querySelectorAll(".contact");
    const messageInput = document.getElementById("message-input");

    myContacts.forEach(contact => {
        contact.addEventListener("click", function() {
            const contactName = this.querySelector(".contact-name").innerText;
            mySelectedContact = contactName;
            messageInput.placeholder = `Scrivi un messaggio a ${contactName}:`;
        });
    });

    messageInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && mySelectedContact === null) {
            const messageContent = this.value.trim();
            if (messageContent !== "") {
                console.log(`Invia messaggio: "${messageContent}"`);
                this.value = "";
            }
        }
    });
});