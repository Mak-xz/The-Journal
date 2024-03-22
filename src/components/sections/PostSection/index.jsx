import { PostCard } from "./PostCard";
import styles from "./style.module.scss";

export const PostSection = ({ title, postList }) => {
   return (
      <section className={styles.postSection}>
         <div className="container">
            <h2 className="title one">{title}</h2>
            <ul>
               {postList.map((post) => (
                  <PostCard key={post.id} post={post} />
               ))}
            </ul>
         </div>
      </section>
   );
};

// uma sessão onde fica os cards de postagem que recebe como prop: "title" e "postList" .
//postList recebe um ".map" que cria novos cards, e a tag "PostCard" recebe uma chave e uma prop "post"