import React, { useState} from 'react'

const Info = props => {
    const { current, getData } = props

    const [infoClass, setInfoClass] = useState("info");
    const [infoButton, setInfoButton] = useState("Show Info")

    const infoPanelHandler = e => {
        if(infoClass === "info-colapsed"){
            setInfoClass("info")
            setInfoButton("Hide Info")
        } else {
            setInfoClass("info-colapsed")
            setInfoButton("Show Info")
        }
    }

    return (
        <div className={infoClass} onClick={e => infoPanelHandler(e)}>
            <button>{infoButton}</button>
            <p><span>Name:</span> {getData('name', current)}</p>
            <p><span>Abbreviation:</span> {getData('abbreviation', current)}</p>
            <p><span>Region:</span> {getData('region', current)}</p>
            <p><span>Capital:</span> {getData('capital', current)}</p>
            <p><span>Largest City:</span> {getData('largest-city', current)}</p>
            <p><span>Language(s):</span> {getData('language', current)}</p>
            <p><span>Population:</span> {getData('population', current)}</p>
            <p><span>Climate:</span> {getData('climate', current)}</p>
            <p><span>Government:</span> {getData('government', current)}</p>
            <p><span>Economic System:</span> {getData('economy', current)}</p>
            <p><span>Currency:</span> {getData('currency', current)}</p>
            <img src={getData('info-photo', current)} alt={getData('caption', current)} />
            <p className="caption">{getData('caption', current)}</p>

        </div>
    )
}

export default Info