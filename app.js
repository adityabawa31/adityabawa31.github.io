const scriptURL = 'https://script.google.com/macros/s/AKfycbz-DGW8fyEnZf84L6OJAzPgOaFYw424q6HfUrPw7ZhCOGUUIKajownvC6mX8Kwt6LIS/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for contacting me 🤗. I'll get back to you soon!"))
                .catch(error => console.error('Error!', error.message))
            })



            