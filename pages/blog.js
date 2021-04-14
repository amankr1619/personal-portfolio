import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'


function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'aa7781zb',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <Layout>
        <div>
            <section id="banner" className="style2">
                <div className="inner">
                    <header className="major">
                        <h1>Blog</h1>
                    </header>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet nullam consequat<br />
                        sed veroeros. tempus adipiscing nulla.</p>
                    </div>
                </div>
            </section>
            <div id="main">
                <Head>
                    <title>Aman's Projects</title>
                    <meta name="description" content="Projects" />
                </Head>

                <section id="two" className="spotlights">
                    {mappedPosts.length ? mappedPosts.map((p, index) => ( 
                        <section>
                            <div class = 'image' onClick={() => router.push(`/post/${p.slug.current}`)} key={index}>
                                <a ><img src={p.mainImage} alt="" /></a>
                            </div>

                            <div className="content">
                                <div className="inner">                      
                                    <header className="major">
                                        <h3>{p.title}</h3>
                                    </header>
                                    <p>{p.excerpt}</p>                      
                                    <ul className="actions">
                                        <li onClick={() => router.push(`/post/${p.slug.current}`)} key={index}><a className="button">Read more</a></li>
                                    </ul> 
                                </div>
                            </div>

                        </section>
                    )) : <>No Posts Yet</>}                             
                </section>
            </div>
        </div>
    </Layout>

  );
}

export const getServerSideProps = async pageContext => {
    const query = encodeURIComponent('*[ _type == "post" ]');
    const url = `https://aa7781zb.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());
  
    if (!result.result || !result.result.length) {
      return {
        props: {
          posts: [],
        }
      }
    } else {
      return {
        props: {
          posts: result.result,
        }
      }
    }
  };

  export default Home
