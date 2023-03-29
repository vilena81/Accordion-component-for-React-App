
import { Component } from 'react'

class AccordionClass extends Component {
    state = { countries: [], activeIndex: null }

    componentDidMount() {
        fetch("https://countriesnow.space/api/v0.1/countries/capital")
            .then(res => res.json())
            .then(data => this.setState({ countries: data.data }))
            .catch(error => console.log(error))
    }

    render() {
        const { countries, activeIndex } = this.state

        return (
            <div className='container'>

                {countries.map((country, index) => (
                    <div key={index} className="title">
                        <button className='btn1' onClick={() => this.setState((prevState) => ({ activeIndex: prevState.activeIndex === index ? null : index }))}>{country.name}</button>
                        {index === activeIndex && (
                            <div className=''>
                                <p>Capital:{country.capital}</p>
                                <p>iso2:{country.iso2}</p>
                                <p>iso3:{country.iso3}</p>
                            </div>
                        )}
                    </div>

                ))}
            </div>

        )
    }
}
export default AccordionClass;