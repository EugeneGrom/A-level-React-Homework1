import React from "react";

const Card = ({ title, imgSrc, children }) =>
    <li class="card">
        <img class="image_cards" src={imgSrc} alt="" />
        <h3>{title}</h3>
        <p>
            {children}
        </p>
        <a class="btn" href="#">Go</a>
    </li>

const Aside = ({id, children}) =>
    <aside id={id}>
        <p>{children}</p>
    </aside>

const Main = () => {
    return <main>
        <section>
            <article id="article">
                <p>
                    Where can I get some?
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there
                    isn't anything embarrassing hidden in the middle of text.
                </p>
                <h2>Our work</h2>
            </article>
            <ul class="text-cards">
                <Card title='Title One' imgSrc="square.jpg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </Card>
                <Card title='Title Two' imgSrc="square.jpg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                </Card>
                <Card title='Title Three' imgSrc="square.jpg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card>
                <Card title='Title Four' imgSrc="square.jpg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Card>
                <Card title='Title Five' imgSrc="square.jpg">
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </Card>
                <Card title='Title Six' imgSrc="square.jpg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </Card>
            </ul>
        </section>
        <Aside id='aside1'>Aside 1</Aside>
        <Aside id='aside2'>Aside 2</Aside>
    </main>
}

export default Main;