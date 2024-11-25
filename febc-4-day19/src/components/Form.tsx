import React from 'react';
import { useParams } from 'react-router-dom';

function Form() {
    const { id } = useParams<{ id: string }>();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Payment Form</h1>
            <p>You are buying product ID: {id}</p>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Address:
                        <input type="text" name="address" required />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Card Details:
                        <input type="text" name="card" required />
                    </label>
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                    }}
                >
                    Submit Payment
                </button>
            </form>
        </div>
    );
}

export default Form;
