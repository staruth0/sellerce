import React, { useEffect, useState } from 'react';
import './popularCategory.css';
import { Link } from 'react-router-dom';

const PopularCategory = ({ blurBackground }) => {
  const [categories, setCategories] = useState(null);

  return (
    <div
      className={
        blurBackground
          ? 'blur-background main-popular-category-container'
          : 'main-popular-category-container'
      }
    >
      <h1 className="popular-heading">Popular on iStore</h1>
      <div className="popular-category-container">
        <div className="first-level">
          <div className="watch-category">
            <ul>
              <li className="cateogry-name-section">
                <svg
                  className="apple-logo"
                  width="52"
                  height="56"
                  viewBox="0 0 52 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_204_100)">
                    <path d="M50.1958 43.3617C49.2884 45.2832 48.2144 47.052 46.97 48.6782C45.2737 50.8951 43.8849 52.4296 42.8145 53.2818C41.1553 54.6805 39.3776 55.3968 37.474 55.4376C36.1073 55.4376 34.4592 55.0811 32.5408 54.358C30.616 53.6382 28.8472 53.2818 27.2298 53.2818C25.5336 53.2818 23.7144 53.6382 21.7685 54.358C19.8197 55.0811 18.2497 55.4579 17.0494 55.4953C15.2239 55.5666 13.4043 54.8299 11.5881 53.2818C10.4289 52.3549 8.9789 50.7661 7.24192 48.5152C5.37827 46.1116 3.8461 43.3243 2.64576 40.1467C1.36025 36.7144 0.71582 33.3907 0.71582 30.173C0.71582 26.487 1.58468 23.308 3.325 20.644C4.69274 18.5041 6.51231 16.8162 8.78965 15.577C11.067 14.3379 13.5277 13.7064 16.1776 13.666C17.6275 13.666 19.529 14.0771 21.8918 14.8851C24.2481 15.6958 25.761 16.107 26.4243 16.107C26.9202 16.107 28.6009 15.6262 31.4501 14.6678C34.1444 13.779 36.4184 13.411 38.2813 13.556C43.3293 13.9294 47.1218 15.7536 49.644 19.0399C45.1293 21.5474 42.896 25.0595 42.9405 29.5649C42.9812 33.0743 44.37 35.9946 47.0996 38.3134C48.3366 39.3896 49.718 40.2214 51.255 40.8121C50.9217 41.6982 50.5699 42.5469 50.1958 43.3617ZM38.6184 1.60031C38.6184 4.35094 37.5221 6.91919 35.337 9.29634C32.7 12.1223 29.5105 13.7553 26.0517 13.4976C26.0076 13.1676 25.9821 12.8203 25.9821 12.4554C25.9821 9.81475 27.2361 6.98879 29.4631 4.67818C30.5749 3.50828 31.9889 2.53552 33.7037 1.75953C35.4148 0.995126 37.0332 0.572392 38.5554 0.5C38.5999 0.867716 38.6184 1.23549 38.6184 1.60031Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_100">
                      <rect
                        width="50.5392"
                        height="55"
                        transform="translate(0.71582 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>{' '}
                WATCH
              </li>
              <li className="cateogry-name-section-large">Apple Watch</li>
              <li className="shop-category-button">
                <Link
                  to={`/${'watch'.toLowerCase().replace(/\s/g, '')}`}
                  className="showcase-link shop-watch-category"
                >
                  SHOP NOW
                </Link>
              </li>
            </ul>
          </div>
          <div className="iphone-homepod-category">
            <div className="iphone-category">
              <ul>
                <li className="cateogry-name-section">
                  <svg
                    className="apple-logo"
                    width="52"
                    height="56"
                    viewBox="0 0 52 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_204_100)">
                      <path d="M50.1958 43.3617C49.2884 45.2832 48.2144 47.052 46.97 48.6782C45.2737 50.8951 43.8849 52.4296 42.8145 53.2818C41.1553 54.6805 39.3776 55.3968 37.474 55.4376C36.1073 55.4376 34.4592 55.0811 32.5408 54.358C30.616 53.6382 28.8472 53.2818 27.2298 53.2818C25.5336 53.2818 23.7144 53.6382 21.7685 54.358C19.8197 55.0811 18.2497 55.4579 17.0494 55.4953C15.2239 55.5666 13.4043 54.8299 11.5881 53.2818C10.4289 52.3549 8.9789 50.7661 7.24192 48.5152C5.37827 46.1116 3.8461 43.3243 2.64576 40.1467C1.36025 36.7144 0.71582 33.3907 0.71582 30.173C0.71582 26.487 1.58468 23.308 3.325 20.644C4.69274 18.5041 6.51231 16.8162 8.78965 15.577C11.067 14.3379 13.5277 13.7064 16.1776 13.666C17.6275 13.666 19.529 14.0771 21.8918 14.8851C24.2481 15.6958 25.761 16.107 26.4243 16.107C26.9202 16.107 28.6009 15.6262 31.4501 14.6678C34.1444 13.779 36.4184 13.411 38.2813 13.556C43.3293 13.9294 47.1218 15.7536 49.644 19.0399C45.1293 21.5474 42.896 25.0595 42.9405 29.5649C42.9812 33.0743 44.37 35.9946 47.0996 38.3134C48.3366 39.3896 49.718 40.2214 51.255 40.8121C50.9217 41.6982 50.5699 42.5469 50.1958 43.3617ZM38.6184 1.60031C38.6184 4.35094 37.5221 6.91919 35.337 9.29634C32.7 12.1223 29.5105 13.7553 26.0517 13.4976C26.0076 13.1676 25.9821 12.8203 25.9821 12.4554C25.9821 9.81475 27.2361 6.98879 29.4631 4.67818C30.5749 3.50828 31.9889 2.53552 33.7037 1.75953C35.4148 0.995126 37.0332 0.572392 38.5554 0.5C38.5999 0.867716 38.6184 1.23549 38.6184 1.60031Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_204_100">
                        <rect
                          width="50.5392"
                          height="55"
                          transform="translate(0.71582 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  iPHONE
                </li>
                <li className="cateogry-name-section-large">Apple iPhone</li>
                <li className="shop-category-button">
                  <Link
                    to={`/${'phone'.toLowerCase().replace(/\s/g, '')}`}
                    className="showcase-link shop-watch-category"
                  >
                    SHOP NOW
                  </Link>
                </li>
              </ul>
            </div>
            <div className="homepod-category">
              <ul>
                <li className="cateogry-name-section">
                  <svg
                    className="apple-logo"
                    width="52"
                    height="56"
                    viewBox="0 0 52 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_204_100)">
                      <path d="M50.1958 43.3617C49.2884 45.2832 48.2144 47.052 46.97 48.6782C45.2737 50.8951 43.8849 52.4296 42.8145 53.2818C41.1553 54.6805 39.3776 55.3968 37.474 55.4376C36.1073 55.4376 34.4592 55.0811 32.5408 54.358C30.616 53.6382 28.8472 53.2818 27.2298 53.2818C25.5336 53.2818 23.7144 53.6382 21.7685 54.358C19.8197 55.0811 18.2497 55.4579 17.0494 55.4953C15.2239 55.5666 13.4043 54.8299 11.5881 53.2818C10.4289 52.3549 8.9789 50.7661 7.24192 48.5152C5.37827 46.1116 3.8461 43.3243 2.64576 40.1467C1.36025 36.7144 0.71582 33.3907 0.71582 30.173C0.71582 26.487 1.58468 23.308 3.325 20.644C4.69274 18.5041 6.51231 16.8162 8.78965 15.577C11.067 14.3379 13.5277 13.7064 16.1776 13.666C17.6275 13.666 19.529 14.0771 21.8918 14.8851C24.2481 15.6958 25.761 16.107 26.4243 16.107C26.9202 16.107 28.6009 15.6262 31.4501 14.6678C34.1444 13.779 36.4184 13.411 38.2813 13.556C43.3293 13.9294 47.1218 15.7536 49.644 19.0399C45.1293 21.5474 42.896 25.0595 42.9405 29.5649C42.9812 33.0743 44.37 35.9946 47.0996 38.3134C48.3366 39.3896 49.718 40.2214 51.255 40.8121C50.9217 41.6982 50.5699 42.5469 50.1958 43.3617ZM38.6184 1.60031C38.6184 4.35094 37.5221 6.91919 35.337 9.29634C32.7 12.1223 29.5105 13.7553 26.0517 13.4976C26.0076 13.1676 25.9821 12.8203 25.9821 12.4554C25.9821 9.81475 27.2361 6.98879 29.4631 4.67818C30.5749 3.50828 31.9889 2.53552 33.7037 1.75953C35.4148 0.995126 37.0332 0.572392 38.5554 0.5C38.5999 0.867716 38.6184 1.23549 38.6184 1.60031Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_204_100">
                        <rect
                          width="50.5392"
                          height="55"
                          transform="translate(0.71582 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  TV & HOME
                </li>
                <li className="shop-category-button">
                  <Link
                    to={`/${'tvandhome'.toLowerCase().replace(/\s/g, '')}`}
                    className="showcase-link shop-watch-category"
                  >
                    SHOP NOW
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="second-level">
          <div className="macbook-category iphone-category">
            <ul>
              <li className="cateogry-name-section">
                <svg
                  className="apple-logo"
                  width="52"
                  height="56"
                  viewBox="0 0 52 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_204_100)">
                    <path d="M50.1958 43.3617C49.2884 45.2832 48.2144 47.052 46.97 48.6782C45.2737 50.8951 43.8849 52.4296 42.8145 53.2818C41.1553 54.6805 39.3776 55.3968 37.474 55.4376C36.1073 55.4376 34.4592 55.0811 32.5408 54.358C30.616 53.6382 28.8472 53.2818 27.2298 53.2818C25.5336 53.2818 23.7144 53.6382 21.7685 54.358C19.8197 55.0811 18.2497 55.4579 17.0494 55.4953C15.2239 55.5666 13.4043 54.8299 11.5881 53.2818C10.4289 52.3549 8.9789 50.7661 7.24192 48.5152C5.37827 46.1116 3.8461 43.3243 2.64576 40.1467C1.36025 36.7144 0.71582 33.3907 0.71582 30.173C0.71582 26.487 1.58468 23.308 3.325 20.644C4.69274 18.5041 6.51231 16.8162 8.78965 15.577C11.067 14.3379 13.5277 13.7064 16.1776 13.666C17.6275 13.666 19.529 14.0771 21.8918 14.8851C24.2481 15.6958 25.761 16.107 26.4243 16.107C26.9202 16.107 28.6009 15.6262 31.4501 14.6678C34.1444 13.779 36.4184 13.411 38.2813 13.556C43.3293 13.9294 47.1218 15.7536 49.644 19.0399C45.1293 21.5474 42.896 25.0595 42.9405 29.5649C42.9812 33.0743 44.37 35.9946 47.0996 38.3134C48.3366 39.3896 49.718 40.2214 51.255 40.8121C50.9217 41.6982 50.5699 42.5469 50.1958 43.3617ZM38.6184 1.60031C38.6184 4.35094 37.5221 6.91919 35.337 9.29634C32.7 12.1223 29.5105 13.7553 26.0517 13.4976C26.0076 13.1676 25.9821 12.8203 25.9821 12.4554C25.9821 9.81475 27.2361 6.98879 29.4631 4.67818C30.5749 3.50828 31.9889 2.53552 33.7037 1.75953C35.4148 0.995126 37.0332 0.572392 38.5554 0.5C38.5999 0.867716 38.6184 1.23549 38.6184 1.60031Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_100">
                      <rect
                        width="50.5392"
                        height="55"
                        transform="translate(0.71582 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                MACBOOK
              </li>
              <li className="cateogry-name-section-large">Apple MACBOOK</li>
              <li>Prestige. Power. Prestine</li>
              <li className="shop-category-button">
                <Link
                  to={`/${'macbook'.toLowerCase().replace(/\s/g, '')}`}
                  className="showcase-link shop-watch-category"
                >
                  SHOP NOW
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="third-level">
          <div className="ipad-category">
            <ul>
              <li className="cateogry-name-section">
                <svg
                  className="apple-logo"
                  width="52"
                  height="56"
                  viewBox="0 0 52 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_204_100)">
                    <path d="M50.1958 43.3617C49.2884 45.2832 48.2144 47.052 46.97 48.6782C45.2737 50.8951 43.8849 52.4296 42.8145 53.2818C41.1553 54.6805 39.3776 55.3968 37.474 55.4376C36.1073 55.4376 34.4592 55.0811 32.5408 54.358C30.616 53.6382 28.8472 53.2818 27.2298 53.2818C25.5336 53.2818 23.7144 53.6382 21.7685 54.358C19.8197 55.0811 18.2497 55.4579 17.0494 55.4953C15.2239 55.5666 13.4043 54.8299 11.5881 53.2818C10.4289 52.3549 8.9789 50.7661 7.24192 48.5152C5.37827 46.1116 3.8461 43.3243 2.64576 40.1467C1.36025 36.7144 0.71582 33.3907 0.71582 30.173C0.71582 26.487 1.58468 23.308 3.325 20.644C4.69274 18.5041 6.51231 16.8162 8.78965 15.577C11.067 14.3379 13.5277 13.7064 16.1776 13.666C17.6275 13.666 19.529 14.0771 21.8918 14.8851C24.2481 15.6958 25.761 16.107 26.4243 16.107C26.9202 16.107 28.6009 15.6262 31.4501 14.6678C34.1444 13.779 36.4184 13.411 38.2813 13.556C43.3293 13.9294 47.1218 15.7536 49.644 19.0399C45.1293 21.5474 42.896 25.0595 42.9405 29.5649C42.9812 33.0743 44.37 35.9946 47.0996 38.3134C48.3366 39.3896 49.718 40.2214 51.255 40.8121C50.9217 41.6982 50.5699 42.5469 50.1958 43.3617ZM38.6184 1.60031C38.6184 4.35094 37.5221 6.91919 35.337 9.29634C32.7 12.1223 29.5105 13.7553 26.0517 13.4976C26.0076 13.1676 25.9821 12.8203 25.9821 12.4554C25.9821 9.81475 27.2361 6.98879 29.4631 4.67818C30.5749 3.50828 31.9889 2.53552 33.7037 1.75953C35.4148 0.995126 37.0332 0.572392 38.5554 0.5C38.5999 0.867716 38.6184 1.23549 38.6184 1.60031Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_100">
                      <rect
                        width="50.5392"
                        height="55"
                        transform="translate(0.71582 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                iPAD
              </li>
              <li className="cateogry-name-section-large">Apple iPAD</li>
              <li className="shop-category-button">
                <Link
                  to={`/${'ipad'.toLowerCase().replace(/\s/g, '')}`}
                  className="showcase-link shop-watch-category"
                >
                  SHOP NOW
                </Link>
              </li>
            </ul>
          </div>
          <div className="airpod-category">
            <img
              src={require('../../../assets/images/UI-images/airpods_max__cat.png')}
              alt="airpod"
            />
            <ul>
              <li className="cateogry-name-section">
                <svg
                  className="apple-logo"
                  width="52"
                  height="56"
                  viewBox="0 0 52 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_204_100)">
                    <path d="M50.1958 43.3617C49.2884 45.2832 48.2144 47.052 46.97 48.6782C45.2737 50.8951 43.8849 52.4296 42.8145 53.2818C41.1553 54.6805 39.3776 55.3968 37.474 55.4376C36.1073 55.4376 34.4592 55.0811 32.5408 54.358C30.616 53.6382 28.8472 53.2818 27.2298 53.2818C25.5336 53.2818 23.7144 53.6382 21.7685 54.358C19.8197 55.0811 18.2497 55.4579 17.0494 55.4953C15.2239 55.5666 13.4043 54.8299 11.5881 53.2818C10.4289 52.3549 8.9789 50.7661 7.24192 48.5152C5.37827 46.1116 3.8461 43.3243 2.64576 40.1467C1.36025 36.7144 0.71582 33.3907 0.71582 30.173C0.71582 26.487 1.58468 23.308 3.325 20.644C4.69274 18.5041 6.51231 16.8162 8.78965 15.577C11.067 14.3379 13.5277 13.7064 16.1776 13.666C17.6275 13.666 19.529 14.0771 21.8918 14.8851C24.2481 15.6958 25.761 16.107 26.4243 16.107C26.9202 16.107 28.6009 15.6262 31.4501 14.6678C34.1444 13.779 36.4184 13.411 38.2813 13.556C43.3293 13.9294 47.1218 15.7536 49.644 19.0399C45.1293 21.5474 42.896 25.0595 42.9405 29.5649C42.9812 33.0743 44.37 35.9946 47.0996 38.3134C48.3366 39.3896 49.718 40.2214 51.255 40.8121C50.9217 41.6982 50.5699 42.5469 50.1958 43.3617ZM38.6184 1.60031C38.6184 4.35094 37.5221 6.91919 35.337 9.29634C32.7 12.1223 29.5105 13.7553 26.0517 13.4976C26.0076 13.1676 25.9821 12.8203 25.9821 12.4554C25.9821 9.81475 27.2361 6.98879 29.4631 4.67818C30.5749 3.50828 31.9889 2.53552 33.7037 1.75953C35.4148 0.995126 37.0332 0.572392 38.5554 0.5C38.5999 0.867716 38.6184 1.23549 38.6184 1.60031Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_100">
                      <rect
                        width="50.5392"
                        height="55"
                        transform="translate(0.71582 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                AIRPODS
              </li>
              <li className="cateogry-name-section-large">Apple Airpods</li>
              <li className="shop-category-button">
                <Link
                  to={`/${'airpods'.toLowerCase().replace(/\s/g, '')}`}
                  className="showcase-link shop-watch-category"
                >
                  SHOP NOW
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
