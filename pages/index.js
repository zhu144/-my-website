import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  // 从后端获取图片数据
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('获取图片失败:', error);
      }
    }
    
    fetchImages();
  }, []);

  function showMessage() {
    setMessage('Hello, World!');
  }

  return (
    <div>
      <Head>
        <title>我的网页</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <main>
        <div className="container">
          <h1>欢迎访问我的网页！</h1>
          <p>无需安装任何软件，直接打开浏览器即可查看。</p>
          <button className="button" onClick={showMessage}>点击试试</button>
          <p>{message}</p>
          
          <h2>图片展示</h2>
          <div className="image-gallery">
            {images.map(image => (
              <div key={image.id} className="image-card">
                <img src={image.url} alt={image.title} />
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        /* CSS样式 */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          background-color: #f0f0f0;
        }
        main {
          display: flex;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
        }
        .container {
          text-align: center;
          max-width: 1200px;
        }
        .button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px 0;
        }
        .image-gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }
        .image-card {
          width: 300px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .image-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .image-card h3 {
          margin: 10px;
        }
        .image-card p {
          margin: 10px;
          color: #666;
        }
      `}</style>
    </div>
  );
} 