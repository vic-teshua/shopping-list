import React from 'react';
import './index.css';

function Modal({ handleClose, show, children }) {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';

	return (
		<div className={showHideClassName}>
			<section className='modal-main'>
				<div className='close-button-container'>
					<button
						type='button'
						onClick={() => {
							handleClose();
							window.location.reload();
						}}
					>
						<i className='fas fa-times'></i>
					</button>
				</div>

				{children}
			</section>
		</div>
	);
}

export default Modal;
