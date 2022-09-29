import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import ItemsStore from './components/items_store/items_store';
import ItemDetail from './components/item_detail/item_detail';
import MainContents from './components/main_contents/main_contents';





function App({ InputBtn, Data, database }) {

  const [items, setItems] = useState([]);

  
  useEffect(() => {

    database.readData(addItem);
  
  },[database]);

  
  const addItem = (item) => {
      console.log('insert');
      setItems(item);
  }



  return (
    <BrowserRouter>
    <div className={styles.app}>
        <Routes>
          <Route path='/' element={<MainContents InputBtn={InputBtn} items={items} />} />
          <Route path='/repo' element={<ItemsStore database={database} />} />
          <Route path='/detail/:id' element={<ItemDetail InputBtn={InputBtn} />} />
        </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
