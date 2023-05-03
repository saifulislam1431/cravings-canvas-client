import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();


  return (
    <section className='myContainer flex items-center justify-center'>
      <div>
        <div className='mt-10 mb-5 text-center'>
          <Link to="/" className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</Link>
          <h1 className="capitalize text-5xl font-bold mt-3" style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Blogs</h1>
        </div>
        <div className='blog-content' ref={ref}>
          <div className="card w-full bg-accent bg-opacity-20 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Tell us the differences between uncontrolled and controlled components.</h2>
              <div className='flex items-center justify-around my-3'>
                <div>
                  <p className='font-medium text-success'>Uncontrolled components</p>
                  <ul className='list-disc mt-2 px-3'>
                    <li>Managed by component's own internal state</li>
                    <li>Data flows within the component</li>
                    <li>More difficult to debug</li>
                    <li>More complex code</li>
                  </ul>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p className='font-medium text-success'>Controlled components</p>
                  <ul className='list-disc mt-2 '>
                    <li>Managed by React state</li>
                    <li>Data flows from parent component to <br /> component</li>
                    <li>Easier  to debug</li>
                    <li>Less complex code</li>
                  </ul>
                </div>
              </div>


            </div>

          </div>

          <div className="card w-full bg-accent bg-opacity-20 text-primary-content mt-6">
            <div className="card-body">
              <h2 className="card-title">How to validate React props using PropTypes?</h2>
              <div className='my-3'>
                <div>
                  <p className='font-medium text-success'>How to validate React props using PropTypes?</p>
                  <p className='font-medium mt-2'>PropTypes is React’s internal mechanism for adding type checking to component props. The PropTypes utility exports a wide range of validators for configuring type definitions.</p>
                  <ul className='list-disc mt-2 px-3'>
                    <li>PropTypes.any: The prop can be of any data type</li>
                    <li>PropTypes.bool: The prop should be a Boolean</li>
                    <li>PropTypes.number: The prop should be a number</li>
                    <li>PropTypes.string: The prop should be a string</li>
                    <li>PropTypes.func: The prop should be a function</li>
                    <li>PropTypes.array: The prop should be an array</li>
                    <li>PropTypes.object: The prop should be an object</li>
                  </ul>
                </div>

              </div>


            </div>

          </div>

          <div className="card w-full bg-accent bg-opacity-20 text-primary-content mt-6">
            <div className="card-body">
              <h2 className="card-title">Tell us the difference between nodejs and express js.</h2>
              <div className='flex items-center justify-around my-3'>
                <div>
                  <p className='font-medium text-success'>NodeJs</p>
                  <ul className='list-disc mt-2 px-3'>
                    <li>It's written in C, C++, JavaScript</li>
                    <li>Level of features are fewer</li>
                    <li>It is built on Google’s V8 engine.</li>
                    <li>Routing is not provided.</li>
                  </ul>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  <p className='font-medium text-success'> Express Js</p>
                  <ul className='list-disc mt-2 '>
                    <li>It's written in C, C++, JavaScript</li>
                    <li>Level of features more than Node.js</li>
                    <li>It is built on Node.js.</li>
                    <li>Routing is provided.</li>
                  </ul>
                </div>
              </div>


            </div>

          </div>

          <div className="card w-full bg-accent bg-opacity-20 text-primary-content mt-6">
            <div className="card-body">
              <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
              <div className='my-3'>


                <div>
                  <p>Custom hook is a JavaScript function name which is special function and use for to call other hooks. It is reusable. It is pass argument and return depends on what we need.</p>
                  <ul className='list-disc mt-2 '>
                    <li className='font-medium text-success'>Uses of custom hooks:-</li>
                    <li>Custom hooks provide us three major benefits: Reusability, Readability and Testability. Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. If i have one or multiple React hooks that will be used at multiple locations in a code, i will use custom React JS hooks. This helps in making the code more readable and make the code clean.
                    </li>

                  </ul>
                </div>
              </div>


            </div>

          </div>
          <div className="card-actions justify-center my-5">
              <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => (
                  <button className="logOutBtn inline-flex gap-2 items-center" onClick={toPdf}><FaDownload /> Download Now</button>
                )}
              </Pdf>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 