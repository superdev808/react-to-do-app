import React, { Component } from 'react';
import './ModalDialog.css'

class ModalDialog extends Component {
    render() {
        const { currentPost, modalEvent } = this.props
        return (
            currentPost && <div id='myModal' className='modal' style={{ display: 'block' }}>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <span id={'close'} className='close' onClick={modalEvent}>&times;</span>
                        <p>{'Are you sure to delete this one?'}</p>
                    </div>
                    <div className='modal-body'>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor='fname'>Title</label>
                            </div>
                            <div className='col-75'>
                                <input type='text' id='title' readOnly value={currentPost.title} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor='subject'>Decription</label>
                            </div>
                            <div className='col-75'>
                                <textarea id='content' name='content' readOnly style={{ height: '200px' }} value={currentPost.content}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button id={'OK'} className='button button2 buttonOK' onClick={modalEvent}> Yes </button>
                        <button id={'Cancel'} className='button button2 buttonNo' onClick={modalEvent}> No </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalDialog