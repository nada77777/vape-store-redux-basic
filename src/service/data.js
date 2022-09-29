import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

class DataLoader {

    constructor(firebase){
        this.db = getDatabase(firebase);
        this.auth = getAuth(firebase);
    }


    readData = (callBack) => {
        // const data = onValue(ref(this.db, '/items'), (snapshot) => snapshot.val());
        onValue(ref(this.db, '/items'), (snapshot) => {
            const value = snapshot.val();
            value && callBack(value);
        });

    };



};


export default DataLoader;