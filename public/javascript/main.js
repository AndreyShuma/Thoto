const form = document.querySelector('form');

console.log('Hello Front>>>>>>');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log('ev>>', ev);

    const formData = new FormData(ev.target);

    const run = async () => {
        const render = await axios.post('/main/data', formData);
        console.log('render>>>>', render);
    }

    run();

    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="tel"]').value = '';
    document.querySelector('input[type="email"]').value = '';
});
