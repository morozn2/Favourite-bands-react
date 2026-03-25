import "./genre-name.css"
import { useState } from "react"

export function GenreName({ genreName, genreNameStyle }) {

    const [isClicked, setClick] = useState(false);
    const currentEmoji = isClicked ? "⛧" : "☠"

    function emojiClicked() {
        setClick(!isClicked);
    }

    return (
        <div className="genre-name-box">
            <div className="emoji-box">
                <button className="emoji-left" onClick={emojiClicked}>{currentEmoji}</button>
                <button className="emoji-left" onClick={emojiClicked}>{currentEmoji}</button>
                <button className="emoji-left" onClick={emojiClicked}>{currentEmoji}</button>
            </div>
            <h2 className={genreNameStyle}>{genreName}</h2>
            <div className="emoji-box">
                <button className="emoji-right" onClick={emojiClicked}>{currentEmoji}</button>
                <button className="emoji-right" onClick={emojiClicked}>{currentEmoji}</button>
                <button className="emoji-right" onClick={emojiClicked}>{currentEmoji}</button>
            </div>
        </div>
    )
}