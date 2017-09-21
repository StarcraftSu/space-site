import $ from 'jquery';

class Modal{
	constructor(){
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.event();
	}
	
	event(){
		//clicking  the open modal button
	this.openModalButton.click(this.openModal.bind(this));
		//clicking the x close modal button
	this.closeModalButton.click(this.closeModal.bind(this));		
		//pushes any key
	$(document).keyup(this.keyPressHandler.bind(this));
	
	}

	keyPressHandler(e){
		//keyCode的C要大写
		if(e.keyCode == 27){
			this.closeModal();
		}
	}

	openModal(){
		this.modal.addClass('modal--is-visible');
		//return false 不让网页回到开头的位置
		return false;
	}	

	closeModal(){
		this.modal.removeClass('modal--is-visible');
	}
}

export default Modal;