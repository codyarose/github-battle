import React from 'react'
import PropTypes from 'prop-types'

function LanguagesNav({ selected, onUpdateLanguage }) {
	const languages = [ 'All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python' ]

	return (
		<ul className="flex-center">
			{ languages.map(language => (
				<li key={ language }>
					<button
						type="button" //
						onClick={ () => onUpdateLanguage(language) }
						className="btn-clear nav-link"
						style={ language === selected ? { color: 'rgb(187,46,31)' } : null }
					>
						{ language }
					</button>
				</li>
			)) }
		</ul>
	)
}

LanguagesNav.propTypes = {
	selected: PropTypes.string.isRequired,
	onUpdateLanguage: PropTypes.func.isRequired,
}

export default class Popular extends React.Component {
	constructor(props) {
		super(props)

		this.updateLanguage = this.updateLanguage.bind(this)

		this.state = {
			selectedLanguage: 'All',
		}
	}

	updateLanguage(selectedLanguage) {
		this.setState({
			selectedLanguage,
		})
	}

	render() {
		const { selectedLanguage } = this.state

		return (
			<React.Fragment>
				<LanguagesNav
					selected={ selectedLanguage }
					onUpdateLanguage={ this.updateLanguage }
				/>
			</React.Fragment>
		)
	}
}
