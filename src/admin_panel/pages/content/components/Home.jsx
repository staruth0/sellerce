import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../../../commons/HeaderBtn';
import performFetchDelete from '../../../utils/Fetch/PerformFetchDelete';
// images
import dots from '../../../assets/icons/horizontal-dots.png';

const HomeContent = () => {
  // const [headerSlides, setHeaderSlides] = useState([
  //   {
  //     id: 1,
  //     name: 'Apple Watch Series 9',
  //     url: 'url to apple watch',
  //     description: 'The Next Level Adventure',
  //     position: '1',
  //     image:
  //       'https://www.apple.com/v/watch/bk/images/overview/series-9/tile_s9_avail__c104b8nuoec2_large.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'iPad Pro',
  //     url: 'url to iPad Pro',
  //     description: 'Change your life with just a click😂',
  //     position: '2',
  //     image:
  //       'https://www.apple.com/v/ipad/home/ci/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'MacBook Pro',
  //     url: 'url to macbook',
  //     description: 'Macbook na book',
  //     position: '3',
  //     image:
  //       'https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg',
  //   },
  // ]);

  const [headerSlides, setHeaderSlides] = useState(null);

  useEffect(() => {
    const api = 'https://appleproductsbackend.vercel.app/v1/hero';

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setHeaderSlides(data);
      })
      .catch((err) => console.log('Error', err));
  }, []);

  const [deleteId, setDeleteId] = useState(null);
  const [display, setDisplay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleActiveIndex = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };

  const handleClickOutside = () => {
    if (Number.isInteger(activeIndex)) {
      setActiveIndex(null);
    }
  };

  const performDelete = () => {
    performFetchDelete(`v1/hero/${deleteId}`);
    alert('You deleted the header with id: ' + deleteId);
    setHeaderSlides(headerSlides.filter((slides) => slides.id !== deleteId));
    closeDisplay();
  };

  const closeDisplay = () => {
    setDisplay(false);
  };

  return (
    <>
      <HeaderBtn
        text="Content Management - Home"
        url="add"
        urlText="Add Header Slide"
        className="btw"
      />
      {/* header slides */}
      <div className="container" onClick={handleClickOutside}>
        <div className="admin-header-container">
          {headerSlides ? (
            headerSlides.length === 0 ? (
              <h2 style={{ textAlign: 'center' }}>
                No Header Slides Found!🚨🚨🚨
              </h2>
            ) : (
              headerSlides.map((slide, index) => (
                <div className="admin-header-box" key={index}>
                  <div className="img">
                    <img src={slide.image} alt="" />
                  </div>
                  <div className="content">
                    <h3>{slide.product_name}</h3>
                    <p>{slide.category_name}</p>
                    <p>{slide.description}</p>
                    <p>Position: {slide.slide_position}</p>
                    {/* <Link to={`${slide.product_name.toLowerCase().replace(/\s/g, '')}`}>pro
                    </Link> */}
                    <div className="buttons">
                      <button
                        className="manage-icon"
                        onClick={() => {
                          toggleActiveIndex(index);
                        }}
                      >
                        <img src={dots} alt="dots icon" />
                      </button>
                      <div
                        className={`${index === activeIndex ? 'active' : ''}`}
                      >
                        <Link to={`edit/${slide.id}`}>Edit</Link>
                        <button
                          className="delete"
                          onClick={() => {
                            setDeleteId(slide.id);
                            setDisplay(true);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          ) : (
            <p>Hero Slides Loading...</p>
          )}
        </div>
        <div className={`confirm-delete ${display === true ? 'active' : ''}`}>
          <div>
            <p>Are you sure you want to delete this header slide?</p>
            <div className="btn-container">
              <button
                className="btn danger"
                onClick={() => {
                  performDelete();
                  setActiveIndex(null);
                }}
              >
                Delete
              </button>
              <button
                className="btn"
                onClick={() => {
                  closeDisplay();
                  setActiveIndex(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
