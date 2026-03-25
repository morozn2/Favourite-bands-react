import Header from './components/header'
import Hero from './components/hero'
import { Band } from './components/band'
import { GenreName } from './components/genre-name'
import { About } from './components/about'

  function App() {

    return (
      <>
        <Header />
        <Hero />

        <GenreName genreName="Black Metal" genreNameStyle="genre-name-black-metal" />

        <Band bandStyle="band-gold" bandPhotoSrc="NM.jpg" bandNameGenre="band-name-black-metal" bandName="1. Nokturnal Mortum"
          bandLogoSrc="NM-logo.jpg" bandLogoSize="logo-small" bandGenre="Pagan / Symphonic / Melodic / Folk Metal"
          bandDesc="Украинская группа из Харькова, начинавшая в жанре death metal под названиями Suppuration и Crystaline Darkness." />

        <Band bandStyle="band-silver" bandPhotoSrc="LL.jpg" bandNameGenre="band-name-black-metal" bandName="2. Lifelover"
          bandLogoSrc="LL-logo.jpg" bandLogoSize="logo-big" bandGenre="DSBM + Post-Punk"
          bandDesc="Атмосферный depressive rock вперемешку с тяжелыми black metal-риффами из Стокгольма, сопровождающийся красивыми мелодичными партиями клавиш." />

        <Band bandStyle="band-bronze" bandPhotoSrc="LoC.jpg" bandNameGenre="band-name-black-metal" bandName="3. Lurker of Chalice"
          bandLogoSrc="LoC-logo.jpg" bandLogoSize="logo-big" bandGenre="Atmospheric Black Metal"
          bandDesc="Lurker of Chalice — музыкальный проект создателя группы Leviathan Wrest'а (Джеффа Уайтхеда) из Сан-Франциско." />

        <GenreName genreName="Death Metal" genreNameStyle="genre-name-death-metal" />

        <Band bandStyle="band-gold" bandPhotoSrc="SF.jpg" bandNameGenre="band-name-death-metal" bandName="1. SepticFlesh"
          bandLogoSrc="SF-logo.png" bandLogoSize="logo-small" bandGenre="Symphonic / Death / Gothic / Death Doom Metal"
          bandDesc="Septicflesh (ранее — Septic Flesh) — греческая symphonic death metal группа из Афин." />

        <Band bandStyle="band-silver" bandPhotoSrc="N.jpg" bandNameGenre="band-name-death-metal" bandName="2. Nile"
          bandLogoSrc="N-logo.png" bandLogoSize="logo-small" bandGenre="Technical / Brutal Death Metal"
          bandDesc="Technical brutal death metal-группа из Гринвилла, Южная Каролина, сочиняющая музыку на тему египетской мифологии и истории." />

        <Band bandStyle="band-bronze" bandPhotoSrc="I.jpg" bandNameGenre="band-name-death-metal" bandName="3. Immolation"
          bandLogoSrc="I-logo.jpg" bandLogoSize="logo-small" bandGenre="Dissonant Death / Death Metal"
          bandDesc="Американская death-metal-группа из города Йонкерса, штат Нью-Йорк. Является одной из значимых дэт-метал групп США." />

          <About />
      </>
    )
  }

export default App