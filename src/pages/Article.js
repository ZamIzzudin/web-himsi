import { Container, Pagination } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import api from '../utils/api'
import { filterData } from '../utils/filterArticle'

import ArticleItem from "../components/ArticleItem"
import icon from "../assets/img/ArticlePage/menu.png"
import { ReactComponent as Search } from "../assets/icons/search.svg"

import "../styles/pages/Article.css"

const Article = () => {
  const [articleList, setArticleList] = useState({ berita: [] })

  const [showKategoriList, setShowKategoriList] = useState(false);

  const [checkboxs, setCheckboxs] = useState(filterData)
  const [page, setPage] = useState(1)

  const handleChangeCheckBoxs = id => {
    setCheckboxs(prev => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item };
        }
      })
    })
  }

  const renderFilter = () => {
    return checkboxs.map((item) => {
      if (item.checked) {
        return (
          <span onClick={() => handleChangeCheckBoxs(item.id)} className='selected-category' key={item.id}>
            {item.namaFilter} X
          </span>
        );
      } else {
        return null;
      }
    })
  }

  // Get data from API
  async function getDataArticle(page) {
    const data = await api.getArticle(page)
    setArticleList(data)
  }

  useEffect(() => {
    getDataArticle(page)
  }, [page])

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // Pagination
  let items = [];
  for (let number = 1; number <= articleList.total / 2; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <div className="article-header">
        <div className="filter-category">
          <div className="search-bar-viewpoint">
            <div className="category-display">
              <div className="search-bar-display">
                <Search />
                {renderFilter()}
              </div>
              <input className="search-bar-input" type="search" placeholder='Search' />
            </div>
            <button className="search-bar-button">Search</button>
          </div>

          <button className='filter-button' onClick={() => setShowKategoriList(!showKategoriList)}>
            <img className='menu-icon' src={icon} alt="filter-icon" />
          </button>

        </div>
        <h1 className="article-header-title">Article</h1>
      </div>

      {/* Karegori Filter Hide */}
      {showKategoriList && (
        <div className='category-container'>
          <h5>Kategori</h5>
          <div>
            {checkboxs.map((category) => {
              return (
                <div className='wrapper-list' key={category.id}>
                  <form action="">
                    <input type="checkbox" checked={category.checked} id={category.id} onClick={() => handleChangeCheckBoxs(category.id)} />
                    <label htmlFor="">{category.namaFilter}</label>
                  </form>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div className="article-list">
        {articleList?.berita.map((article, index) => (
          <ArticleItem article={article} index={index} />
        ))}
      </div>

      <div className="pagination">
        <Pagination className="pagination-items">{items}</Pagination>
      </div>
    </Container>
  )
}

export default Article;