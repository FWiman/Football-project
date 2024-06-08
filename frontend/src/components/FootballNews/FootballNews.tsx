import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FootballNews.module.css";

interface FootballNewsItem {
  id: number;
  title: string;
  description: string;
  published_at: string;
}

const FootballNews: React.FC = () => {
  const [news, setNews] = useState<FootballNewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/news");
        console.log("News data: ", response.data);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news: ", error);
        setError("Failed to fetch football news...");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }

  return (
    <div className={styles.footballNews}>
      <h1>Football News</h1>
      {news.map((item) => (
        <div key={item.id} className={styles.newsItem}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <small>{new Date(item.published_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default FootballNews;
