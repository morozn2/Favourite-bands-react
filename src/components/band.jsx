import "./bands.css"

export function Band({ bandStyle, bandPhotoSrc, bandNameGenre, bandName, bandGenre, bandLogoSrc, bandLogoSize, bandDesc }) {
    return (
        <div className={bandStyle}>
            <img src={bandPhotoSrc} alt="" className="band-pic" />
            <div className="band-desc-box">
                <h3 className={bandNameGenre}>{bandName}</h3>
                <img src={bandLogoSrc} alt="" className={bandLogoSize} />
                <p className="band-genre">{bandGenre}</p>
                <p>{bandDesc}</p>
            </div>
        </div>
    )
} 