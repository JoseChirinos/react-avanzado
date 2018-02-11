import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';

class Home extends Component {
	state = {
		modalVisible:false,
	}
	handleCloseModal = (event) =>{
		this.setState({
			modalVisible: false,
		})
	}
	handleOpenModal = (event) =>{
		this.setState({
			modalVisible: true,
		})
	}
	render(){
		return (
			<HomeLayout>
				<Related/>
				<Categories
					categories={ this.props.data.categories }
					handleOpen = { this.handleOpenModal }
				/>
				{
					this.state.modalVisible &&
					<ModalContainer>
						<Modal
							handleClose = { this.handleCloseModal }
							>
								<h1>Holaa que onda locos</h1>
							</Modal>
					</ModalContainer>
				}
			</HomeLayout>
		);
	}
}

export default Home;
