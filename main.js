let apiKey = 'A7do_Q._zMx4g:Onp-L4aKEiUfEVEm';
let ably = new Ably.Realtime({
    key: apiKey
});

let metaChannel = ably.channels.get("[meta]channel.lifecycle");
let resultArea = document.getElementById("result");
resultArea.scrollTop = resultArea.scrollHeight;

metaChannel.subscribe('channel.opened', (msg) => {
    let msgJSONobj = JSON.parse(JSON.stringify(msg.data));
    resultArea.value += ('[METADATA - ' + (new Date().toLocaleTimeString()) + ' ]: Channel "' + msgJSONobj.name + '" has been activated globally\n');
    resultArea.scrollTop = resultArea.scrollHeight;
})

metaChannel.subscribe('channel.closed', (msg) => {
    let msgJSONobj = JSON.parse(JSON.stringify(msg.data));
    resultArea.value += ('[METADATA - ' + (new Date().toLocaleTimeString()) + ' ]: Channel "' + msgJSONobj.name + '" has been deactivated globally\n');
    resultArea.scrollTop = resultArea.scrollHeight;
})

metaChannel.subscribe('channel.region.active', (msg) => {
    let msgJSONobj = JSON.parse(JSON.stringify(msg.data));
    resultArea.value += ('[METADATA - ' + (new Date().toLocaleTimeString()) + ' ]: Channel "' + msgJSONobj.name + '" has been activated in ' + msgJSONobj.region + ' region\n');
    resultArea.scrollTop = resultArea.scrollHeight;
})

metaChannel.subscribe('channel.region.inactive', (msg) => {
    let msgJSONobj = JSON.parse(JSON.stringify(msg.data));
    resultArea.value += ('[METADATA - ' + (new Date().toLocaleTimeString()) + ' ]: Channel "' + msgJSONobj.name + '" has been deactivated in ' + msgJSONobj.region + ' region\n');
    resultArea.scrollTop = resultArea.scrollHeight;
})
