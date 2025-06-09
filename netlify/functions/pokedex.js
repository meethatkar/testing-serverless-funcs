const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

exports.handler = async function(){
    const APIresponse = await fetch(url);
    const data = await APIresponse.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}