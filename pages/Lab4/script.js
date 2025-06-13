//const arr = ['USD','EUR','RUB']
fetch('https://www.cbr-xml-daily.ru/daily_json.js')

.then((req) => {
    return req.json()
})

.then((data) => {
    const valute = data.Valute;
    const container = document.getElementById('valute-div');

    for (let item in valute) {
        const current = valute[item];
        const div = document.createElement('div');
        div.textContent = `${current.Name} (${current.CharCode}): ${current.Value} рублей.`;
        container.appendChild(div);
    }
})

.catch((err)=>{
    console.log(err);
})
