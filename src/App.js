import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <form className="form">
                <h1>Обратная связь</h1>
                <div className='FIO'>
                    <input required className='textbox' placeholder='Фамилия'/>
                    <input required style={{marginRight:2+"%",marginLeft:2+"%"}} className='textbox' placeholder='Имя'/>
                    <input  className='textbox' placeholder='Отчество'/>
                </div>
                <div>
                    <input required className='textbox' type="tel" placeholder='Телефон'/>
                </div>
                <div>
                    <input required className='textbox' type="email" placeholder='Email'/>
                </div>
                <div>
                    <textarea required className='message' placeholder='Сообщение:'/>
                </div>
                <button className='button'>Отправить</button>
            </form>
        </div>
    );
}

export default App;
