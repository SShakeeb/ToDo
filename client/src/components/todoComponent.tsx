import React, { ReactElement } from 'react';
import { TodoApiData } from "../types"
type ArticleProps = Readonly<{
    article: TodoApiData;
    // onClose: () => void;
    // callback?: () => void;
  }>;
const Article = ({ article } : ArticleProps) : ReactElement => {
    const {
       data 
    } = article;
    console.log("i am in pres component:", article);
    const listItems = article.data.map(
        (element) => {
            console.log("I am in map:", element.name)
            return (
                // <article>
                //     <header>
                //         <h1>{element.name}</h1>
                //     </header>
                //     <main>
                //         <p>{element.description}</p>
                //     </main>
                // </article>
                <ul>
                    <li>{element.name}</li>
                    <li>{element.description}</li>
                    <li>{element.status}</li>
                </ul>
            );
        }
    )
    return (
        <article>
            {listItems}
        </article>
    )
};

export default Article;