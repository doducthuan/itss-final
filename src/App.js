import './ux.css';
import {useState} from 'react'
import Confirm2 from "../hooks/test2";

function Confirm() {
    const [input, setInput] = useState('');
    const {itemsDefault, items, setItems} = Confirm2()

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleAdd = () => {
        setItems([...items, input]);
        setInput('');
    }

    return (
        <div className='ux-container'>
            <div className='ux-list'>
                List: {
                    [${itemsDefault.join(', ')}]
                }
            </div>
            <div className='ux-item'>
                <input value={input} onChange={handleChange}/>
                <button onClick={() => handleAdd()}>Submit</button>
            </div>

            <div>
                Add: {input}
            </div>

            <div className='ux-list'>
                List: {
                    [${items.join(', ')}]
                }
            </div>
        </div>
    )
}

export default Confirm;

export default App;
