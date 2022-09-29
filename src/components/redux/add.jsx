import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


import { insertItem } from "../store/store";



function Detail(props) {
   

    const {id} = useParams();
    const targetItem = props.product.find(item => item.id === +id);

    const dispatch = useDispatch();



    return (
        <>

         
                <div>
                    <div>
                        <Button onClick={() => {dispatch(insertItem(targetItem))}}>장바구니 담기</Button>
                    </div>
                </div>
         
        </>
    );
}