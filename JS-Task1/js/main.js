var hour = new Date().getHours();

if(hour >= 00 && hour < 06){
    document.body.style.backgroundColor = 'black'
    alert('gecedir zehmet olmasa yatin')
}
if(hour >= 06 && hour < 12){
    document.body.style.backgroundColor = 'green'
    alert('sabahiniz xeyir gununuz ugurlu kecsin')
}
if(hour >= 12 && hour < 18){
    document.body.style.backgroundColor = 'grey'
    alert('axsaminiz xeyir')
}
if(hour >= 18 && hour < 24){
    document.body.style.backgroundColor = '#646f6f'
    alert('geceniz xeyre qalsin')
}

