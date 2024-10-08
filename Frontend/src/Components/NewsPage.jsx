import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './Navbar';  
import NewsCard from './NewsCard';

// function to format dates for API requests
const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};

const NewsPage = () => {
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('india');

    // Define date range for the news
    const currentDate = new Date();
    const threeDaysAgo = new Date(currentDate);
    threeDaysAgo.setDate(currentDate.getDate() - 3);

    // Fetch news headlines based on the selected category
    const fetchNews = async (category) => {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything', {
                params: {
                    q: category,
                    sortBy: 'publishedAt',
                    from: formatDate(threeDaysAgo),
                    to: formatDate(currentDate),
                    domains: 'thehindu.com,indiatimes.com,ndtv.com,financialexpress.com,business-standard.com,indianexpress.com,livemint.com,news18.com,zeenews.india.com,timesofindia.indiatimes.com,aajtak.in,abplive.com,amarujala.com,jagran.com,punjabkesari.in,tv9bharatvarsh.com,indiatvnews.com,republicworld.com,etbrandequity.com,dharmakshetra.com,naidunia.com',
                   apiKey: import.meta.env.NEWS_API_KEY // Use the API key from the .env file
                }
            });
            setHeadlines(response.data.articles.slice(0, 10)); // Fetch top 10 headlines
        } catch (err) {
            setError('Failed to fetch news');
        }
    };

    // Get the category from URL parameters
    const queryParams = new URLSearchParams(window.location.search);
    const category = queryParams.get('category');

    useEffect(() => {
        if (category) {
            fetchNews(category); // Fetch news based on the category
        }
    }, [category]);

    return (
        <div className="min-h-screen bg-gray-100 font-roboto">
            <NavBar />

            {/* Main content area */}
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold border-l-4 border-[#4CAF50] rounded-lg mb-5">Latest News Headlines</h1>

                {/* News cards display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {error ? (
                        <div className="text-red-600 font-semibold">{error}</div>
                    ) : (
                        headlines.map((article, index) => (
                            <NewsCard
                                key={index}
                                title={article.title}
                                description={article.description}
                                source={article.source.name}
                                publishedAt={article.publishedAt}
                                url={article.url}
                                urlToImage={article.urlToImage}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
