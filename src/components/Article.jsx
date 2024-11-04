export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>Select an Article! </p>
      ) : (
        <section>
          <img src= "https://media.istockphoto.com/id/1388210236/photo/beach-front-with-shade-and-closed-umbrella-and-sand-no-person.jpg?s=612x612&w=0&k=20&c=CxgLDQleQ77-mEO1nEjTic3SISgrUkszMfqIOxqVXUc="/>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
