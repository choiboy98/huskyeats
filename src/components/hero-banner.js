import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

import recipes from '../recipes/featured-recipes/index';

var counter = 0;

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

const HeroBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            img: file(relativePath: { eq: "icon.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 600, height: 600) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    useInterval(() => {
        counter = (counter + 1) % 3;
        updateRecipe(recipes[counter])
    }, 5000)
    
    const [recipe, updateRecipe] = useState(recipes[counter]);
    const imageTransition = useTransition(recipe, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: 300
    });

    const titleTransition = useTransition(recipe, {
        from: { x: 0, y: 100, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: 300
    });

    const descTransition = useTransition(recipe, {
        from: { x: 0, y: 100, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: 300
    });

    return (
        <div className="container">
            <div className="featured-recipe">
                <div className="inner-recipe">
                    {imageTransition((style, recipe) => 
                        recipe ? 
                        <animated.div style={style}> 
                            <Img fixed={data.img.childImageSharp.fixed} />
                        </animated.div>: ''    
                    )}
                    {titleTransition((style, recipe) => 
                        recipe ? 
                        <animated.div style={style}> 
                            <h1>{recipe.name}</h1>
                        </animated.div>: ''  
                    )}
                    {descTransition((style, recipe) => 
                        recipe ? 
                        <animated.div style={style}> 
                            <h2>{recipe.desc}</h2>
                        </animated.div>: ''  
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroBanner