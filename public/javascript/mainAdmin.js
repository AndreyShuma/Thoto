const content = document.querySelector('.content');

console.log('Hello Admin>>>>>>' );

const run = async () => {
    const render = await axios.post('/admin/index');
    console.log('render >>>>', render.data);
    const result = render.data.map( item => {
        const html = `<li>
        <p class ="sizepape">Формат печаті : ${item.sizeFormat}</p>
        <p> Ім'я : ${item.nameUser}, Телефон : ${item.telethonUser}, Пошта : ${item.emailUser} </p>
        <p>Дата: ${item.date}</p>
        </li>`;
        return html;
        
    }).join('');

    content.innerHTML = result;
}

run();