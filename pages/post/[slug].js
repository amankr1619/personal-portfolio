import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Date from '../../components/date'
import Head from "next/head"
import Layout from '../../components/Layout'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa'

const serializers = {
  types: {
    code: props => 
        <pre className = "codeBlockParent">
            <CopyToClipboard className = "codeBlockChild" text={props.node.code}><button><FaRegCopy /></button></CopyToClipboard>
            <SyntaxHighlighter style= {monokaiSublime} className="codeBlock" showLineNumbers language={props.node.language}>
              {props.node.code}
            </SyntaxHighlighter>
        </pre>
  }
}

const Post = ({ title, body, image, date }) => {

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'aa7781zb',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);


  
  return (
    <Layout>
    <Head>
        <title>Blog</title>
        <meta name="description" content="Elements Page" />
    </Head>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner blogCon">
          <header className="major">
              <h1>{title}</h1>
          </header>
          <span><Date dateString={date} /> </span>
          <hr />
              <div>
                <span className="image fit" >{imageUrl && <img src={imageUrl} />}</span>
              </div>
              <div className="image fit custom">
                <BlockContent imageOptions={{fit: "max"}}  projectId="aa7781zb" dataset="production" serializers={serializers} blocks={body} />
              </div>
            </div>
      </section>
    </div>
    </Layout>
  );
};
export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://aa7781zb.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        date: post._createdAt
      }
    }
  }
};

export default Post;
