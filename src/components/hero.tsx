import "./hero.css"

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-text">
                    <h1>Мои любимые Extreme Metal группы</h1>
                    <p>Метал — мой лучший друг. Это жанр, полный бунтарства и неподчинения системе, а когда речь заходит о его более тяжелых формах — настоящего оккультизма, экстремизма, мизантропии и чистейшего нигилизма. Ниже я расскажу про свои любимые группы в трёх лучших поджанрах.</p>
                </div>
                <img src="SW.webp" alt="" className="hero-pic"/>
            </div>
        </>
    )
}

export default Hero