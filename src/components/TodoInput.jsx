import React, { Component } from 'react'

export default class TodoInput extends Component {
	render() {
		const { item, handleChange, handleAdd, editItem } = this.props

		return (
			<div className='card card-body my-3'>
				<form onSubmit={handleAdd}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book p-1"></i>
							</div>
						</div>
						<input type="text" className='form-control text-capitalize' placeholder='Add todo item' value={item} onChange={handleChange} />
					</div>
					<button type="submit"
						disabled={item ? false : true}
						className={editItem
							? "form-control btn btn-success mt-3 text-uppercase"
							: "form-control btn btn-primary mt-3 text-uppercase"
						}
					>
						{editItem ? "Edit item" : "Add item"}</button>
				</form>

			</div >
		)
	}
}
