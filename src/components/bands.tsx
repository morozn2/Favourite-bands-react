import "./bands.css"

function Bands() {
    return (
        <>
            <div className="genre-bands-box">
                <h2 className="genre-name-black-metal">Black Metal</h2>
                <div className="bands-box">
                    <div className="band band-gold left-side">
                        <img src="NM.jpg" alt="" className="band-pic" />
                        <div className="band-desc-box">
                            <h3 className="band-name-black-metal">1. Nokturnal Mortum</h3>
                            <img src="NM-logo.jpg" alt="" className="band-logo-small" />
                            <p className="band-genre">Pagan / Symphonic / Melodic / Folk Metal</p>
                            <p>Украинская группа из Харькова, начинавшая в жанре death metal под названиями Suppuration и Crystaline Darkness.</p>
                        </div>
                    </div>
                    <div className="band band-silver right-side">
                        <img src="LL.jpg" alt="" className="band-pic" />
                        <div className="band-desc-box">
                            <h3 className="band-name-black-metal">2. Lifelover</h3>
                            <img src="LL-logo.jpg" alt="" className="band-logo-big" />
                            <p className="band-genre">DSBM + Post-Punk</p>
                            <p>Атмосферный depressive rock вперемешку с тяжелыми black metal-риффами из Стокгольма, сопровождающийся красивыми мелодичными партиями клавиш.</p>
                        </div>
                    </div>
                    <div className="band band-bronze left-side">
                        <img src="LoC.jpg" alt="" className="band-pic" />
                        <div className="band-desc-box">
                            <h3 className="band-name-black-metal">3. Lurker of Chalice</h3>
                            <img src="LoC-logo.jpg" alt="" className="band-logo-big" />
                            <p className="band-genre">Atmospheric Black Metal</p>
                            <p>Lurker of Chalice — музыкальный проект создателя группы Leviathan Wrest'а (Джеффа Уайтхеда) из Сан-Франциско.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="genre-bands-box">
                <h2 className="genre-name-death-metal">Death Metal</h2>
                <div className="bands-box">
                    <div className="band band-gold right-side">
                        <img src="SF.jpg" alt="" className="band-pic" />
                        <div className="band-desc-box">
                            <h3 className="band-name-death-metal">1. Septicflesh</h3>
                            <img src="SF-logo.png" alt="" className="band-logo-small" />
                            <p className="band-genre">Symphonic / Death / Gothic / Death Doom Metal</p>
                            <p>Septicflesh (ранее — Septic Flesh) — греческая symphonic death metal группа из Афин.</p>
                        </div>
                    </div>
                    <div className="band band-silver left-side">
                        <img src="N.jpg" alt="" className="band-pic" />
                        <div className="band-desc-box">
                            <h3 className="band-name-death-metal">2. Nile</h3>
                            <img src="N-logo.png" alt="" className="band-logo-small" />
                            <p className="band-genre">Technical / Brutal Death Metal</p>
                            <p>Technical brutal death metal-группа из Гринвилла, Южная Каролина, сочиняющая музыку на тему египетской мифологии и истории.</p>
                        </div>
                    </div>
                    <div className="band band-bronze right-side">
                        <img src="I.jpg" alt="" className="band-pic" />
                        <div className="band-desc-box">
                            <h3 className="band-name-death-metal">3. Immolation</h3>
                            <img src="I-logo.jpg" alt="" className="band-logo-small" />
                            <p className="band-genre">Dissonant Death / Death Metal</p>
                            <p>Американская death-metal-группа из города Йонкерса, штат Нью-Йорк. Является одной из значимых дэт-метал групп США.</p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Bands