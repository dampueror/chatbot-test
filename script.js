document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    const botResponse = getBotResponse(userInput);
    setTimeout(() => appendMessage('bot', botResponse), 1000);
}

function appendMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes('hola')) {
        return 'Bienvenido... Guerrero sin luz... ¿Cómo puedo ayudarte a convertirte en el nuevo Señor de Elden?';
    } else if (input.includes('recomienda')) {
        return 'Te recomiendo probar The Legend of Zelda: Breath of the Wild, es un excelente juego de aventuras.';
    } else if (input.includes('cuales son las builds más potentes de elden ring')) {
        return 'La build de Espada del Ejecutor de Marais. Un daño sumamente potente con la que podrás destrozar a cualquier jefe que encuentres. ¿Quieres que te explique más a fondo la funcionalidad y froma de crear esta build?.';
    } else if (input.includes('cuales juegos son tus favoritos')) {
        return 'Dentro de mis favoritos están la saga de Doom, menos Doom 3. Eso fue una porqueria si me preguntas personalmente. La saga God Of War, epecialmente God Of War 3. Personalmente es mi favorito. También los juegos de Asassin´s Creed, especialmente el 2.';
    } else if (input.includes('mejor juego')) {
        return 'Eso depende de tus gustos, pero algunos de los mejores juegos son The Witcher 3, Red Dead Redemption 2 y God of War.';
    } else if (input.includes('quien es el creador de elden ring')) {
        return 'Hidetaka Miyazaki es el creador de "Elden Ring". Es el presidente de FromSoftware, la compañía de videojuegos japonesa que desarrolló el juego. Miyazaki es conocido por su trabajo en la serie "Dark Souls", "Bloodborne" y "Sekiro: Shadows Die Twice", y es considerado uno de los desarrolladores más influyentes en la industria de los videojuegos. "Elden Ring" fue desarrollado en colaboración con el famoso autor de fantasía George R.R. Martin, conocido por su serie de libros "A Song of Ice and Fire", que inspiró la popular serie de televisión "Game of Thrones". Martin contribuyó al lore y la construcción del mundo del juego.El juego se lanzó en febrero de 2022 y es un título de acción y rol ambientado en un vasto mundo abierto, con una jugabilidad desafiante y un profundo enfoque en la exploración y la narrativa.';
    } else {
        return 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?';
    }
    
    
}
