import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Main() {
    const [list, setList] = useState([]);
    const checked = (false);
    const inputRef = useRef(null);
    const onItemAdded = (() => {
        const inputValue = inputRef.current.value;
        if (inputValue.trim() === "") {
            alert("please write sometthing");
            return;
        }
        else {
            setList((prev) => [...prev, inputValue]);
            inputRef.current.value = "";
            notify("Item has been added")
        }
    })
    const onItemDelete = (index) => {
        setList((prev) => {
            const updateItem = [...prev];
            updateItem.splice(index, 1);
            return updateItem;
           
        });
        notify("Item has been deleted");
    }
    console.log(checked);
    const notify = (e) => toast(e)
    return (
        
            <div className="container">
                <h1>Grocery Bud</h1>
            <div>
                <input type="text" style={{ width: "70%", height: "30px",border:"none"}} ref={inputRef}></input>
                <button style={{ width: "20%", height: "32px", border: "none", marginLeft: '6px' }} onClick={onItemAdded}>Add Item</button>
                {
                    list.map((val,index) => {
                        return (
                            <div className="cards">
                                <input type="checkbox"  />
                                <p>{val}</p>
                                <button className="del" onClick={()=>onItemDelete(index)}>Delete</button>
                            </div>
                      )
                    })
                }
            </div>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
progressClassName="custom-progress-bar"
/>
           </div>
        
    )
}

export default Main;