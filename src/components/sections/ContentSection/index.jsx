import styles from "./style.module.scss";

export const ContentSection = ({ post }) => {
   return post ? (
      <section className={styles.contentSection}>
         <div className="container sm">
            <article>
               <h1 className="title blog center">{post.title}</h1>
               <span className="paragraph bold center">{post.author}</span>
               <p className="paragraph center">{post.content}</p>
            </article>
         </div>
      </section>
   ) : null;
};

//uma sessão de conteúdo que pega a prop "post" e espera receber: title, author e content. irá receber esses 
// parametro em "PostPage". Esse componente todo é um ternário que só é renderizado se houver um "post"