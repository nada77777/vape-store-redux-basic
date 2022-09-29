class DataDownload {

    getData(){
        const option = {
            method: 'GET',
            redirect: 'follow',
        };
      
       return fetch('https://gist.githubusercontent.com/sypear/79455cda14403e74b99d66d5b0e8891b/raw/be7a559b737e5bdd4024d2eb083ec64e55b2b674/productData.json', option)//
        .then(response => response.json())//
        // .then(result => console.log(result));
    }

};

export default DataDownload;