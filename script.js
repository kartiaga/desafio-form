/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('groupForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Collect form data
            const names = [];
            const nameInputs = [
                document.getElementById('nome1'),
                document.getElementById('nome2'),
                document.getElementById('nome3'),
                document.getElementById('nome4'),
                document.getElementById('nome5')
            ];

            nameInputs.forEach(input => {
                if (input && input.value.trim() !== '') {
                    names.push(input.value.trim());
                }
            });

            const historiaInput = document.getElementById('historia');
            const message = historiaInput ? historiaInput.value.trim() : '';

            const payload = {
                names: names,
                message: message
            };

            const submitBtn = form.querySelector('.btn-submit');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            try {
                // Trying the URL provided in the requirements
                const response = await fetch('https://fsdt-contact.onrender.com/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    alert('Formulário enviado com sucesso!');
                    form.reset();
                } else {
                    alert('Ocorreu um erro ao enviar o formulário.');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Ocorreu um erro ao enviar o formulário.');
            } finally {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});
