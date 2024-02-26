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
                message: 'Non posso sinceramente.',
                time: '12:00',
                status: 'received'
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
                message: 'Esci stasera??',
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
                message: 'Ricordati chi fa gli anni domani!!',
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
                message: 'Devo andare a lavare la macchina',
                time: '12:00',
                status: 'received'
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
                message: 'Vieni al cinema stasera??',
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
                message: 'Ciao....',
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
                message: 'Come la vuoi la pizza??',
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
                message: 'Come va??',
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
                status: 'received'
            }
        ],},
            { name: 'Plotina', lastAccess: '2 weeks ago', avatar: 'img/avatar_6.jpg', messages: [
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
                message: 'Ma hai visto il nuovo episodio??',
                time: '12:00',
                status: 'sent'
            }
        ],},
            { name: 'Pina', lastAccess: '2 weeks ago', avatar: 'img/avatar_io.jpg', messages: [
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
                message: 'Ti aspetto....',
                time: '12:00',
                status: 'sent'
            }
        ],},
        ],
      };
    }, mounted() { 
        // Funzione hook per aggiungere un event listener al pulsante "Aggiungi Contatto"
        const addContactButton = document.getElementById("addContactButton");

        addContactButton.addEventListener("click", () => {
            const newContactName = prompt("Inserisci il nome del nuovo contatto:");
            if (newContactName) {
                const avatarNumber = Math.floor(Math.random() * 7) + 1;
                const newContact = {
                    name: newContactName,
                    lastAccess: 'Online',
                    avatar: `img/avatar_${avatarNumber}.jpg`,
                    messages: [],
                };
                this.contacts.push(newContact);
            }
        });
    }, methods: {
        // Metodo per eliminare un contatto
        deleteContact(contact) {
            const index = this.contacts.indexOf(contact);
            if (index > -1) {
                this.contacts.splice(index, 1);
            }
        },
        // Metodo per ottenere l'ultimo messaggio di un contatto
        getLastMessage(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            if (lastMessage) {
                return `${lastMessage.status === 'sent' ? 'Sent: ' : 'Received: '} ${lastMessage.message}`;
            } else {
                return 'No messages';
            }
        },
        // Metodo per visualizzare i messaggi di un contatto selezionato
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


//Funzione per aggiungere nuovi contatti
document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const micIcon = document.getElementById("mic-icon");
    const sendIcon = document.getElementById("send-icon");
    const chatInterface = document.getElementById("messages");

    let messageSent = false;
//Funzione per l'invio del messaggio
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
        
    }
//Cambio di icone
    messageInput.addEventListener("input", function() {
        if (this.value.trim() === "") {
            micIcon.style.display = "inline-block"; 
            sendIcon.style.display = "none";
        } else {
            micIcon.style.display = "none";
            sendIcon.style.display = "inline-block";
        }
    });

//Icona di invio messaggio
    sendIcon.addEventListener("click", function() {
        const messageContent = messageInput.value.trim();
        if (messageContent !== '') {
            appendMessage(messageContent, 'sent');
            messageInput.value = '';
            messageSent = true;
        }
    });
//Enter per invio messaggio
    messageInput.addEventListener("keypress", function(sending) {
        if (sending.key === "Enter") {
            micIcon.style.display = "inline-block";
            sendIcon.style.display = "none";
            const messageContent = messageInput.value.trim();
            if (messageContent !== '') {
                messageSent = true;
                appendMessage(messageContent, 'sent');
                messageInput.value = '';
            }
        }
    });

//Funzione per le risposte generate dal PC
    const randomResponses = ['Va bene', 'Capito', 'Perfetto', 'Ho capito'];

    setInterval(function() {
        if (messageSent) {
            const randomIndex = Math.floor(Math.random() * randomResponses.length);
            appendMessage(randomResponses[randomIndex], 'received');
            messageSent = false;
        }
    }, 1000);

});

//Funzione per filtro contatti
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

//Funzione per eliminare messaggio
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(cancel) {
        if (cancel.target.id === 'deleteButton') {
            const deleteButton = cancel.target;
            const messageContainer = deleteButton.closest('#disappear');
            messageContainer.style.display = 'none';
        }
    });
});

//Funzione per mostrare orario messaggio
function showDateTime(time) {
    const dateTimeString = new Date(`01/01/2022 ${time}`).toLocaleString('it-IT', { timeZone: 'Europe/Rome' });
    
    alert(`Data e ora del messaggio:\n${dateTimeString}`);
}

//Funzione per eliminare messaggio
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
                this.value = "";
            }
        }
    });
});

//Funzione cambio tema
document.addEventListener("DOMContentLoaded", function() {
    let themeToggled = false;

    const changeThemeButton = document.getElementById("toggle-button");
    const bottomSide = document.getElementById("bottom-side");
    const personalAccount = document.getElementById("personal-account");
    const friendAccount= document.getElementById("friend-account");
    const inputCnt= document.getElementById("input-cnt");
    const topSide= document.getElementById("top-side");
    const chatInterface = document.getElementById("chat-interface");
    const contacts = document.querySelectorAll(".contact");

    
    
    changeThemeButton.addEventListener("click", function() {

        if (!themeToggled) {
            bottomSide.classList.add("botbg");
            personalAccount.classList.add("toggle-theme");
            friendAccount.classList.add("toggle-theme");
            inputCnt.classList.add("toggle-theme");
            topSide.classList.add("topbg");
            chatInterface.style.backgroundImage = "url(img/minedark.jpg)";
            contacts.forEach(contact => {
                contact.classList.add("toggle-theme");
            });
            themeToggled = true;

        } else {
            bottomSide.classList.remove("botbg");
            personalAccount.classList.remove("toggle-theme");
            friendAccount.classList.remove("toggle-theme");
            inputCnt.classList.remove("toggle-theme");
            topSide.classList.remove("topbg");
            chatInterface.style.backgroundImage = "url(img/mine.jpg)";
            contacts.forEach(contact => {
                contact.classList.remove("toggle-theme");   
            });
            themeToggled = false;
        }
    });
    
});

//Funzione cambio font
document.addEventListener("DOMContentLoaded", function() {
    let fontSizeState = 0;

    const clickableIcon = document.querySelector(".icons.fa-circle-notch");

    clickableIcon.addEventListener("click", function() {
        fontSizeState = (fontSizeState + 1) % 3;

        if (fontSizeState === 1) {
            document.body.style.fontSize = "110%";
        } else if (fontSizeState === 2) {
            document.body.style.fontSize = "120%";
        } else {
            document.body.style.fontSize = "100%";
        }
    });
});

//SplashPage
document.addEventListener("DOMContentLoaded", function() {
    let splashContainer = document.getElementById("splashContainer");
    let enterButton = document.getElementById("enterButton");

    enterButton.addEventListener("click", function() {
        splashContainer.style.display = "none";
    });
});

//Funzione per menu icona
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('fa-ellipsis-vertical')) {
            const dropdownMenu = target.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        }

        if (target.id === 'deleteMessages') {
            const messagesContainer = document.getElementById('messages');
            messagesContainer.innerHTML = ''; 
        }
    });
});

//Funzione per lo "Sta Scrivendo...."
document.addEventListener("DOMContentLoaded", function() {
    let isTypingTimeout;

    function setTypingStatus(isTyping) {
        const switchElement = document.getElementById("switch");

        if (isTyping) {
            switchElement.querySelector(".last-show").innerText = "Sta scrivendo....";
        } else {
           
            setTimeout(function() {
                switchElement.querySelector(".last-show").innerText = "Online";
            }, 1000); 
        }
    }

    const sending = document.getElementById("send-icon");
    const messageInput = document.getElementById("message-input");

    sending.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        clearTimeout(isTypingTimeout);
        setTypingStatus(true);

        isTypingTimeout = setTimeout(function() {
            setTypingStatus(false);
        }, 1000); 
    }
});

//Responsive
const sidebar = document.getElementById('sidebar');
const chat = document.getElementById('chat');
const contacts = document.getElementsByClassName('contact');

for (let contact of contacts) {
    contact.addEventListener('click', function() {
        if (window.innerWidth < 690) {
            sidebar.style.display = 'none';
            chat.style.display = 'block';
        }
    });
}

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    const sidebar = document.getElementById('sidebar');
    const chat = document.getElementById('chat');

    if (windowWidth <= 690) {
        sidebar.style.display = 'block';
        chat.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
        chat.style.display = 'block';
    }
});

//Responsive, toggle
function returnToSidebar() {
    const windowWidth = window.innerWidth;
    const sidebar = document.getElementById('sidebar');
    const chat = document.getElementById('chat');
    const returnBtn = document.getElementById('return-to-sidebar');

    if (windowWidth < 690) {
        sidebar.style.display = 'block';
        chat.style.display = 'none';
    }
}

//Integrate alcune emoji, purtroppo non ho trovato API realmente utili
document.addEventListener("DOMContentLoaded", function() {
    const emojiIcon = document.querySelector(".fa-face-smile");
    const emojiMenu = document.getElementById("emoji-menu");

    emojiIcon.addEventListener("click", function() {
        emojiMenu.classList.toggle("show");
    });

    const emojis = emojiMenu.querySelectorAll(".emoji");
    emojis.forEach(emoji => {
        emoji.addEventListener("click", function() {
            const messageInput = document.getElementById("message-input");
            const currentMessage = messageInput.value;
            const emojiChar = this.innerText;
            messageInput.value = currentMessage + emojiChar;
            emojiMenu.classList.remove("show");
        });
    });
});