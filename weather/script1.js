
        const jokeButton = document.getElementById('joke-button');
        const jokeContainer = document.getElementById('joke-container');
        const setupText = document.getElementById('joke-setup');
        const punchlineText = document.getElementById('joke-punchline');
        const loadingMessage = document.getElementById('loading-message');
        const errorMessage = document.getElementById('error-message');

        
        async function getJoke() {
            setupText.classList.add('hidden');
            punchlineText.classList.add('hidden');
            errorMessage.classList.add('hidden');
            loadingMessage.classList.remove('hidden');

            try {
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jokeData = await response.json();
                
                displayJoke(jokeData);

            } catch (error) {
                console.error("Fetch error: ", error);
                loadingMessage.classList.add('hidden');
                errorMessage.classList.remove('hidden');
            }
        }
        function displayJoke(joke) {
            loadingMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');
            setupText.textContent = joke.setup;
            punchlineText.textContent = joke.punchline;
            setupText.classList.remove('hidden');
            punchlineText.classList.remove('hidden');
            jokeButton.textContent = 'Next Joke';
        }
        jokeButton.addEventListener('click', getJoke);
        