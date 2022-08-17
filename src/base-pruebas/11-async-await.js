

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = '8FTsXeaXVah093K3Qpjns059cYa0rExd';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

      return url

    } catch (error) {
        // manejo del error
        return "no se encontro ninguna imagen";
    }
        
}




