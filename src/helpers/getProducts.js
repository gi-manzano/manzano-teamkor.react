const url = 'https://run.mocky.io/v3/371e6495-ed17-4635-bb1e-b40fdc69a75b';

export const getProducts = async (setState) => {

    try {
        const resp = await fetch(url);
        const data = await resp.json();
        setState(data);
    } catch (error) {
        console.log(error);
    }

}

export const getProductById = async (id, setState) => {

    try {
        const resp = await fetch(url);
        const data = await resp.json();
        const product = data.find( el => el.id == id );
       setState(product);


    } catch (error) {
        console.log(error);
    }
}


