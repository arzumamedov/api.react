import React, { useEffect, useState } from 'react'
import './style.css'
function Products() {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const [filterApi, setFilterApi] = useState(data)

    //  const [darkMode, setDarkMode] = useState

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then((api) => setData(api))
    }, [])
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    function darkmode() {
        document.body.classList.toggle("darkmode")
    }
      const filterResult = (myregion) => {
    const result = data.filter(x => (x.region === myregion))
    setFilterApi(result)
  }

    return (
        <div>

<div className="all">
    <ul className='filter'>
        <li onClick={() => filterResult('Africa')}>Africa</li>
        <li onClick={() => filterResult('Americas')}>America</li>
        <li onClick={() => filterResult('Asia')}>Asia</li>
        <li onClick={() => filterResult('Europe')}>Europe</li>
        <li onClick={() => filterResult('Oceania')}>Oceania</li>
      </ul>
      <div className='cards'>
        {filterApi

          .filter(x => x.name.common.toLowerCase().includes(input.toLowerCase()))
          .map((x) => <div className='card' key={x.id}>
            <img width={320}  height={190} src={x.flags.png} />
            <p><b>{x.name.common}</b></p>
            <p><b>Population :</b>{x.population}</p>
            <p><b>Region :</b>{x.region}</p>
            <p><b>Capital :</b>{x.capital}</p>
          </div>)}
      </div>
    </div>



            <button onClick={() => darkmode()}><i class="fa-solid fa-moon"></i></button>
            <input value={input} onChange={handleChange} type="text" />
            <div className='main'>
                {data
                    .filter((x) => x.name.common.toLowerCase().includes(input.toLowerCase()))
                    .map(x => <div className='api' key={x.id}>
                        <img src={x.flags.png} alt="" />
                        <p>{x.name.common}</p>
                        <p>{x.region}</p>
                        <p>{x.capital}</p>
                        <p>{x.population}</p>
                    </div>)}
            </div>
        </div>
    )
}

export default Products  