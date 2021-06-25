import React from 'react'

const Nav = props => {
    const { current, setCurrent, getData } = props;

    return (
        <nav>
            <div className="nav-content">
                <div>
                    <button value="The United States of America" onClick={e=> setCurrent(e)}>The United States</button>
                    <button value="India" onClick={e=> setCurrent(e)}>India</button>
                    <button value="Iceland" onClick={e=> setCurrent(e)}>Iceland</button>
                    <button value="Kenya" onClick={e=> setCurrent(e)}>Kenya</button>
                    <button value="Japan" onClick={e=> setCurrent(e)}>Japan</button>
                </div>
                <div className="city-country">
                    <img src={getData('flag', current)} alt="" />
                    <div>
                        <p>{`${getData('city', current)},`}</p>
                        <p>{`${getData('name', current)}`}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav