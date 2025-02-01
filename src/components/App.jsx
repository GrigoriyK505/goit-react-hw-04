import { ErrorMessage } from 'formik';
import s from './App.module.css'
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar'
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([])
  const [targetImage, setTargetImage] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if (!query) return;
    async function fetchArticles() {
      try {
        setError(true);
        const { results } = await fetchRequest(query, page);
        setArticles((prev) => [...prev, ...results])
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [query, page]);
  
  const onSubmit = () => {
    setQuery(newQuery);
    setPage(1);
  };

  const openModal = (imageUrl) => {
    setTargetImage(imageUrl);
    setModalIsOpen(true);
  };

  const modalIsClose = () => {
    setTargetImage(null);
    setModalIsOpen(false);
  };

  return (
    <section>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery openModal={openModal} />
      {articles.length > 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        isClose={modalIsClose}
        image={targetImage}
      />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </section>
  );
}

export default App
