const url = process.env.API_URL;

exports.handler = async function(event, context){
    const eventBody = JSON.parse(event.body);
    const APIresponse = await fetch(url+eventBody.region);
    const data = await APIresponse.json();
    // console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            pokemon: data.pokemon_entries,
            // pokemon: data,
        })
    }
}