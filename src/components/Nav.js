import React from 'react'

const Nav = props => {
    const { current, setCurrent } = props;

    return (
        <nav>
            <div>
                <button value="The United States of America" onClick={e=> setCurrent(e)}>The United States of America</button>
                <button value="India" onClick={e=> setCurrent(e)}>India</button>
                <button value="Iceland" onClick={e=> setCurrent(e)}>Iceland</button>
                <button value="Kenya" onClick={e=> setCurrent(e)}>Kenya</button>
                <button value="Japan" onClick={e=> setCurrent(e)}>Japan</button>
            </div>
        </nav>
    )
}

export default Nav