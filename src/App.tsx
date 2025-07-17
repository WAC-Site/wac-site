import './App.css';

export default function Home() {
    return (
         <section className="section">
      <div className="container">
        <div className="images">
          <figure className="image is-128x128 mb-5">
          <img src="https://media.discordapp.net/attachments/1353412285993062460/1388144110585516143/sticky.png.png?ex=68799eb2&is=68784d32&hm=fd4556872aca309017a1dbc38e8a7681707ee8ac40db3dc16069b5ce22a8a3d3&=" alt="site-image-1" />
        </figure>
        <figure className="image is-128x128 mb-5">
          <img src="https://cdn.discordapp.com/attachments/1353412285993062460/1388144110883438743/chess.png?ex=68799eb2&is=68784d32&hm=ae526d0eb8067e1aa9fd3531669814f048f76fc9391dfb49861d6cb42185f193&" alt="site-image-2" />
        </figure>
        <figure className="image is-128x128 mb-5">
          <img src="https://cdn.discordapp.com/attachments/1353412285993062460/1388144111152005270/popcorn2.png?ex=68799eb2&is=68784d32&hm=8882b698718faeb084b48efb2beb7accf0806d28b3952839b49c00b044a203dd&" alt="site-image-3" />
        </figure>
        </div>
        <h1 className="title mb-4">Welcome to the WAC Site!</h1>
        <p className="subtitle mb-5">This is the WAC site for Windows Animations!</p>
      <h2 className="title p-4">What is WAC?</h2>
      <p className="subtitle mb-4">WAC stands for Windows Animation Community. It is a community where people make stories, animations about Windows OSes.</p>
      <h2 className="title mb-4">Series to watch!</h2>
      <p className="subtitle mb-4">Here are some recommended series to watch! Definitely watch them :)</p>
      <ul className="list">
        <li className="list-item">
          <a href="https://www.youtube.com/watch?v=39_9qRI-xi0&list=PLxZprgMRn1dLeEGg7TiWmz42Qhf9Xi7zJ">Windows 8.1 And The Trouble In Bliss</a>
        </li>
        <li className="list-item">
          <a href="https://www.youtube.com/watch?v=0zaUXku15mE&list=PLadNJ4UaIf9pXQ_-hv3xMkZlokHAa1pcU">Windows 7 and the chaos in the afterlife</a>
        </li>
        <li className="list-item">
          <a href="https://www.youtube.com/watch?v=SBV08FfV5DU&pp=ygUSd2luZG93cyB2aXN0YSBkaWVz">Windows Vista Dies</a>
        </li>
        <li className="list-item">
          <a href="https://www.youtube.com/watch?v=pLYrHwLACFM&list=PLvVW-izAXK8948EzhNCbLvhpGR_B9JyYg&index=4&pp=iAQB">Windows 98 Dies</a>
        </li>
        <li className="list-item">
          <a href="https://www.youtube.com/watch?v=JRS-dbwSkf0&list=PLdNrojDkI21FLK271NjBsghpKdOuVIMLd&pp=gAQB">Windows XP And The Chaos in Bliss</a>
        </li>
        <li className="list-item">
          <a href="https://www.youtube.com/watch?v=oiglhaQ1dtg&list=PLrbJqOKaKI1CMFvfvBU-66y31Pp_QVoRV">Windows: Search and Death</a>
        </li>
        <li className="list-item mb-5">
          <a href="https://www.youtube.com/watch?v=oLmAzrYJbis&list=PLSzEmMnjb_gonK5vv4tg841pCnuZy16Cq">Windows: The Infection</a>
      </li>
        <p className="subtitle">Credits to the all creators of the series :)</p>
      </ul>
    </div>
  </section>
    )
}

